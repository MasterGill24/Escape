ECS.Systems.PlayerControl = function() {
	var zeroVector = new Vector(0, 0);

	function PlayerControl() {
		for (var entityId in ECS.Entities) {
			var entity = ECS.Entities[entityId];

			if (entity.components.Velocity && entity.components.PlayerControl) {
				// Executes if the player landed on a tile
				if (entity.components.Gravity.inAir === false) {
					entity.components.Gravity.gravityPos = 0;
					canJump = true;
				}
				entity.components.Velocity.velocity = zeroVector.clone();

				if (Input.isKeyDown(document.body, "left")) {
					entity.components.Velocity.velocity.add(new Vector(-entity.components.Speed.speed, 0));
				}
				if (Input.isKeyDown(document.body, "right")) {
					entity.components.Velocity.velocity.add(new Vector(entity.components.Speed.speed, 0));
				}
				if (Input.isKeyDown(document.body, "z")) {
					if (canJump) {
						entity.components.Gravity.gravityPos = -10;
						entity.components.Gravity.inAir = true;
						canJump = false;
					}
				}
				if (Input.isKeyDown(document.body, "x")) {
					// Shoot
				}
			}
		}
	}

	return PlayerControl;
}();
