var StringNode = function(tokenType, token) {	
	Node.call(this, tokenType, token);
	
	this.type = "STRING";
}

// Prototype based inheritance
StringNode.prototype = new Node();
