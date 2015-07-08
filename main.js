// Set up the canvas for rendering
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var numEnemies = 0;
var timeStart = Date.now();

var player;
var timer;
var healthBar;

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

	var map =  [["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", "X", "X", "X", "X", "X", "C", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "C", "X", "X", "X", "X", "X", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "C", "X", "C", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", "C", "X", "X", "X", "X", "X", "X", "X", "C", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", "C", "X", "C", " ", " ", " ", " ", " ", " ", " ", " ", " ", "C", "X", "C", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
				["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"]];

	for (var y = 0; y < map.length; ++y) {
		for (var x = 0; x < map[y].length; ++x) {
			var tile = null;
			if (map[y][x] === "X") {
				tile = ECS.Assemblages.Tile(x * 16, y * 16);
			} else if (map[y][x] === "W") {
				tile = ECS.Assemblages.WallTile(x * 16, y * 16);
			} else if (map[y][x] === "C") {
				tile = ECS.Assemblages.CornerTile(x * 16, y * 16);
			} else {
				tile = ECS.Assemblages.BackgroundTile(x * 16, y * 16);
			}

			ECS.Entities[tile.id] = tile;
		}
	}

	player = ECS.Assemblages.Player(192, 112);
	ECS.Entities[player.id] = player;

	timer = new ECS.Entity();
	timer.addComponent(new ECS.Components.Type("timer"));
	timer.addComponent(new ECS.Components.Position(200, 32));
	timer.addComponent(new ECS.Components.Text("0:00"));
	ECS.Entities[timer.id] = timer;

	healthBar = new ECS.Entity();
	healthBar.addComponent(new ECS.Components.Type("health bar"));
	healthBar.addComponent(new ECS.Components.Position(32, 40));
	healthBar.addComponent(new ECS.Components.Spritesheet(null, 75, 8));
	ECS.Entities[healthBar.id] = healthBar;

	// An array of the systems in the order they should be executed
	var systems = [
		ECS.Systems.PlayerControl,
		ECS.Systems.AI,
		ECS.Systems.Movement,
		ECS.Systems.Collision,
		ECS.Systems.DeathCheck,
		ECS.Systems.Spawn,
		ECS.Systems.Render,
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
