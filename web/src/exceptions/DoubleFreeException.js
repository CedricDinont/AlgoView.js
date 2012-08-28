/**
 * class DoubleFreeException : raised when the user tries to deallocate a free memory space
 * @param message : the error message
 * @author michael
 */
var DoubleFreeException = function(message){
	
	Error.call(this, message);


}

// prototype based inheritance
DoubleFreeException.prototype = new Error();