(function main() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  // INITIALIZE ENTITIES HERE <-------------------------------------------------

  // An array of the systems in the order they should be executed
  var systems = [];

  function loop() {
    for (var i = 0; i < systems.length; ++i) {
      systems[i]();
    }

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
