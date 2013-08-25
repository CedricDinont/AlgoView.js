define("NodeContext",
[],
function() {
	
	function NodeContext() {	
		this.currentChild = 0;
		this.executed = false;
		this.programNode = undefined;
	}

	NodeContext.prototype.setExecuted = function(executed) {
		this.executed = executed;
	}

	NodeContext.prototype.isExecuted = function() {
		return this.executed;
	}
	
	NodeContext.prototype.setProgramNode = function(programNode) {
		this.programNode = programNode;
	}

	return NodeContext;
});

