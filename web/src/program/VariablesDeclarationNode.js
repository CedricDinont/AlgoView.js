var VariablesDeclarationNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
}

// prototype based inheritance
VariablesDeclarationNode.prototype = new Node();

VariablesDeclarationNode.prototype.getIdentifierList = function() {
	return this.children[0];
}

VariablesDeclarationNode.prototype.getVariableType = function() {
	return this.children[1];
}
