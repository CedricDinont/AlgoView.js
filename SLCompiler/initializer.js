
var programRunner = new ProgramRunner( new Program() );


buildProgramTree = function (programName) {
	$j = jQuery.noConflict();
	
	//algoViewApp = new AlgoViewConsoleApp();
	
	readFile(programName);
}


readFile = function(fileName) {
	
	console.log("Getting file " + fileName);
	$j.ajax({
   		type: "GET",
		url: "samples/" + fileName + ".sl",
		error: this.loadErrorHandler,
		success: compileProgram,
		dataType: "text",
	});
}

compileProgram = function(_programText) {

	console.log("Compiling program");	
	programRunner.program.text = _programText;
	programRunner.compile();
	AlgoUtils.printTreeByLevel( programRunner.getProgramTree() );


}


buildProgramTree("if");




