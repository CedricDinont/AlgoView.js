define("NodeStackElement",
["Node", "NodeContext"],
function(Node, NodeContext) {

	function NodeStackElement(programNode, contextNode) {
		this.programNode = programNode;
		this.contextNode = contextNode;
	}
	
	return NodeStackElement;
});
