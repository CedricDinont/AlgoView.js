/**
 * abstract class AbstractModel
 * defines the event firing process of a model
 * @author michael
 */
define("AbstractModel",
[0],
function() {
	var AbstractModel = function() {	
		this.views = [];
	}
	
	AbstractModel.prototype.addView = function(view, noRefresh) {
		this.views.push(view);
			
		if (! noRefresh) {
			view.update(this);
		}
	}
	
	AbstractModel.prototype.updateViews = function() {
		for (var i = 0; i < this.views.length; i++) {
			this.views[i].update(this);
		}
	}
	
	return AbstractModel;
});
