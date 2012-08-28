var BooleanMemoryValue = function(value) {

	var typeOfValue = (typeof value);
	var expectedType = "boolean";
	
	if (value != undefined && typeOfValue != expectedType) {
		throw new IllegalArgumentException("[BooleanMemoryValue constructor] Expected " + expectedType + ", found " + typeOfValue);
	}

	if (value != undefined) {
		MemoryValue.call(this, value, MemoryState.HAS_VALUE);
	} else {
		MemoryValue.call(this, undefined, MemoryState.UNDEFINED);
	}
}

// Prototype based inheritance
BooleanMemoryValue.prototype = new MemoryValue();

BooleanMemoryValue.prototype.applyArithmeticOperator = function(operator, secondOperand) {

}

BooleanMemoryValue.prototype.applyTest = function(operator, secondOperand) {

}

BooleanMemoryValue.prototype.convertTo = function(type) {
	switch (type) {
		case "Boolean":
			return this;
			break;
		case "Integer":
			if (this.value) {
				return new IntegerMemoryValue(1);
			} else {
				return new IntegerMemoryValue(0);
            }
            break;
        case "Character":
			break;
		case "Float":
			break;
		case "Pointer":
			break;
	}
}
