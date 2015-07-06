var Vector = function() {
	function Vector(x, y){
		this.x = x;
		this.y = y;	
	} 
	Vector.prototype.add = function(v){
		this.x += v.x;
		this.y += v.y;
		return this;
	}
	
	Vector.prototype.substract = function(v){
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}
	
	Vector.prototype.scale = function(scalar){
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}
	
	Vector.prototype.normalize = function(){
		var magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
		this.scale(1/magnitude);
		return this;
	}
	
	return Vector;
}();