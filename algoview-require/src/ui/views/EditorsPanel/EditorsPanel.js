define("EditorsPanel",
["Ext", "ExtUxAceEditorPanel", "ExtUxAceEditor"],
function(Ext, ExtUxAceEditorPanel, ExtUxAceEditor) {
	
	function EditorsPanel(algoViewApp) {
		this.app = algoViewApp;
		
		this.editors = new Array();
		
		this.programTextChanged = false;
		
		this.app.setEditorsPanel(this);
		this.app.programRunner.addListener(this);
		this.app.compiler.addListener(this);
	}
	
	EditorsPanel.prototype.setProgramTextChanged = function(value) {
		this.programTextChanged = value;
		this.updateProgramName();
	}
	
	EditorsPanel.prototype.updateProgramName = function() {
		if (this.programTextChanged) {
			
		} else {
			
		}
	}
	
	EditorsPanel.prototype.initCodeEditor = function(codeEditor) {
		var thisEditorsPanel = this;
		
		codeEditor.on("afterRender", function() {
			var thisCodeEditor = this;
			
			this.editor.getSession().on("changeBreakpoint", function() {
				var breakpoints = thisCodeEditor.editor.getSession().getBreakpoints();
				var currentBreakpoint = 0;
				var newBreakpointsArray = new Array();
				for (var i in breakpoints) {
					if (breakpoints[i] === true) {
						newBreakpointsArray[currentBreakpoint] = Number(i) + 1;
						currentBreakpoint++;
					}
				}
				thisEditorsPanel.app.programRunner.breakpoints.setBreakpoints(newBreakpointsArray);
			});
		
			this.editor.getSession().getDocument().on("change", function(e) {	
				thisEditorsPanel.setProgramTextChanged(true);
			});
		});
	}

	EditorsPanel.prototype.programChanged = function(event) {
		switch (event.type) {
			case "OUTPUT_TEXT":
				break;
			case "DONE_STEP":
				Ext.getCmp('editor-1').setCurrentLine(event.filePosition - 1);
				break;
			case "DONE_INSTRUCTION":
				Ext.getCmp('editor-1').setCurrentLine(event.filePosition - 1);
				break;
			case "STARTED_PROGRAM":
				Ext.getCmp('editor-1').editor.setReadOnly(true);
				Ext.getCmp('editor-1').initCurrentLines();
				break;
			case "STOPPED_PROGRAM":
				if (event.source.stopOnException === false) {
					Ext.getCmp('editor-1').initCurrentLines();
				}
				Ext.getCmp('editor-1').editor.setReadOnly(false);
				break;
			case "ENTERING_FUNCTION":
				Ext.getCmp('editor-1').pushCurrentLine(-1);
				break;
			case "EXITING_FUNCTION":
				Ext.getCmp('editor-1').popCurrentLine();
				break;
			case "EXCEPTION":
				// TODO: A placer ailleurs
				this.app.stopProgram(false);
				break;
		}
	}
	
	EditorsPanel.prototype.onCompilerEvent = function(event) {
		switch (event.type) {
			case "STARTED_COMPILATION":
				break;
			case "COMPILED_PROGRAM":
				Ext.getCmp('editor-1').editor.session.clearAnnotations();
				break;
			case "COMPILATION_ERROR":
			var annotations = new Array();
				for (var i = 0; i < event.errors.length; ++i) {
					var error = event.errors[i];
					if ((error.location !== undefined) && (error.location.line !== undefined)) {
						var annotation = {
							row: error.location.line - 1,
							column: 1,
							text: error.toString(),
							type: 'error',
						};
						annotations.push(annotation);
					}
				}
				Ext.getCmp('editor-1').editor.session.setAnnotations(annotations);
				break;
		}
	}
	
	EditorsPanel.prototype.createExtComponent = function() {			
		var editorsTabPanel = Ext.create("Ext.tab.Panel", {
			id: 'editorsTabPanel',
			deferredRender: false,
		});

		var editorPanel = Ext.create("Ext.ux.aceeditor.Panel", {
			id: 'editor-1',
			title: 'Program.sl',
			parser: 'simple_language',
			theme: 'algoview',
			deferredRender: false,
		});
		this.initCodeEditor(editorPanel);
		editorsTabPanel.add(editorPanel);
		
		this.editors.push(editorPanel);
			
		this.quickReferencePanel = Ext.create("Ext.ux.aceeditor.Panel", {
			id: 'quick-reference-editor',
			title: 'Quick reference',
			parser: 'simple_language',
			theme: 'algoview',
			deferredRender: false,
		});
		editorsTabPanel.add(this.quickReferencePanel);
			
		this.fillQuickReferenceEditor();
		this.loadProgramTemplate();
			
	/*	this.setShowQuickReference(this.showQuickReference);
		 */
		
		return editorsTabPanel;
	}
	
	EditorsPanel.prototype.loadProgramTemplate = function() {
		var programTemplate = this.app.languageModule.programTemplate;
		var source = programTemplate.getSources()[0];
		
		var self = this;
		Ext.getCmp("editor-1").on("afterRender", function() {
			Ext.getCmp("editor-1").setTitle(source.name);
			self.app.loadText(source.text);
			//self.app.setBreakpoint(self.app.languageModule.programTemplate.breakpointLine);
		});
	}
	
	EditorsPanel.prototype.fillQuickReferenceEditor = function() {
		var quickReference = this.app.languageModule.quickReference.text;
		Ext.getCmp("quick-reference-editor").on("afterRender", function() {
			this.getSession().getDocument().setValue(quickReference);
			this.setUseWorker(false);
			this.editor.renderer.setShowGutter(false);
			this.editor.setReadOnly(true);
		}); 
	}
	
	EditorsPanel.prototype.getCurrentEditor = function() {
		return this.editors[0];
	}
	
	/*	
	   this.resizeEditors = function(mainFrame) {
			console.log('resize');
			console.log(mainFrame);
			if (mainFrame.editors[0] != undefined) {
				mainFrame.editors[0].resize();
			}
		}

		this.showQuickReference = true;
		
		this.setShowQuickReference = function(showQuickReference) {
			if (showQuickReference != this.showQuickReference) {
				this.showQuickReference = showQuickReference;
				
				if (showQuickReference) {
					Ext.getCmp('editorsTabPanel').add(this.quickReferencePanel);
				} else {
					Ext.getCmp('editorsTabPanel').remove(this.quickReferencePanel);
				}
			}
		} */
	
	return EditorsPanel;
	
});
