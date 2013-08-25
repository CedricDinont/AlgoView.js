define("InstructionListNodeContext",
["NodeContext"],
function(NodeContext) {
	
	function InstructionListNodeContext() {	
		this.children = new Array();
	}
	
	// prototype based inheritance
	InstructionListNodeContext.prototype = new NodeContext();
	InstructionListNodeContext.prototype.constructor = InstructionListNodeContext;
	
	NodeContext.prototype.addChild = function(child) {
		this.children.push(child);
	}
	
	NodeContext.prototype.getNumberOfChildren = function() {
		return this.children.length;
	}

	return InstructionListNodeContext;
});
