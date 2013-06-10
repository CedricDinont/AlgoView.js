// MSO : ajouté containerId

define("AbstractView",
[],
function(){

function AbstractView(containerId){
	
	this.containerId = containerId;

}

/**
 * required refresh method of all views
 */
AbstractView.prototype.refresh = function (){
	
};

return AbstractView;

});
