/**
 * Class FloatMemoryValue extends MemoryValue
 * @param value: the value to store in the superclass field "value"
 * @author Michaël, Cédric
 */
var FloatMemoryValue = function(value) {

	var typeOfValue = (typeof value);
	var expectedType = "number";
	
	if (value != undefined && typeOfValue != expectedType) {
		throw new IllegalArgumentException("[FloatMemoryValue constructor] Expected " + expectedType + ", found " + typeOfValue);
	}
		
	if (value != undefined) {
		MemoryValue.call(this, parseFloat(value), MemoryState.HAS_VALUE);
	} else {
		MemoryValue.call(this, undefined, MemoryState.UNDEFINED);
	}
}

// Prototype based inheritance
FloatMemoryValue.prototype = new MemoryValue();

FloatMemoryValue.prototype.applyArithmeticOperator = function(operator, secondOperand) {
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
	return new FloatMemoryValue(expressionValue);
}

FloatMemoryValue.prototype.applyTest = function(operator, secondOperand) {
	var expressionValue = 0;
	
	var val1 = this.value;
    var val2 = secondOperand.convertTo("Float").value;
	
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

FloatMemoryValue.prototype.convertTo = function(type) {
	switch (type) {
		case "Boolean":
			if (this.value == 0) {
				return new BooleanMemoryValue(false);
			} else {
				return new BooleanMemoryValue(true);
			}
			break;
		case "Integer":
			break;
		case "Character":
			break;
		case "Float":
			return this;
			break;
		case "Pointer":
			break;
	}
}

