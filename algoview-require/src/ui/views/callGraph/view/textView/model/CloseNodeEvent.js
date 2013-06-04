define("CloseNodeEvent",
["Event"],
function(Event){
/**
 * Tells the view what to close the node
 * @param model passes the model to the view
 * @param nodeSpecs needed info about the node
 *
 */
function CloseNodeEvent(model, nodeSpecs){
        Event.call(this, model);
	this.nodeSpecs = nodeSpecs;
}
CloseNodeEvent.prototype = new Event();
CloseNodeEvent.prototype.constructor = CloseNodeEvent;

return CloseNodeEvent;

});