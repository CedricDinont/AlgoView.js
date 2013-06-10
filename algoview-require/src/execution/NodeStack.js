define("NodeStack",
[],
function() {
	
var NodeStack = function() {
	this.nodes = new Array();
}

NodeStack.prototype.peek = function() {
	return this.nodes[this.nodes.length - 1];
}

NodeStack.prototype.push = function(node) {
	this.nodes.push(node);
}

NodeStack.prototype.pop = function() {
	var node = this.nodes.pop();
	node.setExecuted(true);
	return node;
}

NodeStack.prototype.isEmpty = function() {
	return (this.nodes.length == 0);
}

NodeStack.prototype.level = function() {
	return (this.nodes.length);
}

NodeStack.prototype.getItem = function(level) {
	return (this.nodes[level]);
}

NodeStack.prototype.print = function() {
	console.log("Stack");
	for (var i = 0; i < this.nodes.length; ++i) {
		console.log(this.nodes[i], this.nodes[i].currentChild);
	}
	console.log("-----------");
}

	return NodeStack;
});
