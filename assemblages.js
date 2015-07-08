ECS.Assemblages = {
	Player: function(x, y) {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("player"));
		entity.addComponent(new ECS.Components.Position(x, y));
		entity.addComponent(new ECS.Components.Speed(3));
		entity.addComponent(new ECS.Components.Velocity());
		entity.addComponent(new ECS.Components.Health(100));
		entity.addComponent(new ECS.Components.Collision(16, 16, null));
		entity.addComponent(new ECS.Components.Spritesheet(null, 16, 16));
		entity.addComponent(new ECS.Components.PlayerControl());
		entity.addComponent(new ECS.Components.Gravity());
		return entity;
	},

	Gun: function(x, y) {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("gun"));
		entity.addComponent(new ECS.Components.Position(x, y));
		entity.addComponent(new ECS.Components.Spritesheet(null, 12, 4));
		return entity;
	},

	Bullet: function(x, y) {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("bullet"));
		entity.addComponent(new ECS.Components.Position(x, y));
		entity.addComponent(new ECS.Components.Velocity());
		entity.addComponent(new ECS.Components.Damage(2.5));
		entity.addComponent(new ECS.Components.Collision(3, 1, null));
		entity.addComponent(new ECS.Components.Spritesheet(null, 3, 1));
		return entity;
	},

	Enemy: function(x, y) {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("enemy"));
		entity.addComponent(new ECS.Components.Position(x, y));
		entity.addComponent(new ECS.Components.Speed(2));
		entity.addComponent(new ECS.Components.Velocity());
		entity.components.Velocity.velocity.x = entity.components.Speed.speed;
		entity.addComponent(new ECS.Components.Health(5));
		entity.addComponent(new ECS.Components.Damage(5));
		entity.addComponent(new ECS.Components.Collision(16, 16, null));
		entity.addComponent(new ECS.Components.Spritesheet(null, 16, 16));
		entity.addComponent(new ECS.Components.Gravity());
		return entity;
	},

	BackgroundTile: function(x, y) {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("bg tile"));
		entity.addComponent(new ECS.Components.Position(x, y));
		entity.addComponent(new ECS.Components.Spritesheet(null, 16, 16));
		return entity;
	},

	Tile: function(x, y) {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("tile"));
		entity.addComponent(new ECS.Components.Position(x, y));
		entity.addComponent(new ECS.Components.Collision(16, 16, null));
		entity.addComponent(new ECS.Components.Spritesheet(null, 16, 16));
		return entity;
	}
}
