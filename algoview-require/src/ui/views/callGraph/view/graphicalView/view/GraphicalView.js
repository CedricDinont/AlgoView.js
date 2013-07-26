// MSO : ajouté containerId

define("GraphicalView",
["AbstractView", "GraphCreationEvent", "WindowWidthChangeEvent", "jQuery"],
function(AbstractView, GraphCreationEvent, WindowWidthChangeEvent, $j) {

GraphicalView = function(containerId, svgId) {
    AbstractView.call(this, containerId);
};

GraphicalView.prototype = new AbstractView();
GraphicalView.prototype.constructor = GraphicalView;

GraphicalView.prototype.refresh = function(event) {
    if (event instanceof GraphCreationEvent) {
        this.clear();
        this.displayGraph(event.getModel());
    }
    if (event instanceof WindowWidthChangeEvent) {
        this.clear();
        this.displayGraph(event.getModel());
    }
};


GraphicalView.prototype.clear = function() {
    $j("#" + this.containerId).append('<svg id="' + this.containerId + '-svg" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>');
    
};

GraphicalView.prototype.displayGraph = function(model) {
    var htmlGraph = model.createGraphHtml();

    this.addGraphToDOM(htmlGraph.html());
};

GraphicalView.prototype.addGraphToDOM = function(htmlGraph) {
	// MSO : ajouté la convention : id du svg = id du container + "-svg"
	
    $j("#" + this.containerId + " svg").remove();
    $j("#" + this.containerId).append('<svg id="' + this.containerId + '-svg"  xmlns="http://www.w3.org/2000/svg" version="1.1">'+ htmlGraph +'</svg>');
    
    $j("#" + this.containerId + "-svg").height( $j("#" + this.containerId).height()  );
    $j("#" + this.containerId + "-svg").width( $j("#" + this.containerId).width()  );
};

return GraphicalView;

});
