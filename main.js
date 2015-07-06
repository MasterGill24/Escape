(function main() {
  // Set up the canvas for rendering
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  canvas.width = 640;
  canvas.height = 480;

  // Set up keyboard and mouse input
  Input.bindKeyListener("body", document.body);
  Input.setPreventDefault("body", "up", true);
  Input.setPreventDefault("body", "down", true);
  Input.setPreventDefault("body", "left", true);
  Input.setPreventDefault("body", "right", true);
  Input.bindMouseListener("canvas", canvas);

  // INITIALIZE ENTITIES HERE <-------------------------------------------------

  // An array of the systems in the order they should be executed
  var systems = [];

  // The game loop that will call all of the systems and repeat
  function loop() {
    for (var i = 0; i < systems.length; ++i) {
      systems[i]();
    }

    // Repeats when the browser redraws everything
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
