define("MathLibrary",
["BuiltInFunctionLibrary", "CosFunctionNode"],
function(BuiltInFunctionLibrary, CosFunctionNode) {
	
	function MathLibrary() {
		BuiltInFunctionLibrary.call(this);
		
		this.functions.push(new CosFunctionNode());
	}
	
	// Prototype based inheritance
	MathLibrary.prototype = new BuiltInFunctionLibrary();
	MathLibrary.prototype.constructor = MathLibrary;
	
	return MathLibrary;
	
});
