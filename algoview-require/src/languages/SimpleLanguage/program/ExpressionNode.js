define("ExpressionNode",
["Node", "ExpressionNodeContext"],
function(Node, ExpressionNodeContext) {
	function ExpressionNode(tokenType, token) {	
		Node.call(this, tokenType, token); 
	}

	// Prototype based inheritance
	ExpressionNode.prototype = new Node();
	ExpressionNode.prototype.constructor = ExpressionNode;

	ExpressionNode.prototype.containsFunctionCall = function() {
		var FunctionCallNode = (FunctionCallNode == undefined) ? require("FunctionCallNode") : FunctionCallNode;
		var BuiltInFunctionNode = (BuiltInFunctionNode == undefined) ? require("BuiltInFunctionNode") : BuiltInFunctionNode;
				
		for (var i in this.children) {
			var currentChild = this.children[i];
			
			if (currentChild instanceof FunctionCallNode) {
				if (currentChild.getFunctionNode() instanceof BuiltInFunctionNode) {
					return false;
				} else {
					return true;
				}
			}

			if ((typeof currentChild.containsFunctionCall) == "function") {
				if (currentChild.containsFunctionCall()) {
					return true;
				}
			}
		}
		return false;
	}
	
	ExpressionNode.prototype.createContext = function() {
		return new ExpressionNodeContext();
	}
	
	return ExpressionNode;
});
