/**
 * class UnallocatedSegmentException : raised when the user tries to access to an unallocated memory cell
 * @param functionName : the name of the function that raised the exception  
 * @param address : the start address of the unallocated area
 * @author michael
 */

var UnallocatedSegmentException = function(functionName, address){
	
	Exception.call(this, functionName);
	
	this.address = address;

}

// prototype based inheritance
UnallocatedSegmentException.prototype = new Exception();


UnallocatedSegmentException.prototype.toString = function(){
	return this.functionNameStringPrefix() + "Trying to read in unallocated memory area at address " + this.address;
}
