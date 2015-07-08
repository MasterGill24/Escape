ECS.Systems.DeathCheck = function() {
    function DeathCheck() {
        for (var entityId in ECS.Entities) {
            var entity = ECS.Entities[entityId];

            if (entity.components.Health) {
                console.log(entity.components.Health.health);
                if (entity.components.Health.health <= 0) {
                    delete ECS.Entities[entityId];
                }
            }
        }
    }

    return DeathCheck;
}();
