var FunctionParameterDeclarationNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
}

// prototype based inheritance
FunctionParameterDeclarationNode.prototype = new Node();

