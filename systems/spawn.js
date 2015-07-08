ECS.Systems.Spawn = function() {
    var timeSinceLastSpawn = Infinity;

    function Spawn() {
        if (numEnemies < 10 && timeSinceLastSpawn > 10 && Math.random() < timeSinceLastSpawn / 1000) {
            var x = Math.random() < 0.5 ? 16 : 368;
            var enemy = ECS.Assemblages.Enemy(x, 64);
            ECS.Entities[enemy.id] = enemy;
            ++numEnemies;
            timeSinceLastSpawn = 0;
        }

        ++timeSinceLastSpawn;
    }

    return Spawn;
}();
