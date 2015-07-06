// Define components in this file in the following format
ECS.Components.Position = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;

  return this;
}
ECS.Components.Position.prototype.name = "Position";
