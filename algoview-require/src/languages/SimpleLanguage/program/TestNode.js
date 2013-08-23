define("TestNode",
["ExpressionNode", "ExpressionNodeContext"],
function(ExpressionNode, ExpressionNodeContext) {
	
	function TestNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
		
		this.operator;
	}
	
	// Prototype based inheritance
	TestNode.prototype = new ExpressionNode();
	TestNode.prototype.constructor = TestNode;
	
	TestNode.prototype.setOperator = function(operator) {
			this.operator = operator;
	}
	
	TestNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.expression1Context = this.children[0].createContext();
			nodeStack.push(this.children[0], nodeContext.expression1Context);
			nodeContext.currentChild++;
		} else if (nodeContext.currentChild == 1) {
			nodeContext.expression2Context = this.children[1].createContext();
			nodeStack.push(this.children[1], nodeContext.expression2Context);
			nodeContext.currentChild++;
		} else {
			nodeContext.currentChild = 0;
			
			// TODO: Faire les conversions?
			
			var value1;
			var value2;
			var convertedValue1;
			var convertedValue2;
			var resultValue;
			
			value1 = nodeContext.expression1Context.getValue();
			value2 = nodeContext.expression2Context.getValue();
			
			convertedValue1 = value1;
			convertedValue2 = value2;
					
			resultValue = convertedValue1.applyTest(this.operator, convertedValue2);
			
			// TODO: Convertir le résultat en booléen ? -> Non, ça doit être fait dans applyTest
			
			nodeContext.setValue(resultValue);
			nodeStack.pop();
		}
		
		return false;
	}
	
	return TestNode;
});
