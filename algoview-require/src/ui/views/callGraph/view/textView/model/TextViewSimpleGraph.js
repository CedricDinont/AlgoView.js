define("TextViewSimpleGraph",
["SimpleGraph", "TextView", "TextViewListenerHandler", "OpenNodeEvent", "CloseNodeEvent", "InvalidStatusException", "jQuery"],
function(SimpleGraph, TextView, TextViewListenerHandler, OpenNodeEvent, CloseNodeEvent, InvalidStatusException, $j) {

    TextViewSimpleGraph = function(directed, containerId) {  // MSO : retiré argument view (inutilisé)
        SimpleGraph.call(this, directed);
        this.view = new TextView(containerId);
        this.listenerHandler = new TextViewListenerHandler(this);
    };

    TextViewSimpleGraph.prototype = new SimpleGraph();
    TextViewSimpleGraph.prototype.constructor = TextView;

    /**
     * Tells the view what to open the node
     * @param nodeId id of the node
     * @param status to set the node
     *
     */
    TextViewSimpleGraph.prototype.setNodeStatus = function(nodeId, status) {
        if(status !== "open" && status !== "closed"){
            throw new InvalidStatusException(status);
        }
        var node = this.getNode(nodeId);
        node.status = status;
    };

    /**
     * get the status of the node
     * @param nodeId id of the node
     *
     *@return the node status
     */
    TextViewSimpleGraph.prototype.getNodeStatus = function(nodeId) {
        var node = this.getNode(nodeId);
        return node.status;
    };

    /**
     * simpler function that get the node status to know if it's open
     * @param nodeId id of the node
     *
     *@return the node status
     */
    TextViewSimpleGraph.prototype.isNodeOpen = function(nodeId) {
        return this.getNodeStatus(nodeId) === 'open';
    };

    /**
     * simpler function set the node to close
     * @param nodeId id of the node
     *
     */
    TextViewSimpleGraph.prototype.closeNode = function(nodeId) {
        this.setNodeStatus(nodeId, 'closed');
    };

    /**
     * set the node to open and tell the view to open it in the DOM
     * @param nodeId id of the node
     * @param nodeDOM the corresponding node in the DOM
     *
     */
    TextViewSimpleGraph.prototype.openNode = function(nodeDOM, nodeId) {
        this.setNodeStatus(nodeId, 'open');
        var node = this.getNode(nodeId);
        if (Object.keys(node.edges).length > 0) {
            // create edges html list
            var edgesHtml = this.createNodeEdgesHtml(nodeId);
            // Add the list to the DOM (in the node)
            this.view.refresh(new OpenNodeEvent(this, {'nodeDOM': nodeDOM, 'edgesHtml': edgesHtml}));
        }
    };

    /**
     * set the node to close and tell the view to close it in the DOM
     * @param nodeId id of the node
     * @param nodeDOM the corresponding node in the DOM
     *
     */
    TextViewSimpleGraph.prototype.closeNode = function(nodeDOM, nodeId) {
        this.setNodeStatus(nodeId, 'closed');
        var node = this.getNode(nodeId);
        this.view.refresh(new CloseNodeEvent(this, {'nodeId': nodeId, 'nodeDOM': nodeDOM}));

    };


    /**
     * browse the whole graph and create HTML elements of the textView
     * @return string of the html graph
     */
    TextViewSimpleGraph.prototype.createAllNodesHtml = function() {

        var htmlGraph = $j('<div>');
        htmlGraph.attr('id', 'graph');
        var nodes = Object.keys(this.nodes);
        var nbNodes = nodes.length;
        if (nbNodes > 0) {
            var nodesUl = $j('<ul>');
            for (var i = 0; i < nbNodes; i++) {
                var currentNode = this.nodes[nodes[i]];
                currentNode.status = 'closed';
                // Create current node html

                var htmlCurrentNode = this.createNode(currentNode);
                // this.addNodeClickEvent(htmlCurrentNode, currentNode.getId());
                nodesUl.append(htmlCurrentNode);
                // Appends current node to htmlGraph :
                htmlGraph.append(htmlCurrentNode);
            }
            htmlGraph.click({self: this.listenerHandler}, this.listenerHandler.OnGraphClick);
        } else {
            htmlGraph.html("<p>Empty graph</p>");
        }
        return htmlGraph;
    };

    /**
     * browse all neighbors of a node and create the html representation of them
     * @param nodeId the id of the node
     * @return string of the html representation of the edges
     */
    TextViewSimpleGraph.prototype.createNodeEdgesHtml = function(nodeId) {
        // Browse all edges of current node
        j = 0;
        var node = this.getNode(nodeId);
        var edges = Object.keys(node.edges);
        var nbEdges = edges.length;
        if (nbEdges > 0) {
            edgesUl = $j('<ul>').attr('class', 'node-edges-' + nodeId);
            for (var j = 0; j < nbEdges; j++) {
                var currentEdge = node.edges[edges[j]];
                var htmlCurrentEdge = this.createEdge(edges[j], currentEdge);
                // Add htmlCurrentEdge to htmlCurrentNode
                edgesUl.append(htmlCurrentEdge);
            }
        }

        return edgesUl;
    };

    // ------- Graph elements html creation ---------

    /**
     * create HTML representation of a node
     * @param node the node to prepresent
     * @return string of the html representation of the node
     */
    TextViewSimpleGraph.prototype.createNode = function(node) {
        var nodeLi = $j('<li>').html('Node id : ' + node.getId())
                .attr('id', "node-" + node.getId());
        nodeLi.attr('class', 'closed');
        var nbEdges = Object.keys(node.edges).length;
        if(nbEdges === 1){
            nodeLi.append($j('<span>').html('(' + nbEdges + ' neighbor)').attr('class', 'node-neighbors'));
        } else {
            nodeLi.append($j('<span>').html('(' + nbEdges + ' neighbors)').attr('class', 'node-neighbors'));
        }
        if (node.getValue() !== undefined) {
            nodeLi.append($j('<span>').html(node.getValue()).attr('class', 'node-value'));
        } else {
            nodeLi.append($j('<span>').html("Empty node").attr('class', 'node-value'));
        }

        return nodeLi;
    };


    /**
     * create HTML representation of a node
     * @param node the node to prepresent
     * @return string of the html representation of the node
     */
    TextViewSimpleGraph.prototype.createEdge = function(id, edge) {
        var nodeSourceId = this.getSourceId(id);
        var nodeDestId = this.getDestId(id);
        var li = $j('<li>').append($('<a>').html("Edge : " + nodeSourceId + "->" + nodeDestId)
                .attr('href', "#node-" + nodeDestId))
                .attr('id', 'edge-' + nodeSourceId + "-" + nodeDestId);
        li.after($j('<br>'));
        return li;
    };

    TextViewSimpleGraph.prototype.getDestId = function(Idstring) {
        return Idstring.split("-")[2];
    };

    TextViewSimpleGraph.prototype.getSourceId = function(Idstring) {
        return Idstring.split("-")[1];
    };

    return TextViewSimpleGraph;

});
