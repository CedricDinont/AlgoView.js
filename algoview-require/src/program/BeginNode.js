define("BeginNode",
["Node"],
function(Node) {
	function BeginNode(tokenType, token) {	
		Node.call(this, tokenType, token); 
	}

	// prototype based inheritance
	BeginNode.prototype = new Node();
	BeginNode.prototype.constructor = BeginNode;

	BeginNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		nodeStack.pop();
		return false;
	}
	
	return BeginNode;
});
