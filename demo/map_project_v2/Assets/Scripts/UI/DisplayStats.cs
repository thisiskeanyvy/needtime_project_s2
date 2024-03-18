using Godot;
using System;

public partial class DisplayStats : Control
{
	ProgressBar stamina_bar;
	StatsComponent playerStats;

	
	// Called when the node enters the scene tree for the first time.
	public override void _Ready()
	{
		// Link Stamina stat to Stamina Update
		//var player = GetNode<CharacterBody3D>("/root/Environment/Player");
		//player.Connect("UpdateStamina", new Callable(this, MethodName._on_player_update_stamina));
		
		// Link Stamina Bar to his node
		stamina_bar = GetNode<ProgressBar>("Stamina_bar");
		stamina_bar.Value = 100;
	}

	private void SetPlayer(CharacterBody3D player)
	{
		player.Connect("UpdateStamina", new Callable(this, MethodName._on_player_update_stamina));
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	public override void _Process(double delta)
	{
	}
	
		

	private void _on_player_update_stamina(double newStamina)
	{
		//GD.Print(newStamina);
		stamina_bar.Value = newStamina*20;
	}
}



