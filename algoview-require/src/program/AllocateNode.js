define("AllocateNode",
["ExpressionNode", "PointerMemoryValue", "MemoryValue", "CannotConvertTo"],
function(ExpressionNode, PointerMemoryValue, MemoryValue, CannotConvertTo) {

	function AllocateNode(tokenType, token) {	
		ExpressionNode.call(this, tokenType, token);
	}

	// Prototype based inheritance
	AllocateNode.prototype = new ExpressionNode();
	AllocateNode.prototype.constructor = AllocateNode;

	AllocateNode.prototype.getVariableTypeNode = function() {
		return this.children[0];
	}

	AllocateNode.prototype.getSize = function() {
		return this.children[1];
	}

	AllocateNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			++nodeContext.currentChild;
			nodeStack.push(this.getVariableTypeNode());
		} else if (nodeContext.currentChild == 1) {
			++nodeContext.currentChild;
			if (this.getSize() != undefined) {
				nodeStack.push(this.getSize());
			}
		} else {
			nodeContext.currentChild = 0;
			
			var size = undefined;
			if (this.getSize() != undefined) {
				size = this.getSize().getValue();
				
				var sizeAsInteger = size.convertTo(MemoryValue.INTEGER);
				if (sizeAsInteger == undefined) {
					throw new CannotConvertTo(MemoryValue.INTEGER);
				} else {
					size = sizeAsInteger;
				}
			}
			
			var dataTypeNode = this.getVariableTypeNode();
			var address = memory.malloc(dataTypeNode.dataType, size);
			nodeContext.setValue(new PointerMemoryValue(address));
			nodeStack.pop();
		}
		
		return false;
	}
	
	return AllocateNode;
});
