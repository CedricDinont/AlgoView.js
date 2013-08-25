define("Compiler",
["JSUtils"],
function(JSUtils) {
	
	function Compiler() {
		this.errors;
		
		this.listeners = new Array();
	}
		
	Compiler.prototype.addListener = function(listener) {
		this.listeners.push(listener);
	}
	
	Compiler.prototype.removeListener = function(listener) {
		JSUtils.removeElementsFromArray(this.listeners, listener);
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
		if (DEBUG) {
			console.log("Compiler.compile() needs to be overridden.");
		}
	}
	
	return Compiler;
});
