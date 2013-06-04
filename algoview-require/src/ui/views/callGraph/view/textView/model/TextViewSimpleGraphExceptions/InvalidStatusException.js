define("InvalidStatusException",
["SimpleGraphException"],
function(Exception){

    // InvalidStatusException
    function InvalidStatusException(status) {
            Exception.call(this,  "Invalid Node Status : "+status);
            this.status = status;
    }
    InvalidStatusException.prototype = new Exception();
    InvalidStatusException.prototype.constructor = InvalidStatusException;


    InvalidStatusException.prototype.logMessage = function(){
            console.log('status: ' + this.status + ' must but "closed" or "open"');
    };

return InvalidStatusException;

});