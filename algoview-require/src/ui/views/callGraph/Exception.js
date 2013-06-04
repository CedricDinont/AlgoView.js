define("SimpleGraphException",
[0],
function(){

function Exception(message){
	this.name = "Exception";
	this.message = message;
}

Exception.prototype = new Error();
Exception.prototype.constructor = Exception;

/**
 * Log to message from an exception (it can be overrided by a specific exception)
 */
Exception.prototype.logMessage = function(){
		console.log(this.message);
};

Exception.prototype.logError = function(){
		console.log('Exception caugth : '+ this.message + 'in function "'+this.functionName+'"');
};

return Exception;

});