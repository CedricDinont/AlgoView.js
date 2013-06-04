define("NodeIterator",
["AbstractNodeIterator"],
function(AbstractNodeIterator) {

    function NodeIterator(neighborhood){
            AbstractNodeIterator.call(this);
            this.neighborhood = neighborhood;
            this.currentNodeIndex = -1;
    }

    NodeIterator.prototype = new AbstractNodeIterator();
    NodeIterator.prototype.constructor = NodeIterator;


    /**
    * Returns true if the specified iterator has some nodes left, false otherwise
    *
    * @return true if the specified iterator has some nodes left, false otherwise
    */
    NodeIterator.prototype.hasNextNode = function() {
            return (this.neighborhood[this.currentNodeIndex + 1] !== undefined);
     };


    /**
    * Moves to the next node in the specified iterator and returns a reference on it
    *
    * @return a reference on the current node in the iteration
    */
    NodeIterator.prototype.getNextNode = function() {
            return this.neighborhood[++this.currentNodeIndex];
    };


    /**
    * Reset the current index to 0
    */
    NodeIterator.prototype.reset = function() {
            this.currentNodeIndex = 0;
    };

    return NodeIterator;
});