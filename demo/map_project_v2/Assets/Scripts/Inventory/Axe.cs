using Godot;
using System;

public partial class Axe : StaticBody3D
{
	public int Durability;
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		GetNode<Item>("ItemComponent").init(ItemType.Equipable, ToolType.Axe, 1, 1);
		//itemComp.Body = GetNode<StaticBody3D>(".");
		//itemComp.Image = ResourceLoader.Load<Texture2D>("res://Assets/Images/InventoryItems/axe.png");
		//itemComp.Hitbox = GetNode<CollisionShape3D>("Hitbox");
		//itemComp.PickupArea = GetNode<Area3D>("PickupArea");
		
		/*foreach (var child in itemComp.Body.GetChildren())
		{
			if (child is CollisionShape3D hitbox && hitbox.Name == "Hitbox")
				itemComp.Hitbox = hitbox;
			else if (child is Area3D pickupArea && pickupArea.Name == "PickupArea")
				itemComp.PickupArea = pickupArea;
		}*/
		
		Durability = 100;
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
	}
}
