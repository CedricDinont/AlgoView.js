var AssignStringNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
}

// prototype based inheritance
AssignStringNode.prototype = new Node();

