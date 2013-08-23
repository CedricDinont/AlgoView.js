define("MathLibrary",
["BuiltInFunctionLibrary"],
function(BuiltInFunctionLibrary) {
	
	function MathLibrary() {
		BuiltInFunctionLibrary.call(this);
	}
	
	// Prototype based inheritance
	MathLibrary.prototype = new BuiltInFunctionLibrary();
	MathLibrary.prototype.constructor = MathLibrary;
	
	return MathLibrary;
	
});
