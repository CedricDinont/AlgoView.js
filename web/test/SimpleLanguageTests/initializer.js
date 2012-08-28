var tests = [
	"print",
	"if",
];

var algoViewApp;
var $j;

var testName;
var programText;
var expectedOutput;
var realOutput;

AlgoViewConsoleApp = function() {
	this.program = new Program();
	this.programRunner = new ProgramRunner(this.program);
	
	this.programRunner.addListener(this);
	
	this.programChanged = function(event) {
		switch (event.type) {
			case "OUTPUT_TEXT":
				realOutput += event.text;
				break;
		}
	}
}

launchTest = function(_testName) {
	testName = _testName;
	
	console.log("Getting files for test " + testName);
	$j.ajax({
   		type: "GET",
		url: "tests/" + testName + ".sl",
		error: this.loadErrorHandler,
		success: getExpectedOutput,
		dataType: "text",
	});
}

getExpectedOutput = function(_programText) {
	programText = _programText;
	
	$j.ajax({
   		type: "GET",
		url: "tests/" + testName + ".expected_output",
		error: this.loadErrorHandler,
		success: runTest,
		dataType: "text",
	});
}

compareOutputs = function() {
	realOutput += "\n";
	test(testName, function() {
		equal(realOutput, expectedOutput, "Expected and real outputs are equal.");
	});
}

runTest = function(_expectedOutput) {
	expectedOutput = _expectedOutput;
	realOutput = "";
	
	algoViewApp.programRunner.program.text = programText;
	algoViewApp.programRunner.compile();
	algoViewApp.programRunner.start();
	algoViewApp.programRunner.doStep(true, true);

	compareOutputs();
	
	launchNextTest();
}

launchNextTest = function() {
	if (tests[0] !== undefined) {
		var test = tests.shift();
		launchTest(test);
	}
}

window.onload = function () {
	$j = jQuery.noConflict();
	
	algoViewApp = new AlgoViewConsoleApp();
	
	module("Incorrect compilation");
	
	module("Correct compilation / Incorrect execution");
	
	module("Correct compilation / Correct execution");
	launchNextTest();
}

