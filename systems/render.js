ECS.Systems.Render = function() {
	var timeSinceLastFrame = Infinity;
	var reset = false;

	function Render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (var entityId in ECS.Entities) {
			var entity = ECS.Entities[entityId];

			if (entity.components.Type && entity.components.Type.type === "health bar") {
				ctx.fillStyle = "#00995B";
				ctx.fillRect(entity.components.Position.x, entity.components.Position.y, entity.components.Spritesheet.width, entity.components.Spritesheet.height);
				ctx.fillStyle = "#00FF99";
				ctx.fillRect(entity.components.Position.x, entity.components.Position.y, player.components.Health.health * 0.75, entity.components.Spritesheet.height);
			} else if (entity.components.Position && entity.components.Spritesheet) {				var image = entity.components.Spritesheet.spritesheet;
				var width = entity.components.Spritesheet.width;
				var height = entity.components.Spritesheet.height;
				var sliceX = entity.components.Spritesheet.frameNum * width;
				var sliceY = entity.components.Spritesheet.animationNum * height;
				var x = entity.components.Position.x;
				var y = entity.components.Position.y;

				ctx.drawImage(image, sliceX, sliceY, width, height, x, y, width, height);

				if (!entity.components.Spritesheet.staticFrame && timeSinceLastFrame > 5) {
					if ((++entity.components.Spritesheet.frameNum + 1) * width > entity.components.Spritesheet.spritesheet.width) {
						entity.components.Spritesheet.frameNum = 0;
					}
					reset = true;
				}
			} else if (entity.components.Position && entity.components.Text) {
				ctx.fillStyle = "#FFFFFF";
				ctx.textAlign = "center";
				ctx.font = "16pt Sans-Serif";
				ctx.textBaseline = "top";
				ctx.fillText(entity.components.Text.text, entity.components.Position.x, entity.components.Position.y)
			}
		}

		if (reset) {
			timeSinceLastFrame = 0;
			reset = false;
		}

		++timeSinceLastFrame;
	}

	return Render;
}();
