using Godot;
using System;

public partial class StatsComponent : Node
{
	[Export]
	public double MaxHealth { get; private set; }
	[Export]
	public double Health { get; private set; }
	
	[Export]
	public double MaxHydration { get; private set; }
	[Export]
	public double Hydration { get; private set; }
	
	[Export]
	public double MaxStamina { get; private set; }
	[Export]
	public double Stamina { get; private set; }
	
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		
		
	}
	
	public void SetStatsComponent(double maxHealth, double initHealth, double maxHydration, double initHydration, double maxStam, double initStam) => (MaxHealth, Health, MaxHydration, Hydration, MaxStamina, Stamina) = (maxHealth, initHealth, maxHydration, initHydration, maxStam, initStam);
	//public StatsComponent(double maxHealth, double initHealth, double maxHydration, double initHydration, double maxStam, double initStam) : MaxHealth(maxHealth)     => (Health, Hydration, Stamina) = (initHealth, initHydration, initStam);
	
	public void RegainStamina(double quantity) => __UpdateStamina(quantity);
	public void UseStamina(double quantity) => __UpdateStamina(-quantity);
	public void Heal(double health) => __UpdateHealth(health);
	public void TakeDamage(double damage) => __UpdateHealth(-damage);
	public void Drink(double quantity) => __UpdateHydration(quantity);
	public void Dehydrate(double quantity) => __UpdateHydration(-quantity);
	
	private void __UpdateStamina(double q) => Stamina = Math.Clamp(Stamina + q, 0, MaxStamina);
	private void __UpdateHealth(double q) => Health = Math.Clamp(Health + q, 0, MaxHealth);
	private void __UpdateHydration(double q) => Hydration = Math.Clamp(Stamina + q, 0, MaxHydration);
}

