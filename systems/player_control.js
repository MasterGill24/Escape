ECS.Systems.PlayerControl = function() {
	var zeroVector = new Vector(0, 0);
	var canJump;
	var timeSinceLastShot = Infinity;
	var movingRight = true;

	function PlayerControl() {
		for (var entityId in ECS.Entities) {
			var entity = ECS.Entities[entityId];

			if (entity.components.Velocity && entity.components.PlayerControl) {
				// Executes if the player landed on a tile
				if (entity.components.Gravity.inAir === false) {
					canJump = true;
				}
				entity.components.Velocity.velocity = zeroVector.clone();

				var time = Date.now() - timeStart;
				var sec = Math.floor(time/1000 % 60);
				timer.components.Text.text = (time/60000 << 0) + ":" + (sec < 10 ? "0" : "") + sec;

				if (Input.isKeyDown(document.body, "left")) {
					entity.components.Velocity.velocity.add(new Vector(-entity.components.Speed.speed, 0));
					movingRight = false;
				}
				if (Input.isKeyDown(document.body, "right")) {
					entity.components.Velocity.velocity.add(new Vector(entity.components.Speed.speed, 0));
					movingRight = true;
				}
				if (Input.isKeyDown(document.body, "z")) {
					if (canJump) {
						entity.components.Gravity.gravityPos = -10;
						entity.components.Gravity.inAir = true;
						canJump = false;
					}
				}
				if (Input.isKeyDown(document.body, "x")) {
					if (timeSinceLastShot >= 10) {
						var bullet = ECS.Assemblages.Bullet(entity.components.Position.x + 7, entity.components.Position.y + 7, movingRight);
						ECS.Entities[bullet.id] = bullet;
						timeSinceLastShot = 0;
					}
				}

				++timeSinceLastShot;
			}
		}
	}

	return PlayerControl;
}();
