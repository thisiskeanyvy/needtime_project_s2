#nullable enable
using Godot;
using System;

public partial class PlayerInventory : Node
{	
	[Signal]
	public delegate void UpdateInventorySlotEventHandler(int index);
	
	public Item?[] _inventory = new Item?[4];
	private Item? _equiped;
	public Item? Selected;
	public Item? Equiped => _equiped;
	
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		Connect("UpdateInventorySlot", new Callable(GetNode<Inventory_UI>("/root/Environment/HUD/CanvasLayer/Inventory_UI"), "__update_specific_itemslot"));
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
	}
	
	private int? __get_next_free_slot()
	{
		for (var i = 0; i < _inventory.Length; i++)
			if (_inventory[i] is null)
				return i;
		return null;
	}
	
	public bool AddItem(Item item)
	{
		var add = Contains(item);
		if (add is null)
			return Add(item);
		add.Quantity++;
		EmitSignal("UpdateInventorySlot", (int)add.Index!);
		//GD.Print($"Adding item {item.ItemName} to preexisting {add.ItemName}, new quantity = {add.Quantity}");
		item.QueueFree();
		return true;
	}

	private bool Add(Item item)
	{
		int? index = __get_next_free_slot();
		if (index is null)
			return false;
		_inventory[(int)index] = item;
		item.Index = index;
		EmitSignal("UpdateInventorySlot", (int)index);
		//GD.Print($"Adding Item {item.ItemName} at slot {index}");
		return true;
	}

	public bool RemoveItem(Item item)
	{
		if (item.Index is null)
			return false;
		var index = item.Index;
		var it = _inventory[(int)item.Index];
		if (it is null)
			return false;
		it.Quantity--;
		if (it.Quantity == 0)
		{
			_inventory[(int)item.Index] = null;
			item.Index = null;
		}
		EmitSignal("UpdateInventorySlot", (int)index);
		return true;
	}

	public void SwamItems(int index1, int index2)
	{
		(_inventory[index1], _inventory[index2]) = (_inventory[index2], _inventory[index1]);
		(_inventory[index2]!.Index, _inventory[index1]!.Index) = (_inventory[index1]?.Index, _inventory[index2]?.Index);
	}

	public Item? GetItem(int index)
	{
		return _inventory[index];
	}

	public Item? Contains(Item item)
	{
		//GD.Print("search:");
		foreach (var it in _inventory)
		{
			//GD.Print(it);
			//GD.Print($"equal: {(it is not null ? item == it : null)}, canadd: {(it is not null ? it.Quantity < it.MaxQuantity : null)}");
			//GD.Print((it is not null ? $"{it.ItemType} {item.ItemType} {it.SecondType} {item.SecondType}" : "it is null"));
			if (it is not null && item == it && it.Quantity < it.MaxQuantity)
			{
				return it;
			}
		}
		//GD.Print("");
		return null;
	}
}
