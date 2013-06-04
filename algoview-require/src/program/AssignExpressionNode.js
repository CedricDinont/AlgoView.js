define("AssignExpressionNode",
["Node"],
function(Node) {

	function AssignExpressionNode(tokenType, token) {	
		Node.call(this, tokenType, token); 
	}

	// prototype based inheritance
	AssignExpressionNode.prototype = new Node();
	AssignExpressionNode.prototype.constructor = AssignExpressionNode;

return AssignExpressionNode;
});