/**
 * class PartOfPrimitiveTypeException : raised when the user tries to access to a memory cell which is part (but not the beginning of) a multi-cell data type 
 * @param functionName : the name of the function that raised the exception 
 * @param address : the start address of the cell
 * @author michael
 */

var PartOfPrimitiveTypeException = function(functionName, address){
	
	Exception.call(this, functionName);
	
	this.address = address;

}

// prototype based inheritance
PartOfPrimitiveTypeException.prototype = new Exception();


PartOfPrimitiveTypeException.prototype.toString = function(){
	return this.functionNameStringPrefix() + "Trying to read in a part of a primitive data type at address " + this.address;
}
