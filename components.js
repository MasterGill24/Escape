ECS.Components.Type = function(type) {
	this.type = type;

	return this;
}
ECS.Components.Type.prototype.name = "Type";

/**
 * The entity's position in the world.
 */
ECS.Components.Position = function(x, y) {
	this.x = x || 0;
	this.y = y || 0;

	return this;
}
ECS.Components.Position.prototype.name = "Position";

ECS.Components.Speed = function(speed) {
	this.speed = speed;

	return this;
}
ECS.Components.Speed.prototype.name = "Speed";

/**
 * The entity's health and stores the max value it can be.
 */
ECS.Components.Health = function (maxHealth, initHealth){
	this.maxHealth = maxHealth;
	this.initHealth = initHealth || maxHealth;

	return this;
}
ECS.Components.Health.prototype.name = "Health";

/**
 * How much damage is inflicted upon other entities when they collide.
 */
ECS.Components.Damage = function (damage){
	this.damage = damage;

	return this;
}
ECS.Components.Damage.prototype.name = "Damage";

/**
 * The velocity of the entity.
 */
ECS.Components.Velocity = function (){
	this.velocity = new Vector(0, 0);

	return this;
}
ECS.Components.Velocity.prototype.name = "Velocity";

/**
 * The bounding box used for testing collisions.
 */
ECS.Components.Collision = function(width, height) {
	this.width = width;
	this.height = height;

	return this;
}
ECS.Components.Collision.prototype.name = "Collision";

 /**
	* The spritesheet used for drawing.
	*/
ECS.Components.Spritesheet = function(spritesheet, width, height) {
	// A spritesheet as an image
	this.spritesheet = spritesheet;
	// The index of the current animation
	this.animationNum = 0;
	// The index of the current frame
	this.frameNum = 0;

	// The dimensions of each frame
	this.width = width;
	this.height = height;

	return this;
}
ECS.Components.Spritesheet.prototype.name = "Spritesheet";

/**
 * Marks the entity to be controlled by the player.
 */
ECS.Components.PlayerControl = function() {
	return this;
}
ECS.Components.PlayerControl.prototype.name = "PlayerControl";

ECS.Components.Gravity = function() {
	this.inAir = false;
	this.gravityPos = 0;
	return this;
}
ECS.Components.Gravity.prototype.name = "Gravity";
