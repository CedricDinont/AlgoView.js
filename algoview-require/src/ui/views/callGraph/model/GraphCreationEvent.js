define("GraphCreationEvent",
["Event"],
function(Event) {
    function GraphCreationEvent(model){
            Event.call(this, model);
            this.model = model;
    }

    GraphCreationEvent.prototype = new Event();
    GraphCreationEvent.prototype.constructor = GraphCreationEvent;

    return GraphCreationEvent;
});