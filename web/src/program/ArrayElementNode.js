var ArrayElementNode = function(tokenType, token) {	
	AssignableNode.call(this, tokenType, token);	
}

// prototype based inheritance
ArrayElementNode.prototype = new AssignableNode();

ArrayElementNode.prototype.getVariable = function() {
	return this.children[0];
}

ArrayElementNode.prototype.getIndexExpression = function() {
	return this.children[1];
}

ArrayElementNode.prototype.execute = function(memory, nodeStack, programRunner) {
	if (this.currentChild == 0) {
		this.currentChild++;
		nodeStack.push(this.getVariable());
	} else if (this.currentChild == 1) {
		this.currentChild++;
		nodeStack.push(this.getIndexExpression());
	} else {
		this.currentChild = 0;
		nodeStack.pop();

        var arrayBaseAddress;
        var elementAddress;
        var index;
        var arrayDataType;
		var parent = this.getVariable();
		
		console.log("Parent", parent);
		
		// 2 cas : on accède à un élément de tableau alloué dynamiquement ou statiquement
		
		if (parent.dataType instanceof PointerDataType) {
			var pointerMemoryValue = parent.getValue();
			if (pointerMemoryValue.isNil()) {
				throw new UseOfNilAsArray();
			}
			console.log("PointerMemoryValue", pointerMemoryValue);
			arrayBaseAddress = pointerMemoryValue.getPrimitiveValue();
			var heapMemoryUnit = memory.getHeap().findMemoryUnit(arrayBaseAddress);
			console.log(heapMemoryUnit);
			arrayDataType = heapMemoryUnit.getDataType();
		} else if (parent.dataType instanceof ArrayDataType) {
			// TODO: Traiter ce cas
		}
		
		index = this.getIndexExpression().getValue().getPrimitiveValue();
		if ((index < 0) || (index >= arrayDataType.getSize())) {
			throw new TryToAccessIncorrectArrayElementException(null, index);
		}
		
		elementAddress = arrayBaseAddress + (arrayDataType.getElementsSize() * index);
		this.setAddress(elementAddress);
		this.setValue(memory.getValue(elementAddress));
		this.setDataType(arrayDataType.getElementsDataType());
	}
	
	return false;
}
