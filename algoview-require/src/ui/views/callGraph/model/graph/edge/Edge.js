define("Edge",
["SimpleGraph", "InvalidWeigthException"],
function(SimpleGraph, InvalidWeigthException) {
    
    var Edge = function(destNode, weight) {
        this.destNode = destNode;
        this.weight = weight;
    };


    Edge.prototype.constructor = Edge;

    /**
     * Returns the weight of the edge
     *
     * @return the weight of the edge
     */
    Edge.prototype.getWeight = function() {
        return this.weight;
    };

    /**
     * Check if the weight is valid
     * @param weight
     * @throws InvalidWeigthException if the specified weight is not a number
     */
    Edge.prototype.weightValid = function(weight) {
        if (typeof weight !== 'number' || parseInt(weight, 10) !== weight) {
            throw new InvalidWeigthException(weight);
        }
    };

    /**
     * Updates the weight of the edge
     * @param weight the new weight of the edge
     * @throws InvalidWeigthException if the specified weight is not a number
     */
    Edge.prototype.setWeight = function(weight) {
        this.weightValid(weight);
        this.weight = weight;
    };

    /**
     * Returns the reference to the destination Node of the edge
     *
     * @return destNode reference to the destination Node of the edge
     */
    Edge.prototype.getDest = function() {
        return this.destNode;
    };


    /**
     * Updates the destNode of the edge
     * @param destNode the new destination node of the edge
     * @throws InvalidReferenceException if the specified destination node is a node
     */
    Edge.prototype.setDest = function(destNode) {
        SimpleGraph.nodeValid(destNode);
        this.destNode = destNode;
    };

    return Edge;
});