/**
 * The movement system moves the entity based off of its current velocity.
 */
ECS.Systems.Movement = function() {
  function Movement() {
    for (var entityId in ECS.Entities) {
      var entity = ECS.Entities[entityId];
      if (entity.components.Position && entity.components.Velocity) {
        // Divide the velocity by 60 since the game runs at 60 fps
        entity.components.Position.x += (entity.components.Velocity.x / 60.0);
        entity.components.Position.y += (entity.components.Velocity.y / 60.0);
      }
    }
  }

  return Movement;
}();
