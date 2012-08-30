/**
 * class CharacterMemoryValue extends MemoryValue
 * @param value: the value to store in the superclass field "value"
 * @author Michaël, Cédric
 **/

var CharacterMemoryValue = function(value) {

	var typeOfValue = (typeof value);
	var expectedType = "string";
	
	if (value != undefined && typeOfValue != expectedType) {
		throw new IllegalArgumentException("[CharacterMemoryValue constructor] Expected " + expectedType + ", found " + typeOfValue);
	}
	
	if (value != undefined) {
		MemoryValue.call(this, value, MemoryState.HAS_VALUE);
	} else {
		MemoryValue.call(this, undefined, MemoryState.UNDEFINED);
	}
}

// Prototype based inheritance
CharacterMemoryValue.prototype = new MemoryValue();

// @Override(MemoryValue)
CharacterMemoryValue.prototype.getStringValue = function() { 	
		return "'" + this.value + "'";
} 	

CharacterMemoryValue.prototype.applyArithmeticOperator = function(operator, secondOperand) {

}

CharacterMemoryValue.prototype.applyTest = function(operator, secondOperand) {

}

CharacterMemoryValue.prototype.convertTo = function(type) {
	switch (type) {
		case "Boolean":
			break;
		case "Integer":
            break;
        case "Character":
			return this;
			break;
		case "Float":
			break;
		case "Pointer":
			break;
	}
}

// @Override
CharacterMemoryValue.prototype.clone = function() { 	
	return new CharacterMemoryValue(this.value, this.state);
} 
