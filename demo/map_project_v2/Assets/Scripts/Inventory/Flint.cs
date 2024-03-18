using Godot;
using System;

public partial class Flint : StaticBody3D
{
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		GetNode<Item>("ItemComponent").init(ItemType.Ressource, RessourceType.Flint, 1, 10);
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
	}
}
