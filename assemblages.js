ECS.Assemblages = {
	Player: function() {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("player"));
		entity.addComponent(new ECS.Components.Position());
		entity.addComponent(new ECS.Components.Velocity());
		entity.addComponent(new ECS.Components.Health());
		entity.addComponent(new ECS.Components.Collision());
		entity.addComponent(new ECS.Components.Spritesheet());
		entity.addComponent(new ECS.Components.PlayerControlled());
		return entity;
	},

	Gun: function() {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("gun"));
		entity.addComponent(new ECS.Components.Position());
		entity.addComponent(new ECS.Components.Spritesheet());
		return entity;
	},

	Bullet: function() {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("bullet"));
		entity.addComponent(new ECS.Components.Position());
		entity.addComponent(new ECS.Components.Velocity());
		entity.addComponent(new ECS.Components.Damage());
		entity.addComponent(new ECS.Components.Collision());
		entity.addComponent(new ECS.Components.Spritesheet());
		return entity;
	},

	Enemy: function() {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("enemy"));
		entity.addComponent(new ECS.Components.Position());
		entity.addComponent(new ECS.Components.Velocity());
		entity.addComponent(new ECS.Components.Health());
		entity.addComponent(new ECS.Components.Damage());
		entity.addComponent(new ECS.Components.Collision());
		entity.addComponent(new ECS.Components.Spritesheet());
		return entity;
	},

	BackgroundTile: function() {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("bg tile"));
		entity.addComponent(new ECS.Components.Position());
		entity.addComponent(new ECS.Components.Spritesheet());
		return entity;
	},

	Tile: function() {
		var entity = new ECS.Entity();
		entity.addComponent(new ECS.Components.Type("tile"));
		entity.addComponent(new ECS.Components.Position());
		entity.addComponent(new ECS.Components.Collision());
		entity.addComponent(new ECS.Components.Spritesheet());
		return entity;
	}
}
