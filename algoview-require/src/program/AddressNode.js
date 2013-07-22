define("AddressNode",
["ExpressionNode", "PointerMemoryValue"],
function(ExpressionNode, PointerMemoryValue) {
	
	function AddressNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	AddressNode.prototype = new ExpressionNode();
	AddressNode.prototype.constructor = AddressNode;

	AddressNode.prototype.getVariable = function() {
		return this.children[0];
	}

	AddressNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeContext.variableContext = this.getVariable().createContext();
			nodeStack.push(this.getVariable(), nodeContext.variableContext);
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
			nodeContext.setValue(new PointerMemoryValue(nodeContext.variableContext.getAddress()));
		}
		return false;
	}

	return AddressNode;
});
