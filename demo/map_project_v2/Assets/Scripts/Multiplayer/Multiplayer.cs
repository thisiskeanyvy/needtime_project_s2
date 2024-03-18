using Godot;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Timers;

public partial class Multiplayer : Node3D
{
	[Signal] public delegate void PlayerEnterSceneEventHandler(CharacterBody3D player);
	//public ENetMultiplayerPeer peer = new ENetMultiplayerPeer();
	
	
	public Dictionary<int, Vector3> players = new ();
	public Queue<Object> data = new ();
	PackedScene playerScene => ResourceLoader.Load<PackedScene>("res://Scenes/player.tscn");
	
	public override void _Ready()
	{
		Input.MouseMode = Input.MouseModeEnum.Visible;
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
	}

	// the multiplayer part
	private void ResetPlayer()
	{
		//deposit all dead/disconnected player's items
		/*var oldPlayer = GetNodeOrNull<CharacterBody3D>("pathtoplayer");
		if (oldPlayer is not null)
		{
			foreach (var item in oldPlayer.GetNode<PlayerInventory>("InventorySystem")._inventory)
			{
				item?.PutDown(item.Quantity);
			}

			oldPlayer.Name = "tobedeleted";
			oldPlayer.QueueFree();
		}*/
		var player = playerScene.Instantiate<CharacterBody3D>();
		GetNode("/root/Environment/Players").AddChild(player);//CallDeferred("add_child",player);
		player.Name = "0";
		EmitSignal("PlayerEnterScene", player);
	}
	
	
	TcpListener listener;
	List<TcpClient> clients = new List<TcpClient>();
	System.Timers.Timer timer;
	int clientCount = 0;
	
	private void _on_host_pressed()
	{
		ResetPlayer();
		StartServer();
		GetNode("/root/Environment/Multiplayer_Test/Host").QueueFree();
		GetNode("/root/Environment/Multiplayer_Test/Join").QueueFree();
		//var items = new Dictionary<int, Transform3D>();
		var axe = GetNode<Node3D>("/root/Environment/Items/3");
		var player = GetNode<Node3D>("/root/Environment/Players/0");
		//foreach (StaticBody3D item in parent.GetChildren())
		//	items[int.Parse(item.Name)] = item.GlobalTransform;
		//data.Enqueue((items, "Item"));
		data.Enqueue((new Dictionary<int, Vector3> {{2, axe.GlobalPosition}}, "Item"));
		data.Enqueue((1, "Item"));
		//GD.Print(Serialize(data));
		Update(Serialize(data));
	}

	private void _on_join_pressed()
	{
		NewPlayerClient();
		StartClient();
		GetNode("/root/Environment/Multiplayer_Test/Host").QueueFree();
		GetNode("/root/Environment/Multiplayer_Test/Join").QueueFree();
	}

	public void NewPlayerServer(int id, Vector3 pos)
	{
		players[id] = pos;
	}
	
	public void NewPlayerClient()
	{
		var player = playerScene.Instantiate<CharacterBody3D>();
		GetNode("/root/Environment").AddChild(player);//CallDeferred("add_child",player);
		player.Name = "Player";
		EmitSignal("PlayerEnterScene", player);
		//return (id, player.GlobalTransform);

	}

	public Vector3 GodotStringToVector3(String pos)
	{
		string[] comp = pos.Substring(1, pos.Length - 2).Split(',');
		return new Vector3(float.Parse(comp[0], new CultureInfo("EN-us")),float.Parse(comp[1], new CultureInfo("EN-us")), float.Parse(comp[2], new CultureInfo("EN-us")));
	}
	
	public string Serialize(Queue<Object> data)
	{
		var res = "";

		while (data.Count > 0)
		{
			switch (data.Dequeue())
			{
				case (Dictionary<int, Vector3> nodes, string type):
					foreach ((int id, Vector3 position) in nodes)
						res += $"/root/Environment/{type}s/{id}|update|{Json.Stringify(position)};";
					break;
				case (int id, Vector3 position, string type, string path):
					res += $"/root/Environment/{type}s|add|{Json.Stringify(position)}&{id}&{path}&{type};";
					break;
				case (int id, string type):
					res += $"/root/Environment/{type}s/{id}|remove|null;";
					break;
				default:
					res += "";
					break;
			}
		}

		return res;
	}

	public void Update(string data)
	{
		GD.Print(data);
		var updates = data.Split(';');
		foreach (var update in updates)
		{
			if (update == "")
				continue;
			var infos = update.Split('|');
			var node = GetNode<Node3D>(infos[0]);
			var args = infos[2].Split('&');
			switch (infos[1])
			{
				case "update":
					node.GlobalPosition = GodotStringToVector3(Json.ParseString(args[0]).ToString());
					break;
				case "add":
					Node3D child;
					if (args[3] == "Item")
						child = ResourceLoader.Load<PackedScene>(args[2]).Instantiate<StaticBody3D>();
					else
						child = ResourceLoader.Load<PackedScene>(args[2]).Instantiate<CharacterBody3D>();
					child.GlobalPosition = GodotStringToVector3(Json.ParseString(args[0]).ToString());
					node.AddChild(child);
					child.Name = args[1];
					break;
				case "remove":
					node.QueueFree();
					break;
				default:
					GD.Print("wtf");
					break;
			}
		}
	}

	public void StartServer()
	{
		listener = new TcpListener(IPAddress.Any, 1234);
		listener.Start();
		GD.Print("Server started.");

		// Créer un timer pour envoyer "Bonjour" toutes les 50 ms (représente la position du host)
		timer = new System.Timers.Timer(50);
		timer.Elapsed += OnTimedEvent;
		timer.AutoReset = true;
		timer.Enabled = true;

		var loop = Task.Run(async () =>
		{
			while (true)
			{
				TcpClient client = listener.AcceptTcpClient();
				clients.Add(client);

				// Incrémenter le compteur de clients et attribuer un ID unique
				int clientId = Interlocked.Increment(ref clientCount);

				Thread clientThread = new Thread(() => HandleClient(client, clientId));
				clientThread.Start();
			}
		});
	}

	private void OnTimedEvent(Object source, ElapsedEventArgs e)
	{
		SendToAllClients("(0,position host)");
		//GD.Print(JsonConvert.SerializeObject<Dictionary<int, Transform3D>>(players));
	}

	private void SendMessageOnTimer(Object source, ElapsedEventArgs e, TcpClient client)
	{
		//GD.Print("send message to server");
		SendMessage(client, "message"); // targets to sync (json format)
	}
	
	public void StartClient()
	{
		TcpClient client = new TcpClient("127.0.0.1", 1234);
		GD.Print("Connected to server.");

		Thread receiveThread = new Thread(ReceiveMessages);
		receiveThread.Start(client);

		string message;

		timer = new System.Timers.Timer(50);
		timer.Elapsed += (sender, e) => SendMessageOnTimer(sender, e, client);
		timer.AutoReset = true;
		timer.Enabled = true;
		

		//client.Close();
	}

	void HandleClient(object clientObject, int clientId)
	{
		TcpClient client = (TcpClient)clientObject;
		GD.Print("Client connected: " + client.Client.RemoteEndPoint + ", ID: " + clientId);
		NewPlayerServer(clientCount+1, new Vector3()); // send coords
		
		while (true)
		{
			byte[] buffer = new byte[1024];
			int bytesRead = client.GetStream().Read(buffer, 0, buffer.Length);
			if (bytesRead > 0)
			{
				string receivedMessage = Encoding.ASCII.GetString(buffer, 0, bytesRead);
				receivedMessage = $"({clientId},{receivedMessage})";
				GD.Print("Message received from " + client.Client.RemoteEndPoint + ": " + receivedMessage);
				BroadcastMessage($"({clientId},{receivedMessage})", client);
			}
		}
	}

	void BroadcastMessage(string message, TcpClient sender)
	{
		byte[] buffer = Encoding.ASCII.GetBytes(message);

		foreach (TcpClient client in clients)
		{
			if (client != sender)
			{
				client.GetStream().Write(buffer, 0, buffer.Length);
			}
		}
	}

	public void SendToAllClients(string message)
	{
		byte[] buffer = Encoding.ASCII.GetBytes(message);

		foreach (TcpClient client in clients)
		{
			try
			{
				NetworkStream stream = client.GetStream();
				stream.Write(buffer, 0, buffer.Length);
			}
			catch (Exception ex)
			{
				GD.Print($"Error sending message to client: {ex.Message}");
			}
		}
	}

	void ReceiveMessages(object clientObject)
	{
		TcpClient client = (TcpClient)clientObject;
		while (true)
		{
			byte[] buffer = new byte[1024];
			int bytesRead = client.GetStream().Read(buffer, 0, buffer.Length);
			if (bytesRead > 0)
			{
				string receivedMessage = Encoding.ASCII.GetString(buffer, 0, bytesRead);
				GD.Print("Message received from server: " + receivedMessage /*JsonConvert.DeserializeObject<Dictionary<int, Transform3D>>(receivedMessage)*/);
			}
			//Update(); // update everyone's coordinates
		}
		
	}

	void SendMessage(TcpClient client, string message)
	{
		byte[] buffer = Encoding.ASCII.GetBytes(message);
		client.GetStream().Write(buffer, 0, buffer.Length);
	}
	

}


