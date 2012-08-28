/**
 * class IllegalArgumentException : raised an illegal argument is provided as parameter of a function
 * @param message : the error message
 * @author michael
 */
var IllegalArgumentException = function(message){
	
	Error.call(this, message);


}

// prototype based inheritance
IllegalArgumentException.prototype = new Error();