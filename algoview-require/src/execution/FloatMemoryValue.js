	/**
	 * Class FloatMemoryValue extends MemoryValue
	 * @param value: the value to store in the superclass field "value"
	 * @author Michaël, Cédric
	 */
define("FloatMemoryValue",
// Attention: Ne pas inclure les autres xxMemoryValue comme dépendance car cela génère des pbs de dépendance circulaire
["IllegalArgumentException", "MemoryValue", "MemoryState"],
function(IllegalArgumentException, MemoryValue, MemoryState) { 
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
		
		this.type = MemoryValue.FLOAT;
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
			case "MODULO":
				expressionValue = this.value % secondOperand.value;
				break;
		}
		return new FloatMemoryValue(expressionValue);
	}
	
	FloatMemoryValue.prototype.applyTest = function(operator, secondOperand) {
		var expressionValue = 0;
		
		var val1 = this.value;
		var val2 = secondOperand.convertTo(MemoryValue.FLOAT).value;
		
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
		var BooleanMemoryValue = require("BooleanMemoryValue");
		return new BooleanMemoryValue(expressionValue);
	}
	
	FloatMemoryValue.prototype.convertTo = function(type) {
		// Attention: Faire les require ici pour éviter les pbs de dépendance circulaire
		
		switch (type) {
			case MemoryValue.BOOLEAN:
				var BooleanMemoryValue = require("BooleanMemoryValue");
				if (this.value == 0) {
					return new BooleanMemoryValue(false);
				} else {
					return new BooleanMemoryValue(true);
				}
				break;
			case MemoryValue.INTEGER:
				var IntegerMemoryValue = require("IntegerMemoryValue");
				return new IntegerMemoryValue(parseInt(this.value));
				break;
			case MemoryValue.CHARACTER:
				var CharacterMemoryValue = require("CharacterMemoryValue");
				return new CharacterMemoryValue(parseInt(this.getPrimitiveValue()));
				break;
			case MemoryValue.FLOAT:
				return this;
				break;
			case MemoryValue.POINTER:
				throw new CannotConvertTo();
				break;
		}
	}
	
	// @Override
	FloatMemoryValue.prototype.clone = function() { 	
		return new FloatMemoryValue(this.value, this.state);
	} 
	
	FloatMemoryValue.prototype.opposite = function() {
		return new FloatMemoryValue(-this.getPrimitiveValue());
	}
	
	return FloatMemoryValue;
	
});
