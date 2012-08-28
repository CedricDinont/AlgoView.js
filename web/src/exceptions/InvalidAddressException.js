/**
 * class InvalidAddressException : raised when the user tries to access to a forbidden memory segment
 *	- unallocated memory cell
 *	- memory cell which is part (but not the beginning of) a multi-cell data type 
 * @param message : the error message
 * @author michael
 */
var InvalidAddressException = function(message){
	
	Error.call(this, message);


}

// prototype based inheritance
InvalidAddressException.prototype = new Error();