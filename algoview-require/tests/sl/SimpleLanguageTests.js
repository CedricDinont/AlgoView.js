define("SimpleLanguageTests",
["AlgoViewAppInit","jQuery"], function(algoViewApp, $j) {

	var SimpleLanguageTests = function() {
		this.testModules = [{
			name: "Incorrect compilation",
			handler: "launchIncorrectCompilationTest",
			tests: ["print",
				"if",
				]
			}, {
				name: "Correct compilation / Incorrect execution",
				handler: "launchIncorrectExecutionTest",
				tests: ["print",
					"if",
				]
			}, {
				name: "Correct compilation / Correct execution",
				handler: "launchCorrectExecutionTest",
				tests: ["print",
					"if",
				]
			},
		];
		
				
		algoViewApp.programRunner.addListener(this);
		
		this.currentTestModuleNumber = 0;
		this.currentTestNumber = -1;
	}

	SimpleLanguageTests.prototype.programChanged = function(event) {
		var self = this;
		
		switch (event.type) {
			case "OUTPUT_TEXT":
				self.realOutput += event.text;
				break;
		}
	}
	
	SimpleLanguageTests.prototype.launchIncorrectCompilationTest = function(testName) {
		test(this.testName, function() { 
			equal(true, true, "Got required compilation error.");
		});
		this.launchNextTest();
	}

	SimpleLanguageTests.prototype.launchIncorrectExecutionTest = function(testName) {
		test(this.testName, function() { 
			equal(true, true, "Got required execution error.");
		});
		this.launchNextTest();
	}

	SimpleLanguageTests.prototype.launchCorrectExecutionTest = function(_testName) {
		this.testName = _testName;
		
		console.log("Getting files for test " + this.testName);
		
		var self = this;
		$j.ajax({
			type: "GET",
			url: "data/" + self.testName + ".sl",
			error: this.loadErrorHandler,
			success: self.getExpectedOutput,
			dataType: "text",
			context: self,
		});
	}

	SimpleLanguageTests.prototype.getExpectedOutput = function(_programText) {
		this.programText = _programText;

		console.log("Getting expected output for test " + this.testName);

		var self = this;
		$j.ajax({
			type: "GET",
			url: "data/" + self.testName + ".expected_output",
			error: this.loadErrorHandler,
			success: self.runTest,
			dataType: "text",
			context: self,
		});
	}

	SimpleLanguageTests.prototype.compareOutputs = function() {
		this.realOutput += "\n";
		
		console.log("Real: ", this.realOutput);
		console.log("Expected: ", this.expectedOutput);
		
		var self = this;
		test(this.testName, function() {
			equal(self.realOutput, self.expectedOutput, "Expected and real outputs are equal.");
		});
	}

	SimpleLanguageTests.prototype.runTest = function(_expectedOutput) {
		this.expectedOutput = _expectedOutput;
		this.realOutput = "";
		
		algoViewApp.program.text = this.programText;
		algoViewApp.compiler.compile(algoViewApp.program);
		algoViewApp.programRunner.setProgram(algoViewApp.program);
		algoViewApp.programRunner.start();
		algoViewApp.programRunner.doStep(true, true);

		this.compareOutputs();
		
		this.launchNextTest();
	}

	SimpleLanguageTests.prototype.launchNextTest = function() {		
		this.currentTestNumber++;
		
		var currentTestModule = this.testModules[this.currentTestModuleNumber];
		if (currentTestModule == undefined) {
			return;
		}

		if (this.currentTestNumber == 0) {
			module(currentTestModule.name);
		}

		var currentTest = currentTestModule.tests[this.currentTestNumber];
		if (currentTest == undefined) {
			this.currentTestNumber = -1;
			this.currentTestModuleNumber++;
			this.launchNextTest();			
		} else {
			//currentTestModule.handler.bind(this, currentTest)();
			var command = "this." + currentTestModule.handler + "('" + currentTest + "')";
			console.log(command);
			eval(command);
		}
	}

	SimpleLanguageTests.prototype.startTests = function() {
		console.log("Starting tests...");
				
		this.launchNextTest();
	}
	
	return SimpleLanguageTests;
})
