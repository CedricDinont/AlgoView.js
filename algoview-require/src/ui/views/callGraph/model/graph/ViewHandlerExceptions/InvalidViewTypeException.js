// InvalidviewType
define("InvalidViewTypeException",
["SimpleGraphException"],
function(Exception) {
    function InvalidViewTypeException(viewType) {
            Exception.call(this,  "Invalid view type : "+viewType);
            this.viewType = viewType;
    }
    InvalidViewTypeException.prototype = new Exception();
    InvalidViewTypeException.prototype.constructor = InvalidViewTypeException;


    InvalidViewTypeException.prototype.logMessage = function(){
            console.log('viewType: ' + this.viewType + ' is not valid');
    };

});