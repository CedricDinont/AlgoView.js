define("ContentNode",
["AssignableNode"],
function(AssignableNode) {
	
	function ContentNode(tokenType, token) {	
		AssignableNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	ContentNode.prototype = new AssignableNode();
	ContentNode.prototype.constructor = ContentNode;

	ContentNode.prototype.getVariable = function() {
		return this.children[0];
	}

	ContentNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeContext.VariableContext = nodeStack.push(this.getVariable());
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
			
			var memoryValue = nodeContext.VariableContext.getValue();
			var address = memoryValue.getPrimitiveValue();
			nodeContext.setValue(memory.getValue(address));
			nodeContext.setAddress(address);
		}
		return false;
	}
	
	return ContentNode;

});
