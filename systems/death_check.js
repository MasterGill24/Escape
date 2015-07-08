ECS.Systems.DeathCheck = function() {
    function DeathCheck() {
        for (var entityId in ECS.Entities) {
            var entity = ECS.Entities[entityId];

            if (entity.components.Health) {
                if (entity.components.Health.health <= 0) {
                    if (entity.components.Type.type === "enemy") {
                        --numEnemies;
                    }
                    delete ECS.Entities[entityId];
                }
            }
        }
    }

    return DeathCheck;
}();
