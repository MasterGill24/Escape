ECS.Systems.PlayerControl = function() {
  var playerSpeed = 1;
  var jumpPos = 0;
  var jumping = false;

  var zeroVector = new Vector(0, 0);
  var leftVector = new Vector(-playerSpeed, 0);
  var rightVector = new Vector(playerSpeed, 0);

  function PlayerControl() {
    for (var entityId in ECS.Entities) {
      var entity = ECS.Entities[entityId];

      if (entity.components.Velocity && entity.components.PlayerControl) {
        entity.components.Velocity.velocity = zeroVector.clone();
        if (Input.isKeyDown(document.body, "left")) {
          entity.components.Velocity.velocity.add(leftVector);
        }
        if (Input.isKeyDown(document.body, "right")) {
          entity.components.Velocity.velocity.add(rightVector);
        }
        if (Input.isKeyDown(document.body, "z")) {
          jumping = true;
        }
        if (Input.isKeyDown(document.body, "x")) {
          // Shoot
        }

        if (jumping) {
          // Calculate jump vector
          var jumpY = jumpPos*jumpPos - 4 * jumpPos;
          if (jumpPos < 4) {
            entity.components.Velocity.velocity.add(new Vector(0, jumpY));
            jumpPos += 0.25;
          } else {
            jumping = false;
            jumpPos = 0;
          }
        }
      }
    }
  }

  return PlayerControl;
}();
