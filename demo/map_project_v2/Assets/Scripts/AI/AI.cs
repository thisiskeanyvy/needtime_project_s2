using Godot;
using System;

public partial class AI : CharacterBody3D
{
	public const float Speed = 25.0f;

	public bool isTracking = false;
	public Node Target = null;
	public Vector3 initPosition; // position initiale 

	// Get the gravity from the project settings to be synced with RigidBody nodes.
	public float gravity = ProjectSettings.GetSetting("physics/3d/default_gravity").AsSingle();

	public override void _Ready()
	{
		initPosition = Position;
	}

	public override void _PhysicsProcess(double delta)
	{
		Vector3 velocity = Velocity;

		// Add the gravity.
		if (!IsOnFloor())
			velocity.Y -= gravity * (float)delta;

		if (isTracking || (Position.X, Position.Y) != (initPosition.X, initPosition.Y))
		{
			// get path to move to
			Vector3 pathToTrack;
			
			if (isTracking)
				pathToTrack = GetNode<CharacterBody3D>(Target.GetPath()).Position - Position;
			else
				pathToTrack = initPosition - Position;
		
			// move to destination
			velocity.X = pathToTrack.X * Speed * (float)delta;
			velocity.Z = pathToTrack.Z * Speed * (float)delta;
		
			// if ~same coordinates than original position, tp back to it
			if (Math.Abs(pathToTrack.X) <= 1 && Math.Abs(pathToTrack.Z) <= 1)
				Position = new Vector3(initPosition.X, Position.Y, initPosition.Z);

			if (Math.Abs(Position.X - initPosition.X) >= 50 || Math.Abs(Position.Z - initPosition.Z) >= 50)
			{
				isTracking = false;
				Target = null;
			}
		}


		Velocity = velocity;
		MoveAndSlide();
	}


	void _on_area_3d_body_entered(Node player)
	{
		if (player.GetPath().GetName(player.GetPath().GetNameCount()-1) == "Player")
		{
			GD.Print(player.GetPath());
			isTracking = true;
			Target = player;
			//GD.Print("Entered");
			GD.Print(GetTree().Root.GetNode<CharacterBody3D>(player.GetPath())); 
		}
	}

	void _on_area_3d_body_exited(Node player)
	{
		//GD.Print("Exited");
		isTracking = false;
		Target = null;
	}
}
