define("Compiler",
[],
function() {
	
	function Compiler() {
		this.errors = new Array();
		
		this.listeners = new Array();
	}
		
	Compiler.prototype.addListener = function(listener) {
		this.listeners.push(listener);
	}
		
	Compiler.prototype.notifyListeners = function(event) {
		for (var i = 0; i < this.listeners.length; ++i) {
			this.listeners[i].onCompilerEvent(event);
		}
	}
	
	/**
	 * Abstract functions
	 */
	
	Compiler.prototype.compile = function(program) {
		// Needs to be overridden
	}
	
	return Compiler;
});
