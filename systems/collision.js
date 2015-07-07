ECS.Systems.Collision = function() {
  function Collision() {
    for (var entityId in ECS.Entities) {
      var entity = ECS.Entities[entityId];
      if (entity.components.Collision && entity.components.Position) {
        for (var otherId in ECS.Entities) {
          if (entityId !== otherId) {
            var other = ECS.Entities[otherId];
            if (other.components.Collision &&
               other.components.Position &&
               (Math.abs(entity.components.Position.x - other.components.Position.x) * 2 < (entity.components.Collision.width + other.components.Collision.width)) &&
               (Math.abs(entity.components.Position.y - other.components.Position.y) * 2 < (entity.components.Collision.height + other.components.Collision.height))) {

        			if (entity.components.Type.type === "player" && other.components.Type.type === "enemy") {
        				entity.components.Health.health -= entity.components.Damage.damage;
        			}

        			if ((entity.components.Type.type === "player" || entity.components.Type.type === "enemy") && other.components.Type.type === "tile") {
        				entity.components.Velocity.velocity = new Vector(0, 0);
                entity.components.Position.y = other.components.Position.y - entity.components.Collision.height;
                entity.components.Gravity.inAir = false;
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
    }
  }

  return Collision;
}();
