// Define components in this file in the following format
ECS.Components.Position = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
	
  return this;
}
ECS.Components.Position.prototype.name = "Position";

ECS.Components.Health = function (initialHealth, maxHealth){
	this.initialHealth = initialHealth;
	this.maxHealth = maxHealth;
	
	return this;
}
ECS.Components.Health.prototype.name = "Health";

ECS.Components.Damage = function (damage){
	this.damage = damage;
	
	return this;
}
ECS.Components.Damage.prototype.name = "Damage";

ECS.Components.Velocity = function (velocity){
	this.velocity = velocity;
	
	return this;
}
ECS.Components.Velocity.prototype.name = "Velocity";