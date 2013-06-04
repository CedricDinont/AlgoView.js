// InvalidIdException
define("InvalidIdException",
["SimpleGraphException"],
function(Exception) {
    
    function InvalidIdException(id) {
            Exception.call(this,  "Invalid Id");
            this.id = id;
    }
    InvalidIdException.prototype = new Exception();
    InvalidIdException.prototype.constructor = InvalidIdException;


    InvalidIdException.prototype.logMessage = function(){
            console.log('id: ' + this.id + ' is Invalid');
    };

    return InvalidIdException;

});