define("SimpleGraphNode",
["AbstractNode", "NodeIterator"],
function(AbstractNode, NodeIterator) {

    var Node = function(id){
            AbstractNode.call(this);
            this.id = id;
            this.value = undefined;
            this.degree = 0;
            this.edges = {};
    };

    Node.prototype = new AbstractNode();
    Node.prototype.constructor = Node;

    /**
     * Returns the id of the node
     *
     * @return the id of the node
     */
    Node.prototype.getId = function() {
            return this.id;
    };


    /**
     * Returns the degree of the node
     *
     * @return the degree of the node
     */
    Node.prototype.getDegree = function() {
            return this.degree;
    };

    /**
     * increments the node degree
     */
    Node.prototype.incDegree = function() {
            ++this.degree;
    };

    /**
     * decrements the node degree
     */
    Node.prototype.decDegree = function() {
            --this.degree;
    };


    /**
     * Returns the value of the node
     *
     * @return the value of the node
     */
    Node.prototype.getValue = function() {
            return this.value;
    };


    /**
     * Updates the value of the node
     * @param value the new value for the node
     */
    Node.prototype.setValue = function(value) {
            this.value = value;
    };


    /**
     * Returns an iterator on the neighborhood of the node
     * @return an iterator on the neighborhood of the node (a reference on a NodeIterator instance)
     */
    Node.prototype.getNeighbors = function() {
            var i = 0;
            var neighborhood = [];

            // Browse edges stocked in the node
            var edgesKeys = Object.keys(this.edges);
            var nbEdges = edgesKeys.length;
            for (i = 0; i < nbEdges; i++) {
                    neighborhood[i] = this.edges[edgesKeys[i]].getDest();
            }

            return new NodeIterator(neighborhood);
    };
    return Node;
}
);