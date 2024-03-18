using Godot;
using System;
using System.Linq;
using Godot.Collections;

public partial class Inventory_UI : Control
{
	public bool IsOpen = false;
	public PlayerInventory inventory;
	public InventorySlotDisplay[] slots;
	
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		Visible = false;
		IsOpen = false;
		//inventory = GetNode<PlayerInventory>("/root/Environment/Player/InventorySystem");
		
		var i = 0;
		slots = new InventorySlotDisplay[4];
		foreach (Node slot in GetChild<GridContainer>(3) .GetChildren().ToArray())
			if (slot is InventorySlotDisplay s)
				slots[i++] = s;
				
		UpdateSlots();
	}

	
	private void SetInventory(CharacterBody3D player)
	{
		inventory = player.GetNode<PlayerInventory>("InventorySystem");
	}

	private void __update_specific_itemslot(int id)
	{
		slots[id].Update(inventory.GetItem(id));
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
		if (Input.IsActionJustPressed("open_inv"))
			ChangeState();
	}

	public void UpdateSlots()
	{
		for (var i = 0; i < slots.Length; i++)
		{
			slots[i].Update(inventory?.GetItem(i));
		}
	}
	
	public void ChangeState()
	{
		if (!IsOpen)
			(Visible, IsOpen, Input.MouseMode) = (true, true, Input.MouseModeEnum.Visible);
		else
			(Visible, IsOpen, Input.MouseMode) = (false, false, Input.MouseModeEnum.Captured);
	}
	
}
