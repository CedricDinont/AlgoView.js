define("FunctionParametersListNode",
["Node"],
function(Node){
	//Node
	function FunctionParametersListNode(tokenType, token) {	
		Node.call(this, tokenType, token); 
	}

	// prototype based inheritance
	FunctionParametersListNode.prototype = new Node();
	FunctionParametersListNode.prototype.constructor = FunctionParametersListNode;
return FunctionParametersListNode;
});