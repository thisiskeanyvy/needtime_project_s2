namespace GodoMulti;

using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Timers;

    class Message
    {
        static TcpListener listener;
        static List<TcpClient> clients = new List<TcpClient>();
        static System.Timers.Timer timer;
        static int clientCount = 0;

        public static void StartServer()
        {
            listener = new TcpListener(IPAddress.Any, 1234);
            listener.Start();
            Console.WriteLine("Server started.");

            // Envoie toutes les 50 ms (représente la position du host)
            // Dans Godot implémentation en tant que task de fond
            timer = new System.Timers.Timer(50);
            timer.Elapsed += OnTimedEvent;
            timer.AutoReset = true;
            timer.Enabled = true;

            while (true)
            {
                TcpClient client = listener.AcceptTcpClient();
                clients.Add(client);

                // Incrémenter le compteur de clients et attribuer un ID unique
                int clientId = Interlocked.Increment(ref clientCount);

                Thread clientThread = new Thread(() => HandleClient(client, clientId));
                clientThread.Start();
            }
        }

        private static void OnTimedEvent(Object source, ElapsedEventArgs e)
        {
            //Appel de la méthode qui récupère les coordonnées côté serveur
            //Puis les passer en paramètre dans sendToAllClients
            SendToAllClients("(0,position host)");
        }

        public static void StartClient()
        {
            TcpClient client = new TcpClient("127.0.0.1", 1234);
            Console.WriteLine("Connected to server.");

            Thread receiveThread = new Thread(ReceiveMessages);
            receiveThread.Start(client);

            string message;
            while (!string.IsNullOrEmpty((message = Console.ReadLine())))
            {
                //Passer en paramètre les coordonnées du client dans message
                SendMessage(client, message);
            }

            client.Close();
        }

        static void HandleClient(object clientObject, int clientId)
        {
            TcpClient client = (TcpClient)clientObject;
            Console.WriteLine("Client connected: " + client.Client.RemoteEndPoint + ", ID: " + clientId);

            while (true)
            {
                byte[] buffer = new byte[1024];
                int bytesRead = client.GetStream().Read(buffer, 0, buffer.Length);
                if (bytesRead > 0)
                {
                    string receivedMessage = Encoding.ASCII.GetString(buffer, 0, bytesRead);
                    receivedMessage = $"({clientId},{receivedMessage})";
                    Console.WriteLine("Message received from " + client.Client.RemoteEndPoint + ": " + receivedMessage);
                    BroadcastMessage($"({clientId},{receivedMessage})", client);
                }
            }
        }

        static void BroadcastMessage(string message, TcpClient sender)
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

        public static void SendToAllClients(string message)
        {
            byte[] buffer = Encoding.ASCII.GetBytes(message);

            foreach (TcpClient client in clients)
            {
                try
                {
                    // Aucune données à toucher ici
                    NetworkStream stream = client.GetStream();
                    stream.Write(buffer, 0, buffer.Length);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error sending message to client: {ex.Message}");
                }
            }
        }

        static void ReceiveMessages(object clientObject)
        {
            TcpClient client = (TcpClient)clientObject;
            while (true)
            {
                byte[] buffer = new byte[1024];
                int bytesRead = client.GetStream().Read(buffer, 0, buffer.Length);
                if (bytesRead > 0)
                {
                    string receivedMessage = Encoding.ASCII.GetString(buffer, 0, bytesRead);
                    Console.WriteLine("Message received from server: " + receivedMessage); //parse le receiveMessage côté client
                    //Appel de la méthode pour changer les coordonées
                }
            }
        }

        static void SendMessage(TcpClient client, string message)
        {
            byte[] buffer = Encoding.ASCII.GetBytes(message);
            client.GetStream().Write(buffer, 0, buffer.Length);
        }
    }
