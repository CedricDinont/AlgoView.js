// AlreadyExistingNodeException
define("AlreadyExistingNodeException",
["SimpleGraphException"],
function(Exception) {
    function AlreadyExistingNodeException(id) {
            Exception.call(this, "Already existing node");
            this.id = id;
    }
    AlreadyExistingNodeException.prototype = new Exception();
    AlreadyExistingNodeException.prototype.constructor = AlreadyExistingNodeException;

    AlreadyExistingNodeException.prototype.logMessage = function(){
            console.log('Node with id: ' + this.id + ' already exists.');
    };

    return AlreadyExistingNodeException;
});