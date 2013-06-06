// UnexistingNodeException
define("UnexistingNodeException",
["SimpleGraphException"],

function(Exception) {
    function UnexistingNodeException() {
            Exception.call(this, "Unexisting node");
    }
    UnexistingNodeException.prototype = new Exception();
    UnexistingNodeException.prototype.constructor = UnexistingNodeException;

    return UnexistingNodeException;

});