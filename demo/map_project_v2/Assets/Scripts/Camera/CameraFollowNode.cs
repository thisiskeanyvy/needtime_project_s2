using Godot;
using System;

public partial class CameraFollowNode : Camera3D
{
	
	Node3D camTarget;
	
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
	}
	
	private void SetCamTarget(CharacterBody3D player)
	{
		camTarget = player.GetNode<Node3D>("PlayerCameraTarget");
	}
	
	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
		if (camTarget is not null)
			Transform = camTarget.GlobalTransform;

	}

}



