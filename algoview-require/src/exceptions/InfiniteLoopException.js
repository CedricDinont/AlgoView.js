/**
 * class InfiniteLoopException : raised when an infinite loop is detected during the program execution
 * @author michael
 */
	
define("InfiniteLoopException",
["Exception"],
function(Exception) {

    var InfiniteLoopException = function() {
        Exception.call(this);

        this.argument = argument;
    }

    // prototype based inheritance
    InfiniteLoopException.prototype = new Exception();

    InfiniteLoopException.prototype.toString = function() {
        return "Infinite Loop Detected";
    }

    return InfiniteLoopException;

});
