// This is an example system, follow this format
ECS.Systems.SystemName = function() {
  function systemName() {
    // Do prerequisites here

    // Loop through all of the entities
    for (var entityId in ECS.Entities) {
      var entity = ECS.Entities[entityId];

      /*
       * Check to make sure the entity has the required components. In this case
       * it checks to make sure the entity has the Position and Velocity
       * components.
       */
      if (entity.Position && entity.Velocity) {
        // Perform the require operations on the entity
      }
    }
  }

  return systemName;
}();
