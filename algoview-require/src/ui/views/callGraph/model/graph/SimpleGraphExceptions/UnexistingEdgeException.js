// UnexistingEdgeException
define("UnexistingEdgeException",
["SimpleGraphException"],

function(Exception) {
    function UnexistingEdgeException() {
            Exception.call(this, "Unexisting edge");
    }
    UnexistingEdgeException.prototype = new Exception();
    UnexistingEdgeException.prototype.constructor = UnexistingEdgeException;

    return UnexistingEdgeException;

});