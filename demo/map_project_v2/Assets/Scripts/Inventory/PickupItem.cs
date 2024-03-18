#nullable enable
using Godot;
using System;

public partial class PickupItem : RayCast3D
{
	
	Node? collider;
	
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		collider = null;
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
		if (IsColliding())
		{
			if (collider is null)
			{
				collider = (Node)GetCollider();
				//GD.Print($"entered collision with {collider?.Name}");
			}
			else if (collider is Area3D area && area.Name == "PickupArea" && Input.IsActionJustPressed("pickup"))
			{
				collider = null;
				Pickup(area.GetParent().Name);
			}
		}
		else if (collider is not null)
		{
			//GD.Print($"exited collision with {collider.Name}");
			collider = null;
		}
	}
	
	private void Pickup(string name)
	{
		var item = GetNode<Item>($"/root/Environment/Items/{name}/ItemComponent");
		//GD.Print($"picking up item {item.Name}");
		item.PickUp();
	}
}
