var BoundingBox = function() {
	function BoundingBox(width, height){
		this.width = width;
		this.height = height;
	} 
	
	BoundingBox.prototype.overlaps = function(other) {
		if (other  this) {
			return 
		}
	}
	return BoundingBox;
}();