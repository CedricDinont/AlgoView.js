define("SimpleGraph",
["AbstractSimpleGraph", "SimpleGraphNode", "Edge", "AlreadyExistingEdgeException", "AlreadyExistingNodeException", "InvalidIdException", "InvalidReferenceException", "UnexistingNodeException", "UnexistingEdgeException"],
function(AbstractSimpleGraph, Node, Edge, AlreadyExistingEdgeException, AlreadyExistingNodeException, InvalidIdException, InvalidReferenceException, UnexistingNodeException, UnexistingEdgeException) {  

SimpleGraph = function(directed) {

    AbstractSimpleGraph.call(this, directed);
    this.nodes = {};

    if (typeof SimpleGraph.id === undefined) {
        SimpleGraph.id = 0;
    }
    ++SimpleGraph.id;
};

SimpleGraph.prototype = new AbstractSimpleGraph();
SimpleGraph.prototype.constructor = SimpleGraph;

/********************** GRAPH OPERATIONS ************************************************/


/**
 * Take an already created graph and create references of all SimpleGraph attributes
 * @param SimpleGraph
 *
 * @return the order of the graph
 */
SimpleGraph.prototype.addReferenceSimpleGraph = function(graph) {
    this.nodes = graph.nodes;
    this.id = graph.id;
};

/**
 * Returns the order of the graph
 *
 * @return the order of the graph
 */
SimpleGraph.prototype.getOrder = function() {
    return Object.keys(this.nodes).length;
};

/**
 * Returns true if the graph is directed, false otherwise
 *
 * @return true if the graph is directed, false otherwise
 */
SimpleGraph.prototype.isDirected = function() {
    return this.directed;
};



/********************** NODES OPERATIONS ************************************************/

/***** Node verifications function ******/

/**
 * Check if the id is valid
 *
 * @param id the identifier of the node (strictly positive integer)
 * @throws InvalidIdException if the specified id is not valid (wrong type, <= 0, ...)
 */
SimpleGraph.prototype.isValidId = function(id) {
    if (typeof id !== 'number' || parseInt(id, 10) !== id || id <= 0) {
        throw new InvalidIdException(id);
    }
};

/**
 * Check if the node is a valid Node
 * @param the node
 * @throws InvalidReferenceException if the node is not valid
 */

SimpleGraph.prototype.nodeValid = function(node) {
    if (!(node instanceof Node)) {
        throw new InvalidReferenceException();
    }
};

/**
 * Check if the node already exist in the graph
 * @param id of the node to check
 * @throws AlreadyExistingNodeException if the node already exist
 */

SimpleGraph.prototype.nodeAlreadyExist = function(id) {
    if (this.nodes[this.nodeKey(id)] !== undefined) {
        throw new AlreadyExistingNodeException(id);
    }
};

/**
 * Check if the node don't exist
 * @param the node
 * @throws UnexistingNodeException if the reference is valid but the corresponding node does not exist
 */
SimpleGraph.prototype.nodeDontExist = function(node) {
    if (this.nodes[this.nodeKey(node.getId())] === undefined || this.nodes[this.nodeKey(node.getId())] !== node) {
        throw new UnexistingNodeException(node);
    }
};

/********* Node functions *************/

/**
 * Adds a node in the graph with the specified identifier and an undefined value
 *
 * @param id the identifier of the node (strictly positive integer)
 * @throws InvalidIdException if the specified id is not valid (wrong type, <= 0, ...)
 * @throws AlreadyExistingNodeException if a node with the speficied id already exists
 * @return a reference on the new node
 */
SimpleGraph.prototype.addNode = function(id) {

    this.isValidId(id);
    this.nodeAlreadyExist(id);

    this.nodes[this.nodeKey(id)] = new Node(id);

    return this.nodes[this.nodeKey(id)];
};

/**
 * Adds a node in the graph with the specified identifier and value
 *
 * @param id the identifier of the node (strictly positive integer)
 * @param value the value of the node
 * @throws InvalidIdException if the specified id is not valid (wrong type, <= 0, ...)
 * @throws AlreadyExistingNodeException if a node with the speficied id already exists
 * @return a reference on the new node
 */
SimpleGraph.prototype.addValuedNode = function(id, value) {

    this.addNode(id);
    this.getNode(id).setValue(value);

    return this.nodes[this.nodeKey(id)];
};


/**
 * Searchs for a node by its identifier in the graph
 *
 * @return a reference on the searched node (Node instance)
 */
SimpleGraph.prototype.getNode = function(id) {
    this.isValidId(id);
    return this.nodes[this.nodeKey(id)];
};


/**
 * Removes the specified node in the graph
 *
 * @param node a reference on a node of the graph (AbstractNode instance)
 * @throws InvalidReferenceException if the specified reference is not valid (wrong type, undefined, null, ...)
 * @throws UnexistingNodeException if the reference is valid but the corresponding node does not exist
 */
SimpleGraph.prototype.removeNode = function(node) {

	this.nodeValid(node);
	this.nodeDontExist(node);
	var i = 0;

	if(this.isDirected()){
		//Need to search in all nodes where there is an edge pointed to this node
		var order = this.getOrder();
		var nodesKeys = Object.keys(this.nodes);
		for (i; i < order; i++) {
			var currentNode = this.nodes[nodesKeys[i]];
			if(currentNode !== node) { //If is not the current node to delete
				if(this.edgeExist(currentNode, node)) {
					this.removeEdge(currentNode,node);
				}
			}
		}
	} else{ // Not directed
		var nodeDegree = node.getDegree();
		var nodeEdges = Object.keys(node.edges);
		for(i = 0; i < nodeDegree; i++){
			var currentDestNode = node.edges[nodeEdges[i]].getDest();
			this.removeEdge(node, currentDestNode);
		}
	}

	//Remove the node
	delete this.nodes[this.nodeKey(node.getId())];
};


/**
 * Reset the value of all nodes in the graph
 *
 * @param value the new value for all nodes
 */
SimpleGraph.prototype.resetNodesValue = function(value) {
    var size = this.getOrder();

    var nodesKeys = Object.keys(this.nodes);
    for (var i = 0; i < size; i++) {
        this.nodeValid(this.nodes[nodesKeys[i]]);
        this.nodes[nodesKeys[i]].setValue(value);
    }

};


/**
 * Creates the string corresponding to the key of nodes
 *
 * @param id of a nodd
 * @return a string
 */
SimpleGraph.prototype.nodeKey = function(nodeId) {
    return 'node-' + nodeId;
};







/********************** EDGES OPERATIONS ************************************************/

/***** Edge verifications function ******/

/**
 * Check is edge already exist
 *
 * @param sourceNode a reference on the source node (AbstractNode instance)
 * @param destNode a reference on the destination node (AbstractNode instance)
 * @throws InvalidReferenceException if the specified reference is not valid (wrong type, undefined, null, ...) in getEdge
 * @throws UnexistingNodeException if the references are valid but one of the corresponding nodes does not exist in getEdge
 * @throws AlreadyExistingEdgeException if the specified edge already exists
 */
SimpleGraph.prototype.edgeAlreadyExist = function(sourceNode, destNode) {
    if (this.getEdge(sourceNode, destNode) instanceof Edge) {
        throw new AlreadyExistingEdgeException();
    }
};

/**
 * Check is edge exist
 *
 * @param sourceNode a reference on the source node (AbstractNode instance)
 * @param destNode a reference on the destination node (AbstractNode instance)
 * @throws InvalidReferenceException if the specified reference is not valid (wrong type, undefined, null, ...) in getEdge
 * @throws UnexistingNodeException if the references are valid but one of the corresponding nodes does not exist (in getEdge)
 * @throws UnexistingEdgeException if the references are valid, the corresponding nodes exists, but the corresponding edge does not exist
 */
SimpleGraph.prototype.edgeDontExist = function(sourceNode, destNode) {
    if (!(this.getEdge(sourceNode, destNode) instanceof Edge)) {
        throw new UnexistingEdgeException();
    }
};

/**
 * Check is edge already exist and return a boolean (needed in removeNode)
 *
 * @param sourceNode a reference on the source node (AbstractNode instance)
 * @param destNode a reference on the destination node (AbstractNode instance)
 * @throws InvalidReferenceException if the specified reference is not valid (wrong type, undefined, null, ...) in getEdge
 * @throws UnexistingNodeException if the references are valid but one of the corresponding nodes does not exist (in getEdge)
 * @throws AlreadyExistingEdgeException if the specified edge already exists
 * @return true if Edge exists false otherwise
 */
SimpleGraph.prototype.edgeExist = function(sourceNode, destNode) {
    return (this.getEdge(sourceNode, destNode) instanceof Edge);
};

/*********** Edge functions *************/

/**
 * get the edge from two nodes
 *
 * @param sourceNode a reference on the source node (AbstractNode instance)
 * @param destNode a reference on the destination node (AbstractNode instance)
 * @throws InvalidReferenceException if the specified reference is not valid (wrong type, undefined, null, ...) in nodeValid
 * @throws UnexistingNodeException if the references are valid but one of the corresponding nodes does not exist (in nodeDontExist)
 * @return the edge
 */
SimpleGraph.prototype.getEdge = function(sourceNode, destNode) {

    this.nodeValid(sourceNode);
    this.nodeValid(destNode);

    this.nodeDontExist(sourceNode);
    this.nodeDontExist(destNode);

    var sourceNodeId = sourceNode.getId();
    var destNodeId = destNode.getId();

    return sourceNode.edges[this.edgeKey(sourceNodeId, destNodeId)];

};


/**
 * Adds an edge between two nodes in the graph with an undefined weight (un update degree)
 *
 * @param sourceNode a reference on the source node (AbstractNode instance)
 * @param destNode a reference on the destination node (AbstractNode instance)
 * @throws InvalidReferenceException if the specified reference is not valid (wrong type, undefined, null, ...) (in edgeAlreadyExist in getEdge)
 * @throws UnexistingNodeException if the references are valid but one of the corresponding nodes does not exist
 * @throws AlreadyExistingEdgeException if the specified edge already exists
 */
SimpleGraph.prototype.addEdge = function(sourceNode, destNode) {
    this.edgeAlreadyExist(sourceNode, destNode);
    var sourceNodeId = sourceNode.getId();
    var destNodeId = destNode.getId();

    if (!this.isDirected() && sourceNodeId !== destNodeId) {
        this.edgeAlreadyExist(destNode, sourceNode);
        destNode.edges[this.edgeKey(destNodeId, sourceNodeId)] = new Edge(sourceNode, undefined);
        destNode.incDegree();
    }
    sourceNode.edges[this.edgeKey(sourceNodeId, destNodeId)] = new Edge(destNode, undefined);
    sourceNode.incDegree();
};

/**
 * Adds an edge between two nodes in the graph with a specified weight
 *
 * @param sourceNode a reference on the source node (AbstractNode instance)
 * @param destNode a reference on the destination node (AbstractNode instance)
 * @param weight the weight of the edge
 * @throws InvalidReferenceException if the specified reference is not valid (wrong type, undefined, null, ...)
 * @throws UnexistingNodeException if the references are valid but one of the corresponding nodes does not exist
 * @throws AlreadyExistingEdgeException if the specified edge already exists
 */
SimpleGraph.prototype.addWeightedEdge = function(sourceNode, destNode, weight) {
    this.addEdge(sourceNode, destNode); // Adds both dest->source & source->dest edge with not directed graph
    this.getEdge(sourceNode, destNode).setWeight(weight);
    if (!this.isDirected() && sourceNode !== destNode) {
        this.getEdge(destNode, sourceNode).setWeight(weight);
    }
};



/**
 * Returns the weight of the edge between two nodes in the graph
 *
 * @param sourceNode a reference on the source node (AbstractNode instance)
 * @param destNode a reference on the destination node (AbstractNode instance)
 * @return the weight of the specified edge
 * @throws InvalidReferenceException if the specified reference is not valid (wrong type, undefined, null, ...)
 * @throws UnexistingNodeException if the references are valid but one of the corresponding nodes does not exist
 * @throws UnexistingEdgeException if the references are valid, the corresponding nodes exists, but the corresponding edge does not exist
 */
SimpleGraph.prototype.getEdgeWeight = function(sourceNode, destNode) {
    this.edgeDontExist(sourceNode, destNode);
    return this.getEdge(sourceNode, destNode).getWeight();
};


/**
 * Updates the weight of the edge between nodes two nodes in the graph
 *
 * @param sourceNode a reference on the source node (AbstractNode instance)
 * @param destNode a reference on the destination node (AbstractNode instance)
 * @param weight the new weight for the specified edge
 * @throws InvalidReferenceException if the specified reference is not valid (wrong type, undefined, null, ...)
 * @throws UnexistingNodeException if the references are valid but one of the corresponding nodes does not exist
 * @throws UnexistingEdgeException if the references are valid, the corresponding nodes exists, but the corresponding edge does not exist
 
 */
SimpleGraph.prototype.setEdgeWeight = function(sourceNode, destNode, weight) {
    this.edgeDontExist(sourceNode, destNode);
    this.getEdge(sourceNode, destNode).setWeight(weight);
    if (!this.isDirected() && sourceNode !== destNode) {
        this.edgeDontExist(destNode, sourceNode);
        this.getEdge(destNode, sourceNode).setWeight(weight);
    }
};


/**
 * Removes the edge between two nodes in the graph
 *
 * @param sourceNode a reference on the source node (AbstractNode instance)
 * @param destNode a reference on the destination node (AbstractNode instance)
 * @throws InvalidReferenceException if the specified reference is not valid (wrong type, undefined, null, ...)
 * @throws UnexistingNodeException if the references are valid but one of the corresponding nodes does not exist (in edgeDontExist in getEdge)
 * @throws UnexistingEdgeException if the references are valid, the corresponding nodes exists, but the corresponding edge does not exist
 
 */
SimpleGraph.prototype.removeEdge = function(sourceNode, destNode) {
    this.edgeDontExist(sourceNode, destNode);

    var sourceNodeId = sourceNode.getId();
    var destNodeId = destNode.getId();

    delete sourceNode.edges[this.edgeKey(sourceNodeId, destNodeId)];
    sourceNode.decDegree();

    if (!this.isDirected() && sourceNodeId !== destNodeId) {
        //this.edgeDontExist(destNode, sourceNode); // Not necessary if the graph is well created
        delete destNode.edges[this.edgeKey(destNodeId, sourceNodeId)];
        destNode.decDegree();
    }
};



/**
 * Reset the weight of all edges in the graph
 *
 * @param value the new weight for all edges
 */
SimpleGraph.prototype.resetEdgesWeight = function(weight) {
    var order = this.getOrder();

    var i = 0;
    var nodesKeys = Object.keys(this.nodes);
    for (i; i < order; i++) {
        var currentNode = this.nodes[nodesKeys[i]];
        var edgesLength = Object.keys(currentNode.edges).length;
        var j = 0;
        var currentNodeEdgesKeys = Object.keys(currentNode.edges);
        for (j; j < edgesLength; j++) {
            currentNode.edges[currentNodeEdgesKeys[j]].setWeight(weight);
        }
    }
};

/**
 * Creates the string corresponding to the key of edges
 *
 * @param id of the source node
 * @param id of the destination node
 * @return a string
 */

SimpleGraph.prototype.edgeKey = function(sourceNodeId, destNodeId){
	return 'edge-'+sourceNodeId+'-'+destNodeId;
};

return SimpleGraph;

});