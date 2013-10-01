define("MathLibrary",
["BuiltInFunctionLibrary", "CosFunctionNode", "SinFunctionNode", "TanFunctionNode",
"ACosFunctionNode", "ASinFunctionNode", "ATanFunctionNode",
"PowFunctionNode", "SqrtFunctionNode", "LogFunctionNode", "ExpFunctionNode",
"AbsFunctionNode", "MinFunctionNode", "MaxFunctionNode", "CeilFunctionNode", "FloorFunctionNode", "RoundFunctionNode"],
function(BuiltInFunctionLibrary, CosFunctionNode, SinFunctionNode, TanFunctionNode,
ACosFunctionNode, ASinFunctionNode, ATanFunctionNode,
PowFunctionNode, SqrtFunctionNode, LogFunctionNode, ExpFunctionNode,
AbsFunctionNode, MinFunctionNode, MaxFunctionNode, CeilFunctionNode, FloorFunctionNode, RoundFunctionNode) {
	
	function MathLibrary() {
		BuiltInFunctionLibrary.call(this);
		
		// Voir http://www.w3schools.com/jsref/jsref_obj_math.asp
		
		this.functions.push(new CosFunctionNode());
		this.functions.push(new SinFunctionNode());
		this.functions.push(new TanFunctionNode());

		this.functions.push(new ACosFunctionNode());
		this.functions.push(new ASinFunctionNode());
		this.functions.push(new ATanFunctionNode());

		this.functions.push(new PowFunctionNode());
		this.functions.push(new SqrtFunctionNode());
		this.functions.push(new LogFunctionNode());
		this.functions.push(new ExpFunctionNode());

		this.functions.push(new AbsFunctionNode());
		this.functions.push(new MinFunctionNode());
		this.functions.push(new MaxFunctionNode());
		this.functions.push(new CeilFunctionNode());
		this.functions.push(new FloorFunctionNode());
		this.functions.push(new RoundFunctionNode());
	}
	
	// Prototype based inheritance
	MathLibrary.prototype = new BuiltInFunctionLibrary();
	MathLibrary.prototype.constructor = MathLibrary;
	
	return MathLibrary;
	
});
