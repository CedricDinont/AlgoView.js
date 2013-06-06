define("GraphicalViewSimpleGraph",
["SimpleGraph", "GraphicalView", "GraphicalViewListenerHandler", "WindowWidthChangeEvent", "GraphicalViewNode"],
function(SimpleGraph, GraphicalView, GraphicalViewListenerHandler, WindowWidthChangeEvent, GraphicalViewNode){


GraphicalViewSimpleGraph = function(directed, containerId) {  // MSO : ajouté containerId
    SimpleGraph.call(this, directed);
    this.root = undefined;
    this.containerId = containerId;		// ajouté par MSO
    this.view = new GraphicalView(containerId);
    this.listenerHandler = new GraphicalViewListenerHandler(this);
    this.defaultValues = {
        "contener": containerId,  // MSO : changé en containerId
        "nodeWidth": "200",
        "nodeHeight": "60",
        "heightNodeAndEdge": "110",
        "offsetx": "80",
        "offsety": "80"

    }
    this.windowWidth = $j("#" + this.defaultValues['contener']).width();
    this.windowHeight = $j("#" + this.defaultValues['contener']).height();
};

GraphicalViewSimpleGraph.prototype = new SimpleGraph();
GraphicalViewSimpleGraph.prototype.constructor = TextView;


GraphicalViewSimpleGraph.prototype.setRoot = function(nodeId) {
    this.root = this.getNode(nodeId);
}
GraphicalViewSimpleGraph.prototype.getRoot = function() {
    return this.root;
}

GraphicalViewSimpleGraph.prototype.setWindowWidth = function(width){
    this.windowWidth = width;
    this.view.refresh(new WindowWidthChangeEvent(this))
}
GraphicalViewSimpleGraph.prototype.getWindowWidth = function(){
    return this.windowWidth;
}

GraphicalViewSimpleGraph.prototype.browseGraph = function() {
    var queue = {};
    var visited = {};
    var currentNode;
    if(this.root === undefined) {
        currentNode = this.nodes[Object.keys(this.nodes)[0]];
    } else {
        currentNode = this.root;
    }
    var tempNodeChild;
    var keysQueue;
    var i = 0;
    var counter = 0;
    var keysEdges;
    var keysEdgesLength;

    var currentDepth = 0;
    var currentPositionInDepth = 0;
    var nbSiblersInCurrentDepth = 1;
    var nbSiblersInNextDepth = 0;


    var nodesGraphicalView = [];
    nodesGraphicalView[currentDepth] = [];

    var edgesGraphicalView = {};
    
    for (i; i < this.getOrder(); i++) {
        visited["node-" + this.nodes[Object.keys(this.nodes)[i]].getId()] = false;
    }

    do {
        if (visited["node-" + currentNode.getId()] === false) { //If node is not already visited

            //Enregistrement du noeud avec les informations supplémentaires nécessaire à l'affichage
            nodesGraphicalView[currentDepth][currentPositionInDepth] = new GraphicalViewNode();
            nodesGraphicalView[currentDepth][currentPositionInDepth].addReferenceNode(currentNode);

            nodesGraphicalView[currentDepth][currentPositionInDepth].setDepth(currentDepth);
            nodesGraphicalView[currentDepth][currentPositionInDepth].setPositionInDepth(currentPositionInDepth);

            //Enregistrement des arcs pour l'affichage
            keysEdges = Object.keys(currentNode.edges);
            keysEdgesLength = keysEdges.length;
            for (var r = 0; r < keysEdgesLength; r++) {
                if (this.isDirected() || (!this.isDirected() && (edgesGraphicalView['node-' + currentNode.edges[keysEdges[r]].getDest().getId()] === undefined || (edgesGraphicalView['node-' + currentNode.edges[keysEdges[r]].getDest().getId()] !== undefined && edgesGraphicalView['node-' + currentNode.edges[keysEdges[r]].getDest().getId()]["node-" + currentNode.getId()] === undefined)))) {
                    if (edgesGraphicalView["node-" + currentNode.getId()] === undefined) {
                        edgesGraphicalView["node-" + currentNode.getId()] = {}
                    }
                    edgesGraphicalView["node-" + currentNode.getId()]['node-' + currentNode.edges[keysEdges[r]].getDest().getId()] = true;
                }
            }

            currentPositionInDepth++;
            for (var i = 0; i < currentNode.getDegree(); i++) {
                tempNodeChild = currentNode.edges[Object.keys(currentNode.edges)[i]].getDest();
                if (visited["node-" + tempNodeChild.getId()] === false && queue["node-" + tempNodeChild.getId()] == undefined && tempNodeChild.getId() !== currentNode.getId()) {
                    nbSiblersInNextDepth++;
                    queue["node-" + tempNodeChild.getId()] = tempNodeChild;
                }
            }
            counter++;
            visited["node-" + currentNode.getId()] = true;
        }
        delete queue["node-" + currentNode.getId()];
        keysQueue = Object.keys(queue);
        currentNode = queue[keysQueue[0]];

        if (currentPositionInDepth >= nbSiblersInCurrentDepth && counter < Object.keys(visited).length) {
            currentDepth++;
            nodesGraphicalView[currentDepth] = [];
            nbSiblersInCurrentDepth = nbSiblersInNextDepth;
            currentPositionInDepth = 0;
            nbSiblersInNextDepth = 0;
        }

    } while (keysQueue.length > 0)

    return [nodesGraphicalView, edgesGraphicalView];
};

GraphicalViewSimpleGraph.prototype.createGraphHtml = function() {

    var nodesGraphicalView = this.browseGraph()[0];
    var edgesGraphicalView = this.browseGraph()[1];

    var maxWidth = this.windowWidth;
    var maxHeight = this.windowHeight;
    var nbSiblersCurrentDepth;
    
    var graphHtml = $j('<div>');
    
    for (var i = 0; i < nodesGraphicalView.length; i++) {
        nbSiblersCurrentDepth = nodesGraphicalView[i].length;
        for (var e = 0; e < nbSiblersCurrentDepth; e++) {
            nodesGraphicalView[i][e].setPositionX(((maxWidth / nbSiblersCurrentDepth) * e) + ((maxWidth / nbSiblersCurrentDepth) / 2) - (this.defaultValues["nodeWidth"] / 2));
            nodesGraphicalView[i][e].setPositionY((i + 1) * this.defaultValues["heightNodeAndEdge"]);

            graphHtml.append(this.createRectHtml(nodesGraphicalView[i][e]));
        }
    }

    var edgesKeys = Object.keys(edgesGraphicalView);
    var edgesKeysLength = edgesKeys.length;
    var edgesKeysDest;
    var edgesKeysDestLength;
    var idSrc;
    var rectSrc;
    var idDest;
    var rectDest;
    
    for (var i = 0; i < edgesKeysLength; i++) {

        idSrc = parseInt(edgesKeys[i].split("-")[1]);
        rectSrc = graphHtml.find('#node-'+idSrc);

        edgesKeysDest = Object.keys(edgesGraphicalView[edgesKeys[i]]);
        edgesKeysDestLength = edgesKeysDest.length;

        for (var e = 0; e < edgesKeysDestLength; e++) {
            idDest = parseInt(edgesKeysDest[e].split("-")[1]);
            rectDest = graphHtml.find('#node-'+idDest);

            graphHtml.append(this.createArrowHtml(rectSrc,rectDest,this.isDirected()));

        }
    }

    // $j(window).resize({self: this.listenerHandler}, this.listenerHandler.OnWindowSizeChange); // retiré par MSO
    
    // MSO : convention de nommage pour la zone svg : id du container + "-svg"
    $j(document).on('mousedown', "#" + this.containerId + "-svg", {self: this.listenerHandler}, this.listenerHandler.nodeDragMouseDown);
   
    return graphHtml;
};

GraphicalViewSimpleGraph.prototype.createRectHtml = function(node) {

    var rect,text,g;

    g = document.createElementNS("http://www.w3.org/2000/svg","g");
    g = $j(g);
    g.attr("id","node-"+node.getId());
    g.attr("data-id",node.getId());
    g.attr("class","groupnode");

    rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
    rect = $j(rect);
    rect.attr("x",node.positionX)
               .attr("y",node.positionY)
               .attr("width",this.defaultValues["nodeWidth"])
               .attr("height",this.defaultValues["nodeHeight"])
               .attr("stroke","#000")
               .attr("fill","rgb(255,255,255)");
    g.append(rect);
    

    text = document.createElementNS("http://www.w3.org/2000/svg","text");
    text = $j(text);
    text.attr("x",node.positionX + this.defaultValues["nodeWidth"] / 2)
               .attr("y",node.positionY + this.defaultValues["nodeHeight"] / 2)
               .attr("width",this.defaultValues["nodeWidth"])
               .attr("height",this.defaultValues["nodeHeight"])
               .attr("stroke","#000")
               .attr("fill","#000")
               .attr("text-anchor","middle")
               .attr("title",node.getValue())
               .text(node.getValue());
    g.append(text);

    return g;
};

GraphicalViewSimpleGraph.prototype.createArrowHtml = function(groupSrc, groupDest, directed) {

    var a,b,angle;
    var line;
    var arrow;
    var g;
    var x0,y0,x1,y1;
    var svgRectSrc = $j(groupSrc).find("rect");
    var svgRectDest = $j(groupDest).find("rect");

    g = document.createElementNS("http://www.w3.org/2000/svg","g");
    g = $j(g);

    g.attr("id","edge-"+groupSrc.attr("id").split("-")[1]+"-"+groupDest.attr("id").split("-")[1]);
    g.attr("data-src",groupSrc.attr("id").split("-")[1]);
    g.attr("data-dest",groupDest.attr("id").split("-")[1]);
    g.attr("class","groupedge");

    x0 = parseInt(svgRectSrc.attr('x'))+(this.defaultValues['nodeWidth']/2);
    y0 = parseInt(parseInt(svgRectSrc.attr('y'))+parseInt(this.defaultValues['nodeHeight']));
    x1 = parseInt(svgRectDest.attr('x'))+(this.defaultValues['nodeWidth']/2);
    y1 = parseInt(svgRectDest.attr('y'));


    if(groupSrc.attr("id") == groupDest.attr("id")) {

        x0 = parseInt(svgRectSrc.attr('x'));
        y0 = parseInt(parseInt(svgRectSrc.attr('y'))+parseInt(this.defaultValues['nodeHeight']/2)+5);
        x1 = parseInt(svgRectDest.attr('x'));
        y1 = parseInt(parseInt(svgRectDest.attr('y'))+parseInt(this.defaultValues['nodeHeight']/2)-5);

        path = document.createElementNS("http://www.w3.org/2000/svg","path");
        path = $j(path);
        var offsetx = this.defaultValues.offsetx;
        var offsety = this.defaultValues.offsety;
        
        path.attr("d","M "+x0+" "+y0+" C "+parseFloat(parseFloat(x0)-parseFloat(offsetx))+" "+parseFloat(parseFloat(y0)+parseFloat(offsety))+" , "+parseFloat(parseFloat(x1)-parseFloat(offsetx))+" "+parseFloat(parseFloat(y1)-parseFloat(offsety))+" , "+x1+" "+y1+"")
               .attr("stroke","#000")
               .attr("class","line")
               .attr("fill","transparent");
        g.append(path);

        if(directed == true) {

            a =(offsetx);
            b =-(offsety);

            if(x1 < offsetx) {
                
                angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
            }else{
                angle = Math.PI/2 - Math.atan2(a,b)- Math.PI/14;
            }

            arrow = document.createElementNS("http://www.w3.org/2000/svg","path");
            arrow = $j(arrow);
            arrow.attr("d","m"+ x1+" "+y1+ " l10,-10 l-20,0 z")
                       .attr("fill",'#99bce8')
                       .attr("stroke","#000")
                       .attr("class","arrow")
                       .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1) +")")
                       ;

            g.append(arrow);
        }
    }
    else {

        line = document.createElementNS("http://www.w3.org/2000/svg","line");
        line = $j(line);
        line.attr("x1",x0)
               .attr("y1",y0)
               .attr("x2",x1)
               .attr("y2",y1)
               .attr("stroke","#000");
        g.append(line);

        if(directed == true) {

            a =-(y0-y1);
            b =(x0-x1);

            if(x1 < x0) {
                
                angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
            }else{
                angle = Math.PI/2 - Math.atan2(a,b);
            }

            arrow = document.createElementNS("http://www.w3.org/2000/svg","path");
            arrow = $j(arrow);
            arrow.attr("d","m"+ x1 +"," + y1 + " l10,-10 l-20,0 z")
                       .attr("fill",'#99bce8')
                       .attr("stroke","#000")
                       .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1) +")")
                       ;

            g.append(arrow);
        }

    }

    return g;
};
    return GraphicalViewSimpleGraph;
});
