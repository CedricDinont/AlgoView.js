var IdentifierListNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
}

// prototype based inheritance
IdentifierListNode.prototype = new Node();

