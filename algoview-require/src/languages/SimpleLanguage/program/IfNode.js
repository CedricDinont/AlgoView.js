define("IfNode",
["MemoryValue", "Node"],
function(MemoryValue, Node) {
	//Node 
	function IfNode(tokenType, token) {	
		Node.call(this, tokenType, token);
	}

	// Prototype based inheritance
	IfNode.prototype = new Node();
	IfNode.prototype.constructor = IfNode;

	IfNode.prototype.getCondition = function() {
			return this.children[0];
	}

	IfNode.prototype.getThenInstructions = function() {
			return this.children[1];
	}

	IfNode.prototype.getElseInstructions = function() {
			return this.children[2];
	}

	IfNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeContext.conditionContext = this.getCondition().createContext();
			nodeStack.push(this.getCondition(), nodeContext.conditionContext);
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;
		
			var testValue = nodeContext.conditionContext.getValue();
			// TODO: Vérifier si la conversion s'est bien passée
			var testValueAsBoolean = testValue.convertTo(MemoryValue.BOOLEAN).getPrimitiveValue();
			// console.log("Test value", testValue);
			if (testValueAsBoolean) {
				nodeStack.push(this.getThenInstructions());
			} else {
				nodeStack.push(this.getElseInstructions());
			}
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
		}
		
		return false;
	}
	
	return IfNode;
});
