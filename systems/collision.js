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

    			if (entity.components.Type.type === "player" && other.components.Type.type === "enemy") {
    				entity.components.Health.health -= entity.components.Damage.damage;
    			}

    			if (entity.components.Type.type === "player" && other.components.Type.type === "tile") {
    				entity.components.Velocity.velocity = new Vector(0, 0);
    			}

    			if (entity.components.Type.type === "enemy" && other.components.Type.type === "tile") {
    				entity.components.Velocity.velocity.x = -entity.components.Velocity.velocity.x;
    			}

    			if (entity.components.Type.type === "bullet" && other.components.Type.type === "enemy") {
    				other.components.Health.health -= entity.components.Damage.damage;
    				delete entity;
    			}

    			if (entity.components.Type.type === "bullet" && other.components.Type.type === "tile") {
    				delete entity;
    			}
        }
      }
    }
  }
}();
