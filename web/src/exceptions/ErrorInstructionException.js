var ErrorInstructionException = function(functionName, message) {
	
	Exception.call(this, functionName);
	
	this.message = message;
}

// prototype based inheritance
ErrorInstructionException.prototype = new Exception();

ErrorInstructionException.prototype.toString = function() {
	return "Error instruction in Simple Language program: " + this.message;
}
