// MSO : ajouté containerId

define("GraphicalView",
["AbstractView", "GraphCreationEvent", "WindowWidthChangeEvent", "jQuery"],
function(AbstractView, GraphCreationEvent, WindowWidthChangeEvent, $j) {

GraphicalView = function(containerId) {
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
    //this.fixBoxTextLength(model);
};

GraphicalView.prototype.addGraphToDOM = function(htmlGraph) {
	// MSO : ajouté la convention : id du svg = id du container + "-svg"
	
    $j("#" + this.containerId + " svg").remove();
    $j("#" + this.containerId).append('<svg id="' + this.containerId + '-svg"  xmlns="http://www.w3.org/2000/svg" version="1.1">'+ htmlGraph +'</svg>');
    $j("#" + this.containerId + "-svg").height( $j("#" + this.containerId).height()  );
    $j("#" + this.containerId + "-svg").width( $j("#" + this.containerId).width()  );
};

GraphicalView.prototype.fixBoxTextLength = function(model){
        var maxBoxWidth = model.getMaxNodeWidth();

        var nbNode = $j('.groupnode').length;

        for(var i = 0; i < nbNode; i++){                
                var currentNodeText = $j('.function-name')[i];
                var currentNodeTextContent = $j(currentNodeText).text();
                var currentNodeTextWidth = $j(currentNodeText.getBBox()).attr('width');
   
                  // Reduce rect width
//                var currentRect = $j($j('.groupnode')[i]).children()[1];
//                var currentLine = $j($j('.groupnode')[i]).children()[3];
//                var currentRectWidth = $j(currentRect.getBBox()).attr('width');
//                
//                if(currentNodeTextWidth < currentRectWidth){
//                    var currentPosX = $j(currentRect).attr('x');
//
//                    $j(currentRect).attr('width', currentNodeTextWidth+20);                    
//                    $j(currentRect).attr('x', (parseInt(currentPosX) + (( (Math.abs(currentRectWidth - currentNodeTextWidth))/2))) - 10);
//                    if(currentLine !== undefined){
//                        $j(currentLine).attr('x', parseInt($j(currentLine).attr('x')) + (( (Math.abs(currentRectWidth - currentNodeTextWidth))/2)) - 5);
//                    }
//                }
                
                // Max box size, truncate text : Might be slow
                while(currentNodeTextWidth >= maxBoxWidth - 10){
                        var currentNodeNbChar = $j(currentNodeText).text().length;
                        var subText = currentNodeTextContent.substring(0, currentNodeNbChar-4) + "...";
                        $j(currentNodeText).text(subText);
                        currentNodeTextWidth = $j(currentNodeText.getBBox()).attr('width');
                }
        }
    };

return GraphicalView;

});
