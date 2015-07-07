ECS.Systems.Collision = function() {
  for (var i = 0; i < ECS.Entities.length; ++i) {
    var entity = ECS.Entities[i];
    if (entity.components.Collision && entity.components.Position) {
      for (var j = 0; j < ECS.Entities.length; ++j) {
        var other = ECS.Entities[j];
        if (other.components.Collision &&
           other.components.Position &&
           entity !== other &&
           (Math.abs(entity.components.Position.x - other.components.Position.x) * 2 < (entity.components.Collision.width + other.components.Collision.width)) &&
           (Math.abs(entity.components.Position.y - other.components.Position.y) * 2 < (entity.components.Collision.height + other.components.Collision.height))) {
          // Every entity now has a type stored in entity.components.Type.type
          // Use it in to determine what to do in case of a collision
			
          // If one is a player and one is an enemy
          // Decrement the player's health by the enemy's damage
			if (entity.components.Type.type === "player" && other.components.Type.type === "enemy") {
				entity.components.Health.health -= entity.components.Damage.damage;
			}
          // If one is the player and one is a tile
          // Stop the player
			if (entity.components.Type.type === "player" && other.components.Type.type === "tile") {
				//set velocity to 0
				entity.components.Velocity.velocity = new Vector(0, 0);
			}
          // If one is an enemy and one is a tile
          // Turn the enemy around
			if (entity.components.Type.type === "enemy" && other.components.Type.type === "tile") {
				//make velocity negative (x --> -x)
				entity.components.Velocity.velocity.x = -entity.components.Velocity.velocity.x; 
			}
          // If one is a bullet and one is an enemy
          // Remove the bullet and decrement the enemy's health by the bullet's damage
			if (entity.components.Type.type === "bullet" && other.components.Type.type === "enemy") {
				other.components.Health.health -= entity.components.Damage.damage;
				delete entity;
			}
          // If one is a bullet and one is a tile
          // Remove the bullet
			if (entity.components.Type.type === "bullet" && other.components.Type.type === "tile") {
				delete entity;
			}
        }
      }
    }
  }
}();
