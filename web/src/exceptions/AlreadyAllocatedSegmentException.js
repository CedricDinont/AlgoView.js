/**
 * class AlreadyAllocatedSegmentException extends Exception: raised when the user tries to allocate a same memory cell several times
 * @param functionName : the name of the function that raised the exception 
 * @param address : the start address of the already allocated segment
 * @author michael
 */
var AlreadyAllocatedSegmentException = function(functionName, address){
	
	Exception.call(this, functionName);
	
	this.address = address;

}

// prototype based inheritance
AlreadyAllocatedSegmentException.prototype = new Exception();


AlreadyAllocatedSegmentException.prototype.toString = function(){
	return this.functionNameStringPrefix() + "Trying to use realloc a memory area in use at address " + this.address;
}


