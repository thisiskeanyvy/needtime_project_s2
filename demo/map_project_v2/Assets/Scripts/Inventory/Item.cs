using Godot;
using System;
using System.Linq;

public enum ItemType 
{
	Equipable,
	Consumable,
	Ressource,
	Trash
}

public enum ToolType 
{
	Pickaxe,
	Axe,
	Hoe,
	CookingKnife
}

public enum WeaponType 
{
	HandAxe,
	Knife,
	FryingPan,
	Bow,
	CraftedSpear
}

public enum RessourceType 
{
	Wood,
	Stick,
	Stone,
	Flint
}

public enum FoodType 
{
	Vegetable,
	RawMeat,
	CookedMeat,
	Foodbar
}

public enum DrinkType 
{
	Alcohol,
	CleanWater,
	DirtyWater,
	DosaCan
}

#nullable enable
public partial class Item : Node
{
	public ItemType ItemType;
	public const string PathToPlayer = "/root/Environment/Players/0";
	[Export] public StaticBody3D Body { get; set; }
	public CollisionShape3D? Hitbox { get; set; }
	public Area3D PickupArea { get; set; }
	public Texture2D Image => ResourceLoader.Load<Texture2D>($"res://Assets/Images/InventoryItems/{$"{ItemName}".ToLower()}.png");
	public ItemType Type { get; set; }
	public Object? ItemName { get; set; }
	
	public PlayerInventory Inventory => GetNodeOrNull<PlayerInventory>($"{PathToPlayer}/InventorySystem");
	public int? Index;
	
	public uint Quantity { get; set; }
	public uint MaxQuantity { get; set; }
	
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		Index = null;
		Body = GetParent<StaticBody3D>();
		Hitbox = Body.GetNodeOrNull<CollisionShape3D>("Hitbox");
		PickupArea = Body.GetNode<Area3D>("PickupArea");
	}
	
	public void init(ItemType itemType, Object itemName, uint initquantity, uint maxquantity) => (ItemType, ItemName, Quantity, MaxQuantity) = (itemType, itemName, initquantity, maxquantity);
	
	private string RemoveNumbers(string s) => s.Where(c => !Char.IsDigit(c)).Aggregate("", (current, c) => current + c);


	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
		//if (Input.IsKeyPressed(Key.A))
		//	PickUp();
		if (Input.IsKeyPressed(Key.E))
			PutDown(Quantity);
	}
	
	public void PickUp()
	{
		if (Inventory.AddItem(this))
		{
			Body.Visible = false;
			if (Hitbox is not null)
				Hitbox.Disabled = true;
			Body.Position += new Vector3(0, -100, 0);
		}
	}
	
	public void PutDown(uint quantity)
	{
		if (quantity > Quantity)
			quantity = Quantity;
		while (quantity > 0 && Inventory.RemoveItem(this))
		{
			// instantiate scene and add it to Items node
			var thing = ResourceLoader.Load<PackedScene>($"res://Scenes/Items/{ItemName}.tscn").Instantiate();
			GetNode("/root/Environment/Items").AddChild(thing);
			var item = thing.GetNode<Item>("ItemComponent");
			
			// get positions to where place the item on the map
			var pos = GetNode<Node3D>($"{PathToPlayer}/PlayerCameraTarget/DropItemPosition").GlobalPosition;
			var playerPos = GetNode<CharacterBody3D>(PathToPlayer).GlobalPosition;
			
			// place the item there
			item.Body.Transform = Body.Transform;
			item.Body.Position = new Vector3((pos.X + playerPos.X) / 2, playerPos.Y - 1.2f,(pos.Z + playerPos.Z) / 2);
			
			// make it visible
			item.Body.Visible = true;
			if (item.Hitbox is not null)
				item.Hitbox.Disabled = false;
			quantity--;
		}

		if (Quantity == 0)
			QueueFree();
	}

	public void Equip() => Body.Visible = true;
	public void Unequip() => Body.Visible = false;
	
	public void Use()
	{
		if (ItemType == ItemType.Equipable && Inventory.Equiped != this)
			return;
		Quantity -= 1;
		if (Quantity == 0)
		{
			Inventory.RemoveItem(this);
			Body.QueueFree();
		}
	}
	
	public static bool operator ==(Item? item1, Item? item2) => item1 is null || item2 is null ? item1 is null && item2 is null : $"{item1.ItemType}{item1.ItemName}" == $"{item2.ItemType}{item2.ItemName}";
	public static bool operator !=(Item? item1, Item? item2) => !(item1==item2);

	public override string ToString() => $"Name: {ItemName}\nType: {ItemType}\nSecond Type: {ItemName}\nQuantity: {Quantity}";
}

