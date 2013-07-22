define("FunctionListNode",
["Node"],
function(Node) {

	function FunctionListNode(tokenType, token) {	
		Node.call(this, tokenType, token); 
	}

	// prototype based inheritance
	FunctionListNode.prototype = new Node();
	FunctionListNode.prototype.constructor = FunctionListNode;
	
	return FunctionListNode;
});
