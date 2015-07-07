ECS.Systems.Movement = function() {
  function Movement() {
    for (var entityId in ECS.Entities) {
      var entity = ECS.Entities[entityId];
      if (entity.components.Position && entity.components.Velocity) {
		entity.components.Position.x += (entity.components.Velocity.x / 60.0);
		entity.components.Position.y += (entity.components.Velocity.y / 60.0);		
      }
    }
  }

  return Movement;
}();
