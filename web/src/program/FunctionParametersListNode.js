var FunctionParametersListNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
}

// prototype based inheritance
FunctionParametersListNode.prototype = new Node();

