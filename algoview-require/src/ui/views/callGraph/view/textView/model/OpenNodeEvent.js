define("OpenNodeEvent",
["Event"],
function(Event){
    /**
     * Tells the view what to open the node
     * @param model passes the model to the view
     * @param nodeSpecs needed info about the node
     *
     */
    function OpenNodeEvent(model, nodeSpecs){
            Event.call(this, model);
            this.model = model;
            this.nodeSpecs = nodeSpecs;
    }
    OpenNodeEvent.prototype = new Event();
    OpenNodeEvent.prototype.constructor = OpenNodeEvent;


    return OpenNodeEvent;
});