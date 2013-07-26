define("MainFrame",
["Ext", "JSUtils", "MemoryGraphicalView", "StackTableView", 
"HeapTableView", "ProgramTreeView", "ExtUxAceEditor", 
"ExtUxAceEditorPanel", "Exception", "jQuery", "ToolBar"],
function(Ext, JSUtils, MemoryGraphicalView, StackTableView, 
HeapTableView, ProgramTreeView, ExtUxAceEditor, 
ExtUxAceEditorPanel, Exception, $j, ToolBar) {

	var MainFrame = function(algoViewApp, layoutName) {
		this.app = algoViewApp;
		this.viewport;
		
		this.toolBar = new ToolBar();
		
		this.heapTableView;
		this.stackTableView;
		this.memoryGraphicalView;

		this.editors = new Array();

		this.layouts = new Array();
		
		// TODO: A placer ailleurs
		this.programTextChanged = false;
		this.leaveWithoutConfirmation = JSUtils.getUrlVar("leaveWithoutConfirmation");
		
		this.showQuickReference = true;
		this.quickReferencePanel;
		
		this.layouts["complete"] = {
			editorsContainer: 'west',
			graphicalViewContainer: 'center',
			tableViewsContainer: 'east',
		};
		
		this.layouts["only-graphical-view"] = {
			editorsContainer: 'west',
			graphicalViewContainer: 'center',
			east: false,
		};
		
		this.layouts["only-tables-view"] = {
			west: false,
			editorsContainer: 'center',
			tableViewsContainer: 'east',
		};
		
		this.layouts["only-stack-table-view"] = {
			west: false,
			editorsContainer: 'center',
			tableViewsContainer: 'east',
			tableHeapView: false,
		};
		
		this.layouts["graphical-view-stack-table-view"] = {
			editorsContainer: 'west',
			graphicalViewContainer: 'center',
			tableViewsContainer: 'east',
			tableHeapView: false,
		};
		
		
		var self = this;

		this.resizeEditors = function(mainFrame) {
			console.log('resize');
			console.log(mainFrame);
			if (mainFrame.editors[0] != undefined) {
				mainFrame.editors[0].resize();
			}
		}

		this.setLayout = function(layoutName) {
			if (layoutName != undefined) {
				this.layoutName = layoutName;
			} else {
				this.layoutName = "complete";
			}
		
			this.layout = this.layouts[this.layoutName];
			
			this.resetViewport();
			this.initViewport();
			this.viewport.doLayout();
		//	this.viewport.update();
			try {
				parent.focus();
			} catch (e) {
				console.log("Cannot set focus to parent", e);
				// Silently ignore if we have no parent.
			}
		}
		
		this.setSouthPanelHeight = function(height) {
			Ext.getCmp("south").setHeight(height);
		}


		
		this.createEditor = function() {
			var parent = this.layout.editorsContainer;
			if (parent == undefined) {
				return;
			}
			
			var editorsTabPanel = Ext.create("Ext.tab.Panel", {
				id: 'editorsTabPanel',
				deferredRender: false,
			});
			Ext.getCmp(parent).add(editorsTabPanel);

			var editorPanel = Ext.create("Ext.ux.aceeditor.Panel", {
				id: 'editor-1',
				title: 'Program.sl',
				parser: 'simple_language',
				theme: 'algoview',
				deferredRender: false,
			});
			editorsTabPanel.add(editorPanel);
			
			this.quickReferencePanel = Ext.create("Ext.ux.aceeditor.Panel", {
				id: 'quick-reference-editor',
				title: 'Quick reference',
				parser: 'simple_language',
				theme: 'algoview',
				deferredRender: false,
			});
			
			editorsTabPanel.add(this.quickReferencePanel); 
			this.quickReferencePanel.setUseWorker(false);
			this.quickReferencePanel.editor.renderer.setShowGutter(false);
			this.fillQuickReferenceEditor();
			this.quickReferencePanel.editor.setReadOnly(true);
			editorsTabPanel.setActiveTab(editorPanel);
			
			this.setShowQuickReference(this.showQuickReference);
		}
		
		this.fillQuickReferenceEditor = function() {
			var quickReference = this.app.languageModule.quickReference.text;
			Ext.getCmp("quick-reference-editor").getSession().getDocument().setValue(quickReference);
		}
		
		this.createOutputPanel = function() {
			var outputPanel = Ext.create("Ext.panel.Panel", {
				id: 'outputPanel',
				title: 'Output',
				autoScroll:true
			});
			Ext.getCmp("south").add(outputPanel);
		}
		
		this.createStackTableView = function() {
			var panel = Ext.create("Ext.panel.Panel", {
				id: 'stackTableViewContainer',
				layout: {
					type: 'fit',
					manageOverflow: 2,
				},
				overflowY: 'scroll',
			});
			Ext.getCmp("tableViewsContainer").add(panel);
			
			this.stackTableView = new StackTableView("stackTableViewContainer-body", false, false, panel);
			this.app.programRunner.memory.addView(this.stackTableView);			
		}
		
		this.createHeapTableView = function() {
			if (this.layout.tableHeapView === false) {
				return;
			}
			
			var panel = Ext.create("Ext.panel.Panel", {
				id: 'heapTableViewContainer',
				layout: {
					type: 'fit',
					manageOverflow: 2,
					//reserveScrollbar: true,
				},
				overflowY: 'scroll',
			});
			Ext.getCmp("tableViewsContainer").add(panel);
			
			this.heapTableView = new HeapTableView("heapTableViewContainer-body", false, false, panel);
			this.app.programRunner.memory.addView(this.heapTableView);			
		}
		
		this.createMemoryGraphicalView = function() {		
			this.memoryGraphicalView = new MemoryGraphicalView("graphicalMemoryViewContainer-body");
			this.app.programRunner.memory.addView(this.memoryGraphicalView);	
		}
		
		this.createProgramTreeView = function(programRunner) {		
			this.programTreeView = new ProgramTreeView("programTreeContainer-body", programRunner);
		}	
		
		this.createTableViewsContainer = function() {
			var parent = this.layout.tableViewsContainer;
			if (parent == undefined) {
				return;
			}
			
			var panel = Ext.create("Ext.panel.Panel", {
				id: 'tableViewsContainer',
				layout: {
					type: 'hbox',
					padding: 0,
					align: 'stretch'
				}
			});
			Ext.getCmp(parent).add(panel);
			
			this.createStackTableView();
			this.createHeapTableView();
		}
		
		this.createProgramTreeContainer = function() {
			var parent = this.layout.graphicalViewContainer; // MSO à modifier à terme
			if (parent == undefined) {
				return;
			}
			
			var panel = Ext.create("Ext.panel.Panel", {
				id: 'programTreeContainer',
				listeners: {
					resize: function() { // MSO : voir ce que l'on fait ici
						/*if (self.memoryGraphicalView != undefined) {
							self.memoryGraphicalView.updateDimension();
						}*/
					}
				}
			});
			Ext.getCmp(parent).add(panel);
			
			this.createProgramTreeView(self.app.getProgramRunner());
		}	

		this.createGraphicalMemoryViewContainer = function() {
			var parent = this.layout.graphicalViewContainer;
			if (parent == undefined) {
				return;
			}
			
			var panel = Ext.create("Ext.panel.Panel", {
				id: 'graphicalMemoryViewContainer',
				listeners: {
					resize: function() {
						if (self.memoryGraphicalView != undefined) {
							self.memoryGraphicalView.updateDimension();
						}
					}
				}
			});
			Ext.getCmp(parent).add(panel);
			
			this.createMemoryGraphicalView();
		}
		
		this.createViewport = function() {
			this.viewport = Ext.create('Ext.Viewport', {
				layout: {
					type: 'border',
					padding: 0
				},
				defaults: {
					split: true
				},
			});
		}
		
		this.resetViewport = function() {
			this.editors = new Array();
			this.viewport.removeAll(true);
		}

		this.initViewport = function() {
			this.viewport.add([{
					region: 'north',
					id: 'north',
					split: false,
					height: 30,
					minHeight: 30,
					maxHeight: 30,
				},{
					region: 'center',
					id: 'center',
					minHeight: 80,
					layout: 'fit',
					deferredRender: false,
				},{
					region: 'south',
					xtype: 'tabpanel',
					id: 'south',
					split: true,
					height: 200,
					minHeight: 40,
					layout: {
						type: 'border',
						padding: 5
					}
				}]);
			
			//this.viewport.suspendLayout = true;
			
			this.toolBar.createToolbar();
			this.createOutputPanel();
			
			if (this.layout.west !== false) {
				var west = Ext.create("Ext.panel.Panel", {
					region: 'west',
					id: 'west',
					split: true,
					layout: 'fit',
					width: '30%',
					minWidth: 100,
					minHeight: 140,
					deferredRender: false,
				});
				this.viewport.add(west);
			}
			
			if (this.layout.east !== false) {
				var east = Ext.create("Ext.panel.Panel", {
					region: 'east',
					id: 'east',
					split: true,  // Pour empêcher (ou non) le redimensionnement
					layout: 'fit',
					//width: 350,
					minWidth: 120,
					minHeight: 140,
					deferredRender: false,
				});
				this.viewport.add(east);
			}
			
			this.createEditor(); // Attention, il faut que le layout soit actif pour appeler cette fonction
			
			
			//this.viewport.suspendLayout = false;
			
			this.viewport.doLayout();
			this.createProgramTreeContainer();
			// this.createGraphicalMemoryViewContainer(); //MSO provisoire, à remettre quand des onglets auront été ajoutés
			this.createTableViewsContainer();
			
			this.viewport.doLayout();
			
			var extEditor = Ext.getCmp('editor-1');
			this.editors.push(extEditor); // Attention : editor n'est créé qu'à l'affichage du composant
		}
		

		this.setShowQuickReference = function(showQuickReference) {
			if (showQuickReference != this.showQuickReference) {
				this.showQuickReference = showQuickReference;
				
				if (showQuickReference) {
					Ext.getCmp('editorsTabPanel').add(this.quickReferencePanel);
				} else {
					Ext.getCmp('editorsTabPanel').remove(this.quickReferencePanel);
				}
			}

		}
		
		this.programChanged = function(event) {
			switch (event.type) {
				case "OUTPUT_TEXT":
					$j('#outputPanel-body').append("<span>" + event.text + "</span>");
					Ext.getCmp('outputPanel').scrollBy(0, 50, false);
					break;
				case "DONE_STEP":
					Ext.getCmp('editor-1').setCurrentLine(event.filePosition - 1);
					break;
				case "DONE_INSTRUCTION":
					Ext.getCmp('editor-1').setCurrentLine(event.filePosition - 1);
					break;
				case "STARTED_PROGRAM":
					$j('#outputPanel-body').append("<div>Running program.</div><hr />");
					Ext.getCmp('outputPanel').scrollBy(0, 50, false);
					this.goInDebugMode();
					Ext.getCmp('editor-1').editor.setReadOnly(true);
					Ext.getCmp('editor-1').initCurrentLines();
					break;
				case "STOPPED_PROGRAM":
					this.leaveDebugMode();
					if (event.source.stopOnException === false) {
						Ext.getCmp('editor-1').initCurrentLines();
					}
					Ext.getCmp('editor-1').editor.setReadOnly(false);
					$j('#outputPanel-body').append("<hr /><div>Program terminated.</div>");
					Ext.getCmp('outputPanel').scrollBy(0, 50, false);
					break;
				case "ENTERING_FUNCTION":
					Ext.getCmp('editor-1').pushCurrentLine(-1);
					break;
				case "EXITING_FUNCTION":
					Ext.getCmp('editor-1').popCurrentLine();
					break;
				case "EXCEPTION":
					var message;
					if (event.exception instanceof Exception) {
						message = event.exception.wrappedException.toString();
					} else {
						message = event.exception;
					}
					$j('#outputPanel-body').append("<hr /><div class='programRunnerErrorMessage'><div>Error during program execution.</div><div>" + message + "</div></div>");
					this.app.stopProgram(false);
					break;
			}
		}
		
		this.onCompilerEvent = function(event) {
			switch (event.type) {
				case "STARTED_COMPILATION":
					$j('#outputPanel-body').html("");
					break;
				case "COMPILED_PROGRAM":
					$j('#outputPanel-body').html("<div>Compiled without error.</div>");
					break;
				case "COMPILATION_ERROR":
					$j('#outputPanel-body').html("<div class='error-message'>Compilation errors:</div>");
					for (var i = 0; i < event.errors.length; ++i){
						var message = event.errors[i];
						$j('#outputPanel-body').append("<div class='error-message'>" + message + "</div>");
					}
					break;
			}
		}
		
		this.setProgramTextChanged = function(value) {
			this.programTextChanged = value;
			this.updateProgramName();
		}
		
		this.updateProgramName = function() {
			if (this.programTextChanged) {
				
			} else {
				
			}
		}
		
		this.createViewport();
		this.setLayout(layoutName);
		
		
		
		Ext.getCmp('editor-1').editor.getSession().on("changeBreakpoint", function() {
			var breakpoints = Ext.getCmp('editor-1').editor.getSession().getBreakpoints();
			var currentBreakpoint = 0;
			var newBreakpointsArray = new Array();
			for (var i in breakpoints) {
				if (breakpoints[i] === true) {
					newBreakpointsArray[currentBreakpoint] = Number(i) + 1;
					currentBreakpoint++;
				}
			}
			self.app.programRunner.breakpoints.setBreakpoints(newBreakpointsArray);
		});
		
		Ext.getCmp('editor-1').editor.getSession().getDocument().on("change", function(e) {	
			self.setProgramTextChanged(true);
		});
		
		window.onbeforeunload = function(e) {
			var message = undefined;
			
			if (self.leaveWithoutConfirmation == "true") {
				return;
			}
			
			if (self.programTextChanged == true) {
				message = "Your Simple Language program changed since you last downloaded it. You will lose your changes if you leave or reload this page.";
			} else {
				return;
			}

			if ( /Firefox[\/\s](\d+)/.test(navigator.userAgent) && new Number(RegExp.$1) >= 4) {
				if (confirm(message + " Are you sure you want to leave?")) {
					history.go();
				} else {
					window.setTimeout(function() {
							window.stop();
						}, 1);
				}
			} else {
				return message;
			}
		}

		this.hideMask = function () {
			try {
				Ext.get('loading').remove();
				Ext.fly('loading-mask').animate({
					opacity: 0,
					remove: true,
				});
			} catch (e) {
				console.log("Cannot remove loading mask", e);
			}
		}
		
		this.app.programRunner.addListener(this);
		this.app.compiler.addListener(this);
		
		Ext.defer(this.hideMask, 250);
	}
	
	return MainFrame;
});
