define("GraphicalViewNode",
["SimpleGraphNode"],
function(Node){

    function GraphicalViewNode(id){
	Node.call(this, id);
        this.depth = undefined;
	this.positionInDepth = undefined;
	this.positionX = undefined;
	this.positionY = undefined;
}

GraphicalViewNode.prototype = new Node();
GraphicalViewNode.prototype.constructor = GraphicalViewNode;

GraphicalViewNode.prototype.addReferenceNode = function(node){
  	this.id = node.id;
  	this.value = node.value;
  	this.degree = node.degree;
	this.edges = node.edges;  
};

/**
 * @param depth of the node to set
 * Set the depth of the node
 */
GraphicalViewNode.prototype.setDepth = function(depth){
	this.depth = depth;
};

/**
 * Returns the depth of the node
 *
 * @return the depth of the node
 */
GraphicalViewNode.prototype.getDepth = function() {
	return this.depth;
};

/**
 * @param position in the depth
 * Set position of the depth of the node
 */
GraphicalViewNode.prototype.setPositionInDepth = function(positionInDepth){
	this.positionInDepth = positionInDepth;
};

/**
 * @param X position
 * Set the X position of the node
 */
GraphicalViewNode.prototype.setPositionX = function(positionX){
	this.positionX = positionX;
};

/**
 * Returns the x position of the node
 *
 * @return the x position of the node
 */
GraphicalViewNode.prototype.getPositionX = function() {
	return this.positionX;
};

/**
 * @param Y position
 * Set the Y position of the node
 */
GraphicalViewNode.prototype.setPositionY = function(positionY){
	this.positionY = positionY;
};

/**
 * Returns the y position of the node
 *
 * @return the y position of the node
 */
GraphicalViewNode.prototype.getPositionY = function() {
	return this.positionY;
};

//
///**
// * Returns the width of the node
// *
// * @return the width of the node
// */
//GraphicalViewNode.prototype.getWidth = function() {
//	return this.width;
//};
//
///**
// * @param width of the node to set
// * Set the width of the node
// */
//GraphicalViewNode.prototype.setWidth = function(width) {
//	return this.width = width;
//};
//
///**
// * Returns the height of the node
// *
// * @return the height of the node
// */
//GraphicalViewNode.prototype.getHeight = function() {
//	return this.height;
//};
//
///**
// * @param height of the node to set
// * Set the height of the node
// */
//GraphicalViewNode.prototype.setHeight = function(height) {
//	return this.height = height;
//};

 return GraphicalViewNode;
});