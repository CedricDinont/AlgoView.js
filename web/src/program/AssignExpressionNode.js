var AssignExpressionNode = function(tokenType, token) {	
	Node.call(this, tokenType, token); 
}

// prototype based inheritance
AssignExpressionNode.prototype = new Node();

