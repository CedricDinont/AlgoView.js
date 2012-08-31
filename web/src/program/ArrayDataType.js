/**
 * interface ArrayDataType implements DataType: describes the primitive type []
 * @author michael
 */
 

var ArrayDataType = function(elementsDataType, length) {
	this.elementsDataType = elementsDataType;		// instance of DataType
	this.length = length;							// nb of elements
}

// prototype based inheritance
ArrayDataType.prototype = new DataType();

// @Override(DataType)
ArrayDataType.prototype.getName = function() {
	return this.elementsDataType.getName() + "[]";	// recursively handles multi-dimensionnal arrays of X -> X[][].. []
}	

// @Override(DataType)
ArrayDataType.prototype.initMemory = function(memory, address) {	
	var currentAddress = address;
	
	for (var i = 0; i < this.length; i++) {
		this.elementsDataType.initMemory(memory, currentAddress);
		currentAddress += this.getElementsSize(); 			
	}
}	

// @Override(DataType)
ArrayDataType.prototype.getSize = function() { 
	return this.getElementsSize() * this.length;
}	


// specific methods

ArrayDataType.prototype.getElementsSize = function() { 
	return this.elementsDataType.getSize();
}	

ArrayDataType.prototype.getLength = function() {
	return this.length;
}

ArrayDataType.prototype.getElementsDataType = function() { 
	return this.elementsDataType;
}	

ArrayDataType.prototype.getDimensions = function() { 
	var nestedDimensions = 0;
	
	if (this.elementsDataType instanceof ArrayDataType){
		nestedDimensions = this.elementsDataType.getDimensions();
	}
	
	return 1 + nestedDimensions;
}




