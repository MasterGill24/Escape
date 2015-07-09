ECS.Systems.AI = function() {
    var canJump = {};

    function tileInFront(entity) {
        for (var entityId in ECS.Entities) {
            var tile = ECS.Entities[entityId];
            if (tile.components.Type.type === "corner tile" &&
            entity.components.Position.y - tile.components.Position.y > 32 &&
            entity.components.Position.y - tile.components.Position.y <= 64 &&
            ((entity.components.Velocity.velocity.x > 0 && tile.components.Position.x - entity.components.Position.x <= 48 && tile.components.Position.x - entity.components.Position.x >= 24) ||
            (entity.components.Velocity.velocity.x < 0 && entity.components.Position.x - tile.components.Position.x <= 48 && entity.components.Position.x - tile.components.Position.x >= 24))) {
                return true;
            }
        }

        return false;
    }

    function AI() {
        for (var entityId in ECS.Entities) {
            var entity = ECS.Entities[entityId];
            if (entity.components.Type.type && entity.components.Type.type === "enemy") {
                if (!canJump.hasOwnProperty(entityId)) {
                    canJump[entityId] = true;
                }

                if (entity.components.Gravity.inAir === false) {
					canJump[entityId] = true;
				}

                if (entity.components.AIType.aiType === "random" && canJump[entityId] && Math.random() < 0.1 && tileInFront(entity)) {
                    entity.components.Gravity.gravityPos = -10;
                    entity.components.Gravity.inAir = true;
                    canJump[entityId] = false;
                } else if (entity.components.AIType.aiType === "follow") {
                    if (player.components.Position.x < entity.components.Position.x && entity.components.Velocity.velocity.x > 0) {
                        entity.components.Velocity.velocity.x *= -1;
                    } else if (player.components.Position.x > entity.components.Position.x && entity.components.Velocity.velocity.x < 0) {
                        entity.components.Velocity.velocity.x *= -1;
                    }

                    if (player.components.Position.y < entity.components.Position.y - 1 && canJump[entityId] && tileInFront(entity)) {
                        entity.components.Gravity.gravityPos = -10;
                        entity.components.Gravity.inAir = true;
                        canJump[entityId] = false;
                    }
                }
            }
        }
    }

    return AI;
}();
