/**
 * interface View
 * defines the methods of a view
 * @author michael
 */
var View = function() {

	this.debug = false;
	
	this.log = function() {
		if (this.debug) {
			console.log.apply(console, arguments);
		}
	}

	 // Should be overridden
	this.update = function(model) {
	}

}
