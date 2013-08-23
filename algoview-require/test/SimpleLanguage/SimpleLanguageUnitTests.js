define("SimpleLanguageUnitTests",
[], function() {

	return [{
			name: "Incorrect compilation",
			handler: "launchIncorrectCompilationTest",
			sourcesPrefix: 'data/IncorrectCompilation',
			tests: [{
					name: "No main function",
					sources: "NoMainFunction",
					expectedCompilationErrors: [
						"NoMainFunctionError"
					]
				}]
			}, {
				name: "Correct compilation / Incorrect execution",
				handler: "launchIncorrectExecutionTest",
				sourcesPrefix: 'data/CorrectCompilation/IncorrectExecution',
				tests: [{
						name: "Try to dereference NULL pointer",
						sources: "TryToDereferenceNullPointer",
						expectedExecutionErrors: [
							"TryToDereferenceNullPointer"
						]
				}]
			}, {
				name: "Correct compilation / Correct execution",
				handler: "launchCorrectExecutionTest",
				sourcesPrefix: 'data/CorrectCompilation/CorrectExecution',
				tests: [{
					name: "print",
					sources: "print",
				}, {
					name: "if",
					sources: "if",
				}]
			},
		];
		
});
