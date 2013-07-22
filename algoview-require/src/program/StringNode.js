define("StringNode",
["Node"],
function(Node) {
	function StringNode(tokenType, token) {	
		Node.call(this, tokenType, token);
	}

	// Prototype based inheritance
	StringNode.prototype = new Node();
	StringNode.prototype.constructor = StringNode;

	Node.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		nodeStack.pop();
		return false;
	}
	
	return StringNode;
});
