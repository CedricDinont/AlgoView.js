define("WhileNode",
["MemoryValue", "Node", "CannotConvertTo"],
function(MemoryValue, Node, CannotConvertTo) {
		var WhileNode = function(tokenType, token) {	
		Node.call(this, tokenType, token);
	}
	
	// Prototype based inheritance
	WhileNode.prototype = new Node();
	
	WhileNode.prototype.getCondition = function() {
		return this.children[0];
	}
	
	WhileNode.prototype.getInstructions = function() {
		return this.children[1];
	}
	
	WhileNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if ((nodeContext.currentChild == 0) || (nodeContext.currentChild == 2)) {
			nodeContext.conditionContext = this.getCondition().createContext();
			nodeStack.push(this.getCondition(), nodeContext.conditionContext);
			
			if (nodeContext.currentChild == 0) {
				nodeContext.currentChild++;
				return false;
			} else {
				nodeContext.currentChild--;
				return true;
			}
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;
		
			var testMemoryValue = nodeContext.conditionContext.getValue();
			var testMemoryValueAsBoolean = testMemoryValue.convertTo(MemoryValue.BOOLEAN);
			
			if (testMemoryValueAsBoolean == undefined) {
				throw new CannotConvertTo(MemoryValue.BOOLEAN);
			}
			
			var testValueAsBoolean = testMemoryValueAsBoolean.getPrimitiveValue();
			//console.log("Test value", testValueAsBoolean);
			if (testValueAsBoolean) {
				nodeStack.push(this.getInstructions());
			} else {
				nodeStack.pop();
			}
		}
		
		return false;
	}
	
	return WhileNode;
});
