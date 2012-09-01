/**
 * class PointerMemoryValue extends MemoryValue
 * @param value : the value to store in the superclass field "value"
 * @author Michaël, Cédric
 **/
var PointerMemoryValue = function(value) {
	if (value != undefined) {
		MemoryValue.call(this, value, MemoryState.HAS_VALUE);
	} else {
		MemoryValue.call(this, undefined, MemoryState.UNDEFINED);
	}
	
	this.type = MemoryValue.POINTER;
}

// prototype based inheritance
PointerMemoryValue.prototype = new MemoryValue();

PointerMemoryValue.prototype.isNil = function() {
	if (this.value == 0) {
		return true;
	} else {
		return false;
	}
}

PointerMemoryValue.prototype.applyArithmeticOperator = function(operator, secondOperand) {

}

PointerMemoryValue.prototype.applyTest = function(operator, secondOperand) {

}

PointerMemoryValue.prototype.convertTo = function(type) {
	switch (type) {
		case MemoryValue.BOOLEAN:
			break;
		case MemoryValue.INTEGER:
            break;
        case MemoryValue.CHARACTER:
			break;
		case MemoryValue.FLOAT:
			break;
		case MemoryValue.POINTER:
			return this;
			break;
	}
}

// @Override
PointerMemoryValue.prototype.clone = function() { 	
	return new PointerMemoryValue(this.value, this.state);
} 

var NIL = new PointerMemoryValue(0);
