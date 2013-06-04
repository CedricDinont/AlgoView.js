// AlreadyExistingEdgeException
define("AlreadyExistingEdgeException",
["SimpleGraphException"],
function(Exception) {
    function AlreadyExistingEdgeException() {
            Exception.call(this, "Already existing edge");
    }
    AlreadyExistingEdgeException.prototype = new Exception();
    AlreadyExistingEdgeException.prototype.constructor = AlreadyExistingEdgeException;
    
    return AlreadyExistingEdgeException;
});
