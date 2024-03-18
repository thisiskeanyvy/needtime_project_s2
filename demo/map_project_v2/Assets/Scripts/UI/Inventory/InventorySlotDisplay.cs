#nullable enable
using Godot;
using System;

public partial class InventorySlotDisplay : Panel
{
	Sprite2D ItemImage;
	Label QuantityDisplay;
	public uint Index => Name.ToString()[^1] - 48u;
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		ItemImage = GetNode<Sprite2D>("CenterContainer/Panel/ItemDisplay");
		ItemImage.Visible = true;
		QuantityDisplay = GetNode<Label>("Quantity");
		QuantityDisplay.Visible = true;
		QuantityDisplay.Text = "0";
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
	}

	public void Update(Item? item)
	{
		if (item is null)
		{
			//GD.Print("removing inventory slot texture");
			ItemImage.Visible = false;
			ItemImage.Texture = null;
			QuantityDisplay.Visible = false;
		}
		else
		{
			//GD.Print("changing inventory slot texture");
			ItemImage.Visible = true;
			ItemImage.Texture = item.Image;
			QuantityDisplay.Text = item.Quantity.ToString();
			QuantityDisplay.Visible = item.Quantity > 1;
			//GD.Print(ItemImage.Texture, ItemImage.Texture.ResourcePath);
		}
	}
}
