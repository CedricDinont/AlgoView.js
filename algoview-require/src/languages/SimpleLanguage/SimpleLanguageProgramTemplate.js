define("SimpleLanguageProgramTemplate",
[],
function() {
	
	function SimpleLanguageProgramTemplate() {
		this.text = "/**\n\
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

		this.breakpointLine = 17;
	}
	
	return SimpleLanguageProgramTemplate;
	
});



