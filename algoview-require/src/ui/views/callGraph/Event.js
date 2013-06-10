define("Event",
[],
function(){

    function Event(model){
            this.model = model;
    }

    Event.prototype.constructor = Event;

    Event.prototype.getModel = function(){
            return this.model;
    };

    return Event;

});
