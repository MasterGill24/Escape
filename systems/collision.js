ECS.Systems.Collision = function() {
	function Collision() {
		for (var entityId in ECS.Entities) {
			var entity = ECS.Entities[entityId];
			if (entity.components.Collision && entity.components.Position) {
				for (var otherId in ECS.Entities) {
					if (entityId !== otherId) {
						var other = ECS.Entities[otherId];
						if (other.components.Collision && other.components.Position) {
							var x = Math.abs(entity.components.Position.x - other.components.Position.x) * 2;
							var y = Math.abs(entity.components.Position.y - other.components.Position.y) * 2;
							var w = (entity.components.Collision.width + other.components.Collision.width);
							var h = (entity.components.Collision.height + other.components.Collision.height);
							if (((x <= w) && (y <= h))) { // && !((x === w) && (y === h))
								if (entity.components.Type.type === "player" && other.components.Type.type === "enemy") {
									entity.components.Health.health -= other.components.Damage.damage;
								}

								if ((entity.components.Type.type === "player" || entity.components.Type.type === "enemy") && other.components.Type.type === "tile") {
									var xDiff = Math.abs((entity.components.Position.x + entity.components.Collision.width / 2) - (other.components.Position.x + other.components.Collision.width / 2));
									var yDiff = Math.abs((entity.components.Position.y + entity.components.Collision.height / 2) - (other.components.Position.y + other.components.Collision.height / 2));
									if (yDiff > xDiff) { // Collision from the top or bottom
										if (xDiff < (entity.components.Collision.width + other.components.Collision.width) / 2 - 3) {
											if (entity.components.Position.y < other.components.Position.y) {
												entity.components.Position.y = other.components.Position.y - entity.components.Collision.height;
												entity.components.Gravity.inAir = false;
												entity.components.Velocity.velocity.y = 0;
											} else {
												entity.components.Position.y = other.components.Position.y + other.components.Collision.height;
												entity.components.Velocity.velocity.y = 0;
											}
										}
									} else { // Collision from the sides
										if (yDiff < (entity.components.Collision.height + other.components.Collision.height) / 2) {
											if (entity.components.Position.x < other.components.Position.x) {
												entity.components.Position.x = other.components.Position.x - entity.components.Collision.width;
											} else {
												entity.components.Position.x = other.components.Position.x + other.components.Collision.width;
											}

											if (entity.components.Type.type === "enemy") {
												entity.components.Velocity.velocity.x = -entity.components.Velocity.velocity.x;
											} else {
												entity.components.Velocity.velocity.x = 0;
											}
										}
									}
								}

								if (entity.components.Type.type === "bullet" && other.components.Type.type === "enemy") {
									other.components.Health.health -= entity.components.Damage.damage;
									delete entity;
								}

								if (entity.components.Type.type === "bullet" && other.components.Type.type === "tile") {
									delete entity;
								}
							}
						}
					}
				}
			}
		}
	}

	return Collision;
}();
