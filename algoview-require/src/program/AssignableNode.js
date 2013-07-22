define("AssignableNode",
["ExpressionNode", "AssignableNodeContext"],
function(ExpressionNode, AssignableNodeContext) {

	function AssignableNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token); 
	}

	// prototype based inheritance
	AssignableNode.prototype = new ExpressionNode();
	AssignableNode.prototype.constructor = AssignableNode;

	AssignableNode.prototype.createContext = function() {
		return new AssignableNodeContext();
	}

	return AssignableNode;
});
