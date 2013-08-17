define("RemoteCProgramTemplate",
["Program", "Source"],
function(Program, Source) {
	
	function RemoteCProgramTemplate() {
		Program.call(this);
		
		var source = new Source();
		
		source.name = "program.c";
		
		source.text = "#include <stdio.h>\n\
#include <stdlib.h>\n\
#include <string.h>\n\
\n\
/**\n\
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
int main() {\n\
	printf(\"Hello, world!\\n\");\n\
	return 0;\n\
}\n\
";
		source.addBreakpoint(19);
	
		this.addSource(source);
	}
	
	// Prototype based inheritance
	RemoteCProgramTemplate.prototype = new Program();
	RemoteCProgramTemplate.prototype.constructor = RemoteCProgramTemplate;
	
	return RemoteCProgramTemplate;
});
