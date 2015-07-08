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
						ctx.fillStyle = "#DDDDDD";
						break;
					case "bg tile":
						ctx.fillStyle = "#223344";
						break;
					case "tile":
					case "corner tile":
					case "wall tile":
						ctx.fillStyle = "#0099FF";
						break;
				}

				ctx.fillRect(entity.components.Position.x, entity.components.Position.y, entity.components.Spritesheet.width, entity.components.Spritesheet.height)
			} else if (entity.components.Position && entity.components.Text) {
				ctx.fillStyle = "#FFFFFF";
				ctx.textAlign = "center";
				ctx.font = "16pt Sans-Serif";
				ctx.textBaseline = "top";
				ctx.fillText(entity.components.Text.text, entity.components.Position.x, entity.components.Position.y)
			}
		}
	}

	return Render;
}();
