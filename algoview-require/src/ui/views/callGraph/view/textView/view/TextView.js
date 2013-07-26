define("TextView",
["AbstractView", "GraphCreationEvent", "OpenNodeEvent", "CloseNodeEvent", "jQuery"],
function(AbstractView, GraphCreationEvent, OpenNodeEvent, CloseNodeEvent, $j) {

TextView = function(containerId) {  // MSO : ajouté containerId
    AbstractView.call(this, containerId);
//
//    if (specifications === undefined) {
//        throw new UndefinedSpecificationException();
//    }
//    if (specifications['graph'] === undefined) {
//        throw new UndefinedGraphException();
//    }
//    this.graph = specifications['graph'];
};

TextView.prototype = new AbstractView();
TextView.prototype.constructor = TextView;


/**
 * function to refresh the view function that dispatch the what to refresh in the view
 * @param event to know what to refresh (contains the model)
 */
TextView.prototype.refresh = function(event) {
    if (event instanceof GraphCreationEvent) {
        this.clear();
        this.displayGraph(event.getModel());
    }
    if (event instanceof OpenNodeEvent) {
        var nodeDOM = event.nodeSpecs.nodeDOM;
        var edgesHtml = event.nodeSpecs.edgesHtml;
        this.displayNodeEdges(nodeDOM, edgesHtml);
    }
    if (event instanceof CloseNodeEvent) {
        var nodeId = event.nodeSpecs.nodeId;
        var nodeDOM = event.nodeSpecs.nodeDOM;
        this.hideNodeEdges(nodeId, nodeDOM);
    }

};

TextView.prototype.clear = function() {
    $j("#" + this.containerId).html('<h4>Text View</h4>');
};

TextView.prototype.displayGraph = function(model) {
    // create memory graph
    var htmlGraph = model.createAllNodesHtml();

    // Add graph to DOM
    this.addGraphToDOM(htmlGraph);
};

TextView.prototype.addGraphToDOM = function(htmlGraph) {
    $j("#" + this.containerId).append(htmlGraph);
};


TextView.prototype.displayNodeEdges = function(nodeDOM, edgesHtml) {
    $j(nodeDOM).attr('class', 'open').append(edgesHtml);
};


TextView.prototype.hideNodeEdges = function(nodeId, nodeDOM) {
    $j('.node-edges-' + nodeId).remove();
    $j(nodeDOM).attr('class', 'closed');
};

return TextView;

});
