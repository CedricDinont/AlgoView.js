define("PointerDereferenceNode",
["AssignableNode", "JSUtils", "PointerMemoryValue", "TryToDereferenceNullPointer"],
function(AssignableNode, JSUtils, PointerMemoryValue, TryToDereferenceNullPointer) {

	function PointerDereferenceNode(tokenType, token) {	
		AssignableNode.call(this, tokenType, token);	
	}

	// prototype based inheritance
	PointerDereferenceNode.prototype = new AssignableNode();
	PointerDereferenceNode.prototype.constructor = PointerDereferenceNode;

	PointerDereferenceNode.prototype.getVariable = function() {
		return this.children[0];
	}

	PointerDereferenceNode.prototype.getField = function() {
		return this.children[1];
	}

	PointerDereferenceNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeContext.variableContext = this.getVariable().createContext();
			nodeStack.push(this.getVariable(), nodeContext.variableContext);
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();
			
			console.log(nodeContext.variableContext);
			
			var memoryValue = nodeContext.variableContext.getValue();
			
			if (! (memoryValue instanceof PointerMemoryValue)) {
				JSUtils.throwException("TryToDereferenceInvalidVariable");
			}
			
			if (memoryValue.value == PointerMemoryValue.NIL.value) {
				throw new TryToDereferenceNullPointer();
			}

			var parent = this.getVariable();
			var structBaseAddress = nodeContext.variableContext.getValue();
			var structureMemoryUnit = memory.getUnit(structBaseAddress);
			var elementDataType = structureMemoryUnit.getDataType();
			var structureDeclarationNode = elementDataType.getStructureDeclarationNode();
			var offset = structureDeclarationNode.getFieldOffset(this.getField().getName());

			nodeContext.setAddress(structBaseAddress + offset);
			nodeContext.setValue(memory.getValue(nodeContext.getAddress()));

			// TODO: A revoir car cela ne compile pas
			//this.setDataType(structureDeclarationNode.getFieldByName(this.getField().getName()).getVariableType().getDataType());
		}
		return false;
	}
	
	return PointerDereferenceNode;
});
