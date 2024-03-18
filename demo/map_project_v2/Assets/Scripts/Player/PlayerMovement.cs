using Godot;
using System;

public partial class PlayerMovement : CharacterBody3D
{
	[Signal]
	public delegate void UpdateStaminaEventHandler(float newStamina);

	StatsComponent stats;
	public bool IsInMenus => Input.MouseMode == Input.MouseModeEnum.Visible;

	[Export] public float JumpVelocity = 10f;
	[Export] public uint StamRegen = 2;
	[Export] public float Speed = 5f;
	[Export] public float Sprint_speed = 9f;
	[Export] public static float Stamina_timer = 1.5f; // en secondes
	public float process_stamina_timer = Stamina_timer;


	// Get the gravity from the project settings to be synced with RigidBody nodes.
	[Export] public float GravityModifier = 5f;
	public float gravity => ProjectSettings.GetSetting("physics/3d/default_gravity").AsSingle() * GravityModifier;



	veilEffect veil;
	[Export] double LookAngle = 70f;
	const double SensiReducer = 5.0;
	[Export] double Sensi = 1.5f / SensiReducer;

	Vector2 mouseDelta = new Vector2();

	Node3D camTarget;

	//public Node3D root => GetParent<Node3D>();
	//public bool isPlayerAuthority => root.IsMultiplayerAuthority();
	public override void _EnterTree()
	{
		/*
		SetMultiplayerAuthority(int.Parse(Name));
		base._EnterTree();
		camTarget = GetNode("PlayerCameraTarget") as Node3D;
		Input.MouseMode = Input.MouseModeEnum.Captured;
		stats = GetNode<StatsComponent>("PlayerStatsComponent");
		stats.SetStatsComponent(100f, 100f, 50f, 50f, 5f, 5f);

		//setup veil effect 
		veil = GetNode<veilEffect>("/root/Environment/Camera3D/veil_effect");
		*/
	}
	
	
	public override void _Ready()
	{
		base._Ready();
		camTarget = GetNode("PlayerCameraTarget") as Node3D;
		Input.MouseMode = Input.MouseModeEnum.Captured;
		stats = GetNode<StatsComponent>("PlayerStatsComponent");
		stats.SetStatsComponent(100f, 100f, 50f, 50f, 5f, 5f);

		//setup veil effect 
		veil = GetNode<veilEffect>("/root/Environment/Camera3D/veil_effect");
	}

	public override void _Input(InputEvent @event)
	{
		if (@event is InputEventMouseMotion eventmouse)
		{
			mouseDelta = eventmouse.Relative;
		}
	}

	public override void _PhysicsProcess(double delta)
	{
		//if (IsMultiplayerAuthority())
		//{
			Vector3 velocity = Velocity;
			Vector2 inputDir = Input.GetVector("strafe_left", "strafe_right", "move_forward", "move_back");
			Vector3 direction = (Transform.Basis * new Vector3(inputDir.X, 0, inputDir.Y)).Normalized();

			float processSpeed = Speed;
			bool jump = Input.IsKeyPressed(Key.Space);
			bool running = Input.IsKeyPressed(Key.Shift);
			bool IsStatic = (inputDir.X, inputDir.Y) == (0, 0);

			// Add the gravity.
			if (!IsOnFloor())
			{
				velocity.Y -= gravity * (float)delta;
				if (stats.Stamina > delta && !IsStatic && running)
					processSpeed = Sprint_speed;
			}

			// running
			else
			{
				if (running)
				{
					if (stats.Stamina > delta && !IsStatic)
					{
						processSpeed = Sprint_speed;
						stats.UseStamina(1 * delta);
						EmitSignal("UpdateStamina", stats.Stamina);
						process_stamina_timer = Stamina_timer;
					}
				}

				else if (stats.Stamina < stats.MaxStamina && process_stamina_timer <= 0 /* && IsStatic*/)
				{
					stats.RegainStamina(StamRegen * delta);
					EmitSignal("UpdateStamina", stats.Stamina);
				}
				else if (process_stamina_timer > 0 && IsStatic)
				{
					process_stamina_timer -= 1 * (float)delta;
				}
			}


			// Handle Jump.
			if (jump && IsOnFloor() && stats.Stamina >= 75 * delta && !IsInMenus)
			{
				if (stats.Stamina >= stats.MaxStamina / 2)
					velocity.Y = JumpVelocity;
				else
					velocity.Y = JumpVelocity * 0.7f;
				stats.UseStamina(20 * delta);
				EmitSignal("UpdateStamina", stats.Stamina);
			}

			float staminaDebuff = stats.Stamina >= 0.2 ? 1 : 0.5f;
			// Get the input direction and handle the movement/deceleration.
			// As good practice, you should replace UI actions with custom gameplay actions.
			if (direction != Vector3.Zero && !IsInMenus)
			{
				velocity.X = direction.X * processSpeed * staminaDebuff;
				velocity.Z = direction.Z * processSpeed * staminaDebuff;
			}
			else
			{
				velocity.X = Mathf.MoveToward(Velocity.X, 0, processSpeed);
				velocity.Z = Mathf.MoveToward(Velocity.Z, 0, processSpeed);
			}


			Velocity = velocity;

			//Set veil_effect opacity
			veil.SelfModulate = new Color(veil.SelfModulate, (float)(1 - (stats.Stamina / (stats.MaxStamina / 2))));
		//}
		
		MoveAndSlide();
	}

	public override void _Process(double delta)
	{
		//if (IsMultiplayerAuthority())
		//{
			if (!IsInMenus)
			{
				// player camera target rotation
				camTarget.RotationDegrees -= new Vector3(Mathf.RadToDeg(mouseDelta.Y), 0, 0) * (float)Sensi * (float)delta;
				camTarget.RotationDegrees =
					new Vector3(Mathf.Clamp(camTarget.RotationDegrees.X, (float)-LookAngle, (float)LookAngle),
						camTarget.RotationDegrees.Y, camTarget.RotationDegrees.Z);

				// player body rotation
				RotationDegrees -= new Vector3(0, Mathf.RadToDeg(mouseDelta.X), 0) * (float)Sensi * (float)delta;

			}

			mouseDelta = new Vector2();

			if (Input.IsActionJustPressed("escape"))
			{
				var ui = GetNode<Inventory_UI>("/root/Environment/HUD/CanvasLayer/Inventory_UI");
				if (ui.IsOpen)
					ui.ChangeState();
				else
					ChangeMouseState();
			}
		//}
		
	}

	public void ChangeMouseState()
	{
		if (Input.MouseMode == Input.MouseModeEnum.Visible)
			Input.MouseMode = Input.MouseModeEnum.Captured;
		else
			Input.MouseMode = Input.MouseModeEnum.Visible;
	}

}
