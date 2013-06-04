define("GraphicalView",
["AbstractView", "GraphCreationEvent", "WindowWidthChangeEvent"],
function(AbstractView, GraphCreationEvent, WindowWidthChangeEvent) {

GraphicalView = function() {
    AbstractView.call(this);
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
    $('#graphicalView').append('<svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>');
};

GraphicalView.prototype.displayGraph = function(model) {
    var htmlGraph = model.createGraphHtml();

    this.addGraphToDOM(htmlGraph.html());
};

GraphicalView.prototype.addGraphToDOM = function(htmlGraph) {
    $('#graphicalView svg').remove();
    $('#graphicalView').append('<svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1">'+ htmlGraph +'</svg>');
};

return GraphicalView;

});