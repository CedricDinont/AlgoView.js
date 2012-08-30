/**
 * class InvalidAddressException : raised when the user tries to access to an invalid address
 * @param functionName : the name of the function that raised the exception  
 * @param address : the invalid address
 * @author michael
 */

var InvalidAddressException = function(functionName, address){
	
	Exception.call(this, functionName);
	
	this.address = address;

}

// prototype based inheritance
InvalidAddressException.prototype = new Exception();


InvalidAddressException.prototype.toString = function(){
	return this.functionNameStringPrefix() + "Invalid address : " + this.address;
}
