define("SimpleLanguageProgram",
["Program"],
function() {

	function SimpleLanguageProgram() {
		Program.call(this);
	}
	
	// Prototype based inheritance
	SimpleLanguageProgram.prototype = new Program();
	SimpleLanguageProgram.prototype.constructor = SimpleLanguageProgram;
	
	return SimpleLanguageProgram;

});
