define("WindowWidthChangeEvent",
["Event"],
function(Event) {

    function WindowWidthChangeEvent(model){
            Event.call(this, model);
            this.model = model;
    }
    WindowWidthChangeEvent.prototype = new Event();
    WindowWidthChangeEvent.prototype.constructor = WindowWidthChangeEvent;

    return WindowWidthChangeEvent;

});