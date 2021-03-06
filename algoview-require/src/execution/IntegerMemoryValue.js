	/**
	 * Class IntegerMemoryValue extends MemoryValue
	 * @param value: the value to store in the superclass field "value"
	 * @author Michaël, Cédric
	 */
define("IntegerMemoryValue",
// Attention: Ne pas inclure les autres xxMemoryValue comme dépendance car cela génère des pbs de dépendance circulaire
["IllegalArgumentException", "MemoryValue", "MemoryState"], 
function(IllegalArgumentException, MemoryValue, MemoryState) {
	
	function IntegerMemoryValue(value) {
	
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
		
		this.type = MemoryValue.INTEGER;
	}
	
	// Prototype based inheritance
	IntegerMemoryValue.prototype = new MemoryValue();
	IntegerMemoryValue.prototype.constructor = IntegerMemoryValue;
	
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
			case "MODULO":
				expressionValue = this.value % secondOperand.value;
				break;
		}
		return new IntegerMemoryValue(expressionValue);
	}
	
	IntegerMemoryValue.prototype.applyTest = function(operator, secondOperand) {
		var expressionValue = 0;
		
		var val1 = this.value;
		// TODO: A modifier car si le second opérateur est un flottant par exemple, il ne faut pas convertir
		var val2 = secondOperand.convertTo(MemoryValue.INTEGER).value;
		
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
	
	IntegerMemoryValue.prototype.convertTo = function(type) {
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
				return this;
				break;
			case MemoryValue.CHARACTER:
				var CharacterMemoryValue = require("CharacterMemoryValue");
				return new CharacterMemoryValue(this.getPrimitiveValue());
				break;
			case MemoryValue.FLOAT:
				var FloatMemoryValue = require("FloatMemoryValue");
				return new FloatMemoryValue(this.getPrimitiveValue());
				break;
			case MemoryValue.POINTER:
				throw new CannotConvertTo();
				break;
		}
	}
	
	// @Override
	IntegerMemoryValue.prototype.clone = function() { 	
		return new IntegerMemoryValue(this.value, this.state);
	} 
	
	return IntegerMemoryValue;
});
