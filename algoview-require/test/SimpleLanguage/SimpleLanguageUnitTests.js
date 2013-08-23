define("SimpleLanguageUnitTests",
[], function() {

	return [
			// Suite de tests pour les erreurs de compilation
			{
			name: "Incorrect compilation",
			handler: "launchIncorrectCompilationTest",
			sourcesPrefix: 'data/IncorrectCompilation',
			tests: [{
					name: "No main function",
					sources: "NoMainFunction",
					expectedCompilationErrors: [
						"NoMainFunctionError"
					]
				}, {
					name: "Undefined function",
					sources: "UndefinedFunction",
					expectedCompilationErrors: [
						"UndefinedFunctionError"
					]
				}, {
					name: "Undefined structure",
					sources: "UndefinedStructure",
					expectedCompilationErrors: [
						"UndefinedStructureError"
					]
				}]
			},
			
			// Suite de tests pour les erreurs d'exécution
			 {
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
			},
			
			// Suite de tests pour les exécutions sans problème
			{
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
