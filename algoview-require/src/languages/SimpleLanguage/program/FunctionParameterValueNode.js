define("FunctionParameterValueNode",
["ExpressionNode"],
function(ExpressionNode) {
	
	function FunctionParameterValueNode(tokenType, token, context) {
		ExpressionNode.call(this, tokenType, token);
		
		this.context = context;
	}
	
	// Prototype based inheritance
	FunctionParameterValueNode.prototype = new ExpressionNode();
	FunctionParameterValueNode.prototype.constructor = FunctionParameterValueNode;
	
	FunctionParameterValueNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		nodeStack.pop();
		return false;
	}
	
	FunctionParameterValueNode.prototype.createContext = function() {
		return this.context;
	}
	
	return FunctionParameterValueNode;
	
});
