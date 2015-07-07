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

  var player = ECS.Assemblages.Player(64, 64);
  ECS.Entities[player.id] = player;

  // An array of the systems in the order they should be executed
  var systems = [
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
