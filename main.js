// Set up the canvas for rendering
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.onload = function() {
  canvas.width = 640;
  canvas.height = 480;

  // Set up keyboard and mouse input
  Input.bindKeyListener(document.body);
  Input.setPreventDefault(document.body, "up", true);
  Input.setPreventDefault(document.body, "down", true);
  Input.setPreventDefault(document.body, "left", true);
  Input.setPreventDefault(document.body, "right", true);
  Input.bindMouseListener(canvas);

  var player = ECS.Assemblages.Player(64, 200-16);
  ECS.Entities[player.id] = player;

  var tile = ECS.Assemblages.Tile(64, 200);
  ECS.Entities[tile.id] = tile;

  // An array of the systems in the order they should be executed
  var systems = [
    ECS.Systems.PlayerControl,
    ECS.Systems.Movement,
    ECS.Systems.Collision,
    ECS.Systems.Render
  ];

  // The game loop that will call all of the systems and repeat
  function loop() {
    for (var i = 0; i < systems.length; ++i) {
      systems[i]();
    }

    // Repeats when the browser redraws everything
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}
