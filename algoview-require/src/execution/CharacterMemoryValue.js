// Info : Javascript utilise de l'UTF-16

// Voir http://msdn.microsoft.com/fr-fr/library/fwa1sfwk(v=vs.90).aspx 
/**
 * class CharacterMemoryValue extends MemoryValue
 * @param value: the value to store in the superclass field "value"
 * @author Michaël, Cédric
 **/
define("CharacterMemoryValue",
// Attention: Ne pas inclure les autres xxMemoryValue comme dépendance car cela génère des pbs de dépendance circulaire
["IllegalArgumentException", "MemoryValue", "MemoryState"],
function(IllegalArgumentException, MemoryValue, MemoryState) {
	
	function CharacterMemoryValue(value) {
		
		console.log("Character value: '" + value + "'.");

		this.type = MemoryValue.CHARACTER;

		if (value == undefined) {
			MemoryValue.call(this, undefined, MemoryState.UNDEFINED);
			return;
		}
	
		var typeOfValue = typeof(value);
		if (typeOfValue == "number") {
			value = String.fromCharCode(value);
		} else if (typeOfValue == "string") {
			value = value.charAt(0);
		} else {
			throw new IllegalArgumentException("[CharacterMemoryValue constructor] Expected " + expectedType + ", found " + typeOfValue);
		}
		
		MemoryValue.call(this, value, MemoryState.HAS_VALUE);
	}
	
	// Prototype based inheritance
	CharacterMemoryValue.prototype = new MemoryValue();
	
	// @Override(MemoryValue)
	CharacterMemoryValue.prototype.getStringValue = function() { 	
			return "" + this.value + "";
	} 	
	
	CharacterMemoryValue.prototype.applyArithmeticOperator = function(operator, secondOperand) {
	
	}
	
	CharacterMemoryValue.prototype.applyTest = function(operator, secondOperand) {
	
	}
	
	CharacterMemoryValue.prototype.convertTo = function(type) {
		// Attention: Faire les require ici pour éviter les pbs de dépendance circulaire

		var charCode = this.getPrimitiveValue().charCodeAt(0);
		
		switch (type) {
			case MemoryValue.BOOLEAN:
				var BooleanMemoryValue = require("BooleanMemoryValue");
				if (charCode == 0) {
					return new BooleanMemoryValue(false);
				} else {
					return new BooleanMemoryValue(true);
				}
				break;
			case MemoryValue.INTEGER:
				var IntegerMemoryValue = require("IntegerMemoryValue");
				return new IntegerMemoryValue(charCode);
				break;
			case MemoryValue.CHARACTER:
				return this;
				break;
			case MemoryValue.FLOAT:
				var FloatMemoryValue = require("FloatMemoryValue");
				return new FloatMemoryValue(charCode);
				break;
			case MemoryValue.POINTER:
				throw new CannotConvertTo();
				break;
		}
	}
	
	// @Override
	CharacterMemoryValue.prototype.clone = function() { 	
		return new CharacterMemoryValue(this.value, this.state);
	}
	
	return CharacterMemoryValue;
});
