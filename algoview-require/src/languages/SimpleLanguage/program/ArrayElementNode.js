define("ArrayElementNode",
["AssignableNode", "PointerDataType", "ArrayDataType", 
"NotAnArrayException", "TryToAccessIncorrectArrayElementException",
"InvalidMemoryAddressException"],
function(AssignableNode, PointerDataType, ArrayDataType, 
NotAnArrayException, TryToAccessIncorrectArrayElementException, 
InvalidMemoryAddressException) {
	
	function ArrayElementNode(tokenType, token) {	
		AssignableNode.call(this, tokenType, token);
	}

	// prototype based inheritance
	ArrayElementNode.prototype = new AssignableNode();
	ArrayElementNode.prototype.constructor = ArrayElementNode;

	ArrayElementNode.prototype.getVariable = function() {
		return this.children[0];
	}

	ArrayElementNode.prototype.getIndexExpression = function() {
		return this.children[1];
	}

	ArrayElementNode.prototype.execute = function(nodeContext, memory, nodeStack, programRunner) {
		if (nodeContext.currentChild == 0) {
			nodeContext.currentChild++;
			nodeContext.variableContext = nodeStack.push(this.getVariable());
		} else if (nodeContext.currentChild == 1) {
			nodeContext.currentChild++;
			nodeContext.indexExpressionContext = nodeStack.push(this.getIndexExpression());
		} else {
			nodeContext.currentChild = 0;
			nodeStack.pop();

	        var arrayBaseAddress;
	        var elementAddress;
	        var index;
	        var arrayDataType;
			var parent = nodeContext.variableContext;
			
			/**
			 *  3 cas : on accède à un élément de tableau 
			 *		- alloué dynamiquement
			 *		- statiquement
			 *		- par une variable pointant vers un tableau alloué statiquement
			 **/
			if (parent.dataType instanceof PointerDataType) {
				// Tableau accédé depuis un pointeur
				// Peut être sur le tas ou sur la pile
				var pointerMemoryValue = parent.getValue();
				if (pointerMemoryValue.isNil()) {
					throw new UseOfNilAsArray();
				}
				arrayBaseAddress = pointerMemoryValue.getPrimitiveValue();
				
				// Recherche sur le tas
				var heapMemoryUnit = memory.getHeap().findMemoryUnit(arrayBaseAddress);
				if (heapMemoryUnit != undefined) {
					// Le tableau est bien dans le tas
					arrayDataType = heapMemoryUnit.getDataType();
				} else {
					// Recherche dans la pile
					var stackMemoryUnit = memory.getStack().findMemoryUnit(arrayBaseAddress);
					if (stackMemoryUnit != undefined) {
						// Le tableau est bien dans la pile
						arrayDataType = stackMemoryUnit.getDataType();
					} else {
						// On n'a trouvé le tableau ni sur le tas ni sur la pile
						throw new InvalidMemoryAddressException();
					}
				}

			} else if (parent.dataType instanceof ArrayDataType) {
				// Tableau alloué statiquement sur la pile
				arrayDataType = parent.getDataType();
				arrayBaseAddress = parent.getAddress();
			} else {
				throw new NotAnArrayException();
			}
			
			index = nodeContext.indexExpressionContext.getValue().getPrimitiveValue();
			if ((index < 0) || (index >= arrayDataType.getSize())) {
				throw new TryToAccessIncorrectArrayElementException(null, index);
			}
			
			elementAddress = arrayBaseAddress + (arrayDataType.getElementsSize() * index);
			nodeContext.setAddress(elementAddress);
			nodeContext.setValue(memory.getValue(elementAddress));
			nodeContext.setDataType(arrayDataType.getElementsDataType());
		}
		
		return false;
	}
	
	return ArrayElementNode;
});
