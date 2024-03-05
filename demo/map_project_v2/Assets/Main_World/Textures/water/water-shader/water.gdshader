shader_type spatial;

uniform vec3 albedo : source_color;
uniform float metallic : hint_range(0.0,1.0) = 0;
uniform float roughness : hint_range(0.0,1.0) = 0.02;
uniform sampler2D texture_normal;
uniform sampler2D texture_normal2;
uniform vec2 wave_direction = vec2(2.0,0.0);
uniform vec2 wave_direction2 = vec2(-1.0,-1.0);
uniform float time_scale : hint_range(0.0,0.2,0.005) = 0.004;


void fragment() {
	
	vec2 time = (TIME * wave_direction) *  time_scale;
	vec2 time2 = (TIME * wave_direction2) *  time_scale;
	vec3 normal_blend = mix(texture(texture_normal,UV + time).rgb, texture(texture_normal2,UV + time2).rgb,0.5);
	ALBEDO = albedo;
	METALLIC = metallic;
	ROUGHNESS = roughness;
	NORMAL_MAP = normal_blend;
}
