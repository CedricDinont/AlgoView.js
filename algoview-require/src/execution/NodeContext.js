define("NodeContext",
[],
function() {
	function NodeContext() {	
		this.currentChild = 0;
		this.executed = false;
		this.children;
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
	
	NodeContext.prototype.addChild = function(child) {
		if (this.children == undefined) {
			this.children = new Array();
		}
		this.children.push(child);
	}
	
	return NodeContext;
});

