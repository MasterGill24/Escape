ECS.Systems.Render = function() {
  function Render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var entityId in ECS.Entities) {
      var entity = ECS.Entities[entityId];

      if (entity.components.Position && entity.components.Spritesheet) {
        // Temporarily only drawing colored rectangles
        switch (entity.components.Type.type) {
          case "player":
            ctx.fillStyle = "#00FF99";
            break;
          case "enemy":
            ctx.fillStyle = "#FF2233";
            break;
          case "gun":
            ctx.fillStyle = "#FFBB00";
            break;
          case "bullet":
            ctx.fillStyle = "#EEEEEE";
            break;
          case "bg tile":
            ctx.fillStyle = "#223344";
            break;
          case "tile":
            ctx.fillStyle = "#0099FF";
            break;
        }

        ctx.fillRect(entity.components.Position.x, entity.components.Position.y, entity.components.Spritesheet.width, entity.components.Spritesheet.height)
      }
    }
  }

  return Render;
}();
