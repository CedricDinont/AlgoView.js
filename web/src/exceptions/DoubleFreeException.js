/**
 * class DoubleFreeException : raised when the user tries to deallocate a free memory space
 * @param functionName : the name of the function that raised the exception  
 * @param address : the start address of the free memory space
 * @author michael
 */

var DoubleFreeException = function(functionName, address){
	
	Exception.call(this, functionName);
	
	this.address = address;

}

// prototype based inheritance
DoubleFreeException.prototype = new Exception();


DoubleFreeException.prototype.toString = function(){
	return this.functionNameStringPrefix() + "Trying to deallocate a free memory segment at address " + this.address;
}
