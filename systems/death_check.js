ECS.Systems.DeathCheck = function() {
    function DeathCheck() {
        for (var entityId in ECS.Entities) {
            var entity = ECS.Entities[entityId];

            if (entity.components.Health) {
                if (entity.components.Health.health <= 0) {
                    if (entity.components.Type.type === "enemy") {
                        --numEnemies;
                    } else if (entity.components.Type.type === "player") {
                        state = "over";
                        delete ECS.Entities[entityId];
                        for (var otherId in ECS.Entities) {
                            var other = ECS.Entities[otherId];
                            if (other.components.Type.type === "enemy") {
                                delete ECS.Entities[otherId];
                            }
                        }
                        player = ECS.Assemblages.Player(192, 112);
                    	ECS.Entities[player.id] = player;
                    }
                    delete ECS.Entities[entityId];
                }
            }
        }
    }

    return DeathCheck;
}();
