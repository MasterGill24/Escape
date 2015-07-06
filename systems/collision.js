ECS.Systems.Collision = function() {
  for (var i = 0; i < ECS.Entities.length; ++i) {
    var entity = ECS.Entities[i];
    if (entity.components.Collision && entity.components.Position) {
      for (var j = 0; j < ECS.Entities.length; ++j) {
        var other = ECS.Entities[j];
        if (other.components.Collision &&
           other.components.Position &&
           entity !== other &&
           (Math.abs(entity.components.Position.x - other.components.Position.x) * 2 < (entity.components.Collision.width + other.components.Collision.width)) &&
           (Math.abs(entity.components.Position.y - other.components.Position.y) * 2 < (entity.components.Collision.height + other.components.Collision.height))) {
          entity.components.Collision.callback();
        }
      }
    }
  }
}();
