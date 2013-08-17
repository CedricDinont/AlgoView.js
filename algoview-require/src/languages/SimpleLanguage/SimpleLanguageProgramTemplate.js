define("SimpleLanguageProgramTemplate",
["Program", "Source"],
function(Program, Source) {
	
	function SimpleLanguageProgramTemplate() {
		Program.call(this);
		
		var source = new Source();
		
		source.name = "program.sl";
		source.text = "/**\n\
 * Structures\n\
 **/\n\
\n\
\n\
/**\n\
 * Subprograms\n\
 **/\n\
\n\
\n\
/**\n\
 * Entry point\n\
 **/\n\
PROCEDURE main()\n\
VAR\n\
\t\n\
BEGIN\n\
	PRINTLN(\"Hello, world!\")\n\
END\n\
";
		source.addBreakpoint(17);
	
		this.addSource(source);
	}
	
	// Prototype based inheritance
	SimpleLanguageProgramTemplate.prototype = new Program();
	SimpleLanguageProgramTemplate.prototype.constructor = SimpleLanguageProgramTemplate;
	
	return SimpleLanguageProgramTemplate;
});
