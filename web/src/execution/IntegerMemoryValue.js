/**
 * Class IntegerMemoryValue extends MemoryValue
 * @param value: the value to store in the superclass field "value"
 * @author Michaël, Cédric
 */
var IntegerMemoryValue = function(value) {

	var typeOfValue = (typeof value);
	var expectedType = "number";
	
	if (value != undefined && typeOfValue != expectedType) {
		throw new IllegalArgumentException("[IntegerMemoryValue constructor] Expected " + expectedType + ", found " + typeOfValue);
	}
		
	// The number is truncated
	if (value != undefined) {
		MemoryValue.call(this, parseInt(value), MemoryState.HAS_VALUE);
	} else {
		MemoryValue.call(this, undefined, MemoryState.UNDEFINED);
	}
}

// Prototype based inheritance
IntegerMemoryValue.prototype = new MemoryValue();

IntegerMemoryValue.prototype.opposite = function() {
	return new IntegerMemoryValue(-this.getPrimitiveValue());
}

IntegerMemoryValue.prototype.applyArithmeticOperator = function(operator, secondOperand) {
	var expressionValue = 0;
	
	switch (operator) {
		case "+":
		 	expressionValue = this.value + secondOperand.value;
			break;
		case "-":
		 	expressionValue = this.value - secondOperand.value;
			break;
		case "*":
		 	expressionValue = this.value * secondOperand.value;
			break;
		case "/":
		 	expressionValue = this.value / secondOperand.value;
			break;
	}
	return new IntegerMemoryValue(expressionValue);
}

IntegerMemoryValue.prototype.applyTest = function(operator, secondOperand) {
	var expressionValue = 0;
	
	var val1 = this.value;
    var val2 = secondOperand.convertTo("Integer").value;
	
	switch (operator) {
		case "EQ":
			expressionValue = (val1 == val2);
			break;
		case "NEQ":
			expressionValue = (val1 != val2);
			break;
		case "LT":
			expressionValue = (val1 < val2);
			break;
		case "LTE":
			expressionValue = (val1 <= val2);
			break;
		case "GT":
			expressionValue = (val1 > val2);
			break;
		case "GTE":
			expressionValue = (val1 >= val2);
			break;
	}
	return new BooleanMemoryValue(expressionValue);
}

IntegerMemoryValue.prototype.convertTo = function(type) {
	switch (type) {
		case "Boolean":
			if (this.value == 0) {
				return new BooleanMemoryValue(false);
			} else {
				return new BooleanMemoryValue(true);
			}
			break;
		case "Integer":
			return this;
			break;
		case "Character":
			break;
		case "Float":
			break;
		case "Pointer":
			break;
	}
}

// @Override
IntegerMemoryValue.prototype.clone = function() { 	
	return new IntegerMemoryValue(this.value, this.state);
} 
