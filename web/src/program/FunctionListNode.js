var FunctionListNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
}

// prototype based inheritance
FunctionListNode.prototype = new Node();

