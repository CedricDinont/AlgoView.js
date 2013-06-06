// MSO : ajouté containerId

define("AbstractView",
[0],
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
