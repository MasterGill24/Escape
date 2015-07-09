ECS.Systems.Spawn = function() {
    var timeSinceLastSpawn = Infinity;

    function Spawn() {
        if (timeSinceLastSpawn > 10 && Math.random() < timeSinceLastSpawn / 1000) { //numEnemies < 10 && 
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
