define("AssignableNodeContext",
["ExpressionNodeContext"],
function(ExpressionNodeContext) {
	
	function AssignableNodeContext() {	
		this.address;
		this.dataType;
	}
	
	// prototype based inheritance
	AssignableNodeContext.prototype = new ExpressionNodeContext();
	AssignableNodeContext.prototype.constructor = AssignableNodeContext;

	AssignableNodeContext.prototype.getAddress = function() {
		return this.address;
	}

	AssignableNodeContext.prototype.setAddress = function(address) {
		this.address = address;
	}

	AssignableNodeContext.prototype.getDataType = function() {
		return this.dataType;
	}

	AssignableNodeContext.prototype.setDataType = function(dataType) {
		this.dataType = dataType;
	}

	return AssignableNodeContext;
});

