ECS.Systems.PlayerControl = function() {
	var jumpPos = -10;
	var canJump = true;

	var zeroVector = new Vector(0, 0);

	function PlayerControl() {
		for (var entityId in ECS.Entities) {
			var entity = ECS.Entities[entityId];

			if (entity.components.Velocity && entity.components.PlayerControl) {
				// Executes if the player landed on a tile
				if (entity.components.Gravity.inAir === false) {
					jumpPos = 0;
					canJump = true;
				}
				entity.components.Velocity.velocity = zeroVector.clone();

				if (Input.isKeyDown(document.body, "left`")) {
					entity.components.Velocity.velocity.add(new Vector(-entity.components.Speed.speed, 0));
				}
				if (Input.isKeyDown(document.body, "right")) {
					entity.components.Velocity.velocity.add(new Vector(entity.components.Speed.speed, 0));
				}
				if (Input.isKeyDown(document.body, "z")) {
					if (canJump) {
						jumpPos = -10;
						entity.components.Gravity.inAir = true;
						canJump = false;
					}
				}
				if (Input.isKeyDown(document.body, "x")) {
					// Shoot
				}

				// Calculate jump vector
				if (entity.components.Gravity.inAir) {
					entity.components.Velocity.velocity.add(new Vector(0, 5 * Math.atan(jumpPos)));
					jumpPos += 0.75;
				}
				entity.components.Gravity.inAir = true;
			}
		}
	}

	return PlayerControl;
}();
