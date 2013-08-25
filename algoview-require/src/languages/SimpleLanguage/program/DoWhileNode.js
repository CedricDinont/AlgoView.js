define("DoWhileNode",
["Node", "MemoryValue"],
function(Node, MemoryValue) {
	
	function DoWhileNode(tokenType, token) {	
		Node.call(this, tokenType, token);
	}

	// Prototype based inheritance
	DoWhileNode.prototype = new Node();
	DoWhileNode.prototype.constructor = DoWhileNode;

	DoWhileNode.prototype.getCondition = function() {
		return this.children[0];
	}

	DoWhileNode.prototype.getInstructions = function() {
		return this.children[1];
	}

	DoWhileNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeStack.push(this.getInstructions());
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;
			nodeContext.conditionContext = nodeStack.push(this.getCondition());
			return true;
		} else if (nodeContext.currentChild == 2) {
			nodeContext.currentChild = 0;
				
			var testMemoryValue = nodeContext.conditionContext.getValue();
			var testMemoryValueAsBoolean = testMemoryValue.convertTo(MemoryValue.BOOLEAN);
			var testValueAsBoolean = testMemoryValueAsBoolean.getPrimitiveValue();
			if (! testValueAsBoolean) {
				nodeStack.pop();
			}
		}
		return false;
	}
	
	return DoWhileNode;
});
