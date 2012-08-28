/**
 * class InvalidAddressException : raised when the user tries to allocate a same memory cell several times
 * @param message : the error message
 * @author michael
 */
var AlreadyAllocatedSegmentException = function(message){
	
	Error.call(this, message);


}

// prototype based inheritance
AlreadyAllocatedSegmentException.prototype = new Error();