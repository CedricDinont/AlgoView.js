define("MathLibrary",
["BuiltInFunctionLibrary", "CosFunctionNode", "SinFunctionNode",
"TanFunctionNode", "PowFunctionNode"],
function(BuiltInFunctionLibrary, CosFunctionNode, SinFunctionNode,
TanFunctionNode, PowFunctionNode) {
	
	function MathLibrary() {
		BuiltInFunctionLibrary.call(this);
		
		// Voir http://www.w3schools.com/jsref/jsref_obj_math.asp
		
		this.functions.push(new CosFunctionNode());
		this.functions.push(new SinFunctionNode());
		this.functions.push(new TanFunctionNode());
		this.functions.push(new PowFunctionNode());
	}
	
	// Prototype based inheritance
	MathLibrary.prototype = new BuiltInFunctionLibrary();
	MathLibrary.prototype.constructor = MathLibrary;
	
	return MathLibrary;
	
});
