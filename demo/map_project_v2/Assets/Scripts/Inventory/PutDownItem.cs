using Godot;
using System;

public partial class PutDownItem : RayCast3D
{
	Vector3? coords;
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
		GlobalPosition = GetNode<Node3D>("../PlayerCameraTarget/DropItemPosition").GlobalPosition + new Vector3(0, 1.5f, 0);
		
	}
}
