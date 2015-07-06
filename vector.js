/**
 * The vector object represents a 2D vector in rectangular form.
 */
var Vector = function() {
	function Vector(x, y){
		this.x = x;
		this.y = y;

		// Voodoo magic that calculates and returns the magnitude when you call vector.magnitude
		Object.defineProperty(this, "magnitude", {
			get: function() {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			}
		});
	}

	/**
	* Clones this vector into a new one with the same position.
	*/
	Vector.prototype.clone = function() {
		return new Vector(this.x, this.y);
	}

	/**
	 * Adds a vector to this.
	 */
	Vector.prototype.add = function(v){
		this.x += v.x;
		this.y += v.y;
		return this;
	}

	/**
	* Subtracts a vector to this.
	*/
	Vector.prototype.substract = function(v){
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}

	/**
	* Scales this vector by multiplying the x and y by the scalar.
	*/
	Vector.prototype.scale = function(scalar){
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}

	/**
	* Sets the magnitude of this vector to 1.
	*/
	Vector.prototype.normalize = function(){
		var magnitude = this.magnitude;
		this.scale(1/magnitude);
		return this;
	}

	return Vector;
}();
