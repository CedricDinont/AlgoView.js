var MainFrame = function(algoViewApp, layoutName) {
	this.app = algoViewApp;
	this.viewport;
	this.toolbar;
	
	this.heapTableView;
	this.stackTableView;
	this.memoryGraphicalView;

	this.editors = new Array();
	this.layouts = new Array();
	
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

	this.createToolbar = function() {
		var toolbar = Ext.create('Ext.toolbar.Toolbar');
		toolbar.suspendLayout = true;
		toolbar.render('north-body');
		
		var mainFrameRef = this;

		toolbar.add({
				text: 'File',
				menu:{
					xtype: 'menu',
					cls: 'no-icon-menu',
					showSeparator: false,
					items: [
						{
							text: 'Load local file...',
							handler: function() {
								Ext.create('Ext.Window', {
									title: "Simple Language program load",
									maskOnDisable: false,
									modal: true,
									renderTo: Ext.getBody(),
									items: [{
										xtype: 'form',
										width: 500,
										frame: true,
										bodyPadding: '10 10 0',
										defaults: {
											anchor: '100%',
											allowBlank: false,
											msgTarget: 'side',
											labelWidth: 50
										},
										items: [
											{
												xtype: 'filefield',
												id: 'form-file',
												size: 50,
												emptyText: 'Please select a Simple Language program',
												fieldLabel: 'Program',
												name: 'program',
												buttonText: 'Choose...',
												allowBlank: false,
											},
										],
										buttons: [
											{
												text: 'Load',
												handler: function() {
													var form = this.up('form').getForm();
													if (form.isValid()) {
														console.log("Submitting");
														form.submit({
															url: 'local_files/load_local_program.php',
															waitMsg: 'Loading your program...',
															success: function(form, action) {
																form.owner.up('window').close();
																var message;
																try {
																	var excapedText = action.response.responseText;
																	var unescapedText = $j('<div/>').html(excapedText).text();
																	message = JSON.parse(unescapedText);
																	algoViewApp.executeCommand(message);
																} catch (exception) {
																	console.log(exception);
																	return;
																}
															},
															failure: function(form, action) {
																console.log("Failure", form, action);
																// TODO: Faire une boite de dialogue d'erreur
															}
														});
													}
												}
											},{
												text: 'Cancel',
												handler: function() {
													this.up('window').close();
												}
											}
										]
									}
								]
								}).show();
							}
						}, {
							text: "Rename program...",
							handler: function() {
								Ext.create('Ext.Window', {
									title: "Rename program",
									maskOnDisable: false,
									modal: true,
									renderTo: Ext.getBody(),
									items: [{
										xtype: 'form',
										width: 500,
										frame: true,
										bodyPadding: '10 10 0',
										defaults: {
											anchor: '100%',
											allowBlank: false,
											msgTarget: 'side',
											labelWidth: 50
										},
										items: [
											{
												xtype: 'textfield',
												id: 'form-program-name',
												size: 50,
												labelWidth: 120,
												fieldLabel: 'New program name',
												name: 'program-name',
												value: Ext.getCmp('editor-1').title.substr(0, Ext.getCmp('editor-1').title.length - 3),
												allowBlank: false,
											},
										],
										buttons: [
											{
												text: 'Rename',
												handler: function() {
													var form = this.up('form').getForm();
													if (form.isValid()) {
														Ext.getCmp('editor-1').setTitle(Ext.getCmp("form-program-name").getValue() + ".sl");
														this.up('window').close();
													}
												}
											},{
												text: 'Cancel',
												handler: function() {
													this.up('window').close();
												}
											}
										]
									}]
								}).show();
							}
						}, {
							text: 'Download program',
							handler: function() {
								algoViewApp.downloadFile();
							}
						}
					]
				},
			}, {
				text: 'Help',
				menu: {
					xtype: 'menu',
					cls: 'no-icon-menu',
					showSeparator: false,
					items: [
						{
							text: 'AlgoView manual',
							handler: function() {
								window.open("https://dev.isen.fr/dev/courses/ComputerScience/fr/slides.html?presentation=informatique/programmation/algo/simple_language/algoview");
							}
						},
						{
							text: 'Simple Language description',
							handler: function() {
								window.open("https://dev.isen.fr/dev/courses/ComputerScience/fr/slides.html?presentation=informatique/programmation/algo/simple_language");
							}
						},
						{
							text: 'Simple Language grammar',
							handler: function() {
								window.open("https://dev.isen.fr/dev/courses/ComputerScience/fr/slides.html?presentation=informatique/programmation/algo/simple_language/grammaire_simple_language");
							}
						}, '-',
						{
							text: 'About',
							handler: function() {
								Ext.Msg.alert('About', 'AlgoView.js 0.1<br />\
									<hr /><br />\
									&copy; 2012 ISEN Computer Science Department<br />\
									<br />\
									Core developers:<br />\
									<ul>\
										<li>&nbsp;&nbsp;- <a href="mailto:cedric.dinont@isen.fr">Cédric Dinont</a></li>\
										<li>&nbsp;&nbsp;- <a href="mailto:michael.soulignac@isen.fr">Michaël Soulignac</a></li>\
									</ul>');
							}
						} 
					],
				}
				
			},
			'-', {
				id: 'runStopButton',
				text: 'Run',
				tooltip: '',
				handler: function() {
					if (this.text === "Run") {
						// algoViewApp.programRunner.program.text = mainFrameRef.editors[0].editor.getSession().getDocument().getValue();
						algoViewApp.compileProgram();
						algoViewApp.startProgram();
					} else {
						algoViewApp.stopProgram();
					}
				},
			},{
				id: 'continueButton',
				text: 'Continue',
				disabled: true,
				tooltip: '<b>Continue execution</b><br/>until next beakpoint or end of program',
				handler: function() {
					algoViewApp.continueProgram();
				}
			},{
				id: 'stepOverButton',
				text: 'Step over',
				tooltip: '',
				disabled: true,
				handler: function() {
					algoViewApp.stepOverProgram();
				},

			},{
				id: 'stepInButton',
				text: 'Step in',
				tooltip: '',
				disabled: true,
				handler: function() {
					algoViewApp.stepInProgram();
				}
			},{
				id: 'stepOutButton',
				text: 'Step out',
				tooltip: '',
				disabled: true,
				handler: function() {
					algoViewApp.stepOutProgram();
				}
			}
		);

		toolbar.suspendLayout = false;
		toolbar.doLayout();
		this.toolbar = toolbar;
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
		//	layout: 'table',
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
			manageOverflow: 1,
		});
		Ext.getCmp("tableViewsContainer").add(panel);
		
		this.heapTableView = new HeapTableView("heapTableViewContainer-body", false, false, panel);
		this.app.programRunner.memory.addView(this.heapTableView);			
	}
	
	this.createMemoryGraphicalView = function() {		
        this.memoryGraphicalView = new MemoryGraphicalView("graphicalMemoryViewContainer-body");
		this.app.programRunner.memory.addView(this.memoryGraphicalView);	
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

	this.createGraphicalMemoryViewContainer = function() {
		var parent = this.layout.graphicalViewContainer;
		if (parent == undefined) {
			return;
		}
		
		var panel = Ext.create("Ext.panel.Panel", {
			id: 'graphicalMemoryViewContainer',
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
		
		this.viewport.suspendLayout = true;
		
		this.createToolbar();
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
				//floatable: true,
				//split: true,
				layout: 'fit',
				//width: 350,
				minWidth: 120,
				minHeight: 140,
				deferredRender: false,
			});
			this.viewport.add(east);
		}
		
		this.createEditor();
		
		this.viewport.suspendLayout = false;
		this.viewport.doLayout();
		this.createGraphicalMemoryViewContainer();
		this.createTableViewsContainer();
		
		this.viewport.doLayout();
		
		var extEditor = Ext.getCmp('editor-1');
		this.editors.push(extEditor); // Attention : editor n'est créé qu'à l'affichage du composant
	}
	
	this.toggleDebugButtons = function() {
		Ext.getCmp('continueButton').setDisabled(! Ext.getCmp('continueButton').disabled);
		Ext.getCmp('stepOverButton').setDisabled(! Ext.getCmp('stepOverButton').disabled);
		Ext.getCmp('stepInButton').setDisabled(! Ext.getCmp('stepInButton').disabled);
		Ext.getCmp('stepOutButton').setDisabled(! Ext.getCmp('stepOutButton').disabled);
	}
	
	this.goInDebugMode = function() {
		this.toggleDebugButtons();
		Ext.getCmp('runStopButton').setText("Stop");
	}
	
	this.leaveDebugMode = function() {
		this.toggleDebugButtons();
		Ext.getCmp('runStopButton').setText("Run");
	}
	
	this.programChanged = function(event) {
		switch (event.type) {
			case "OUTPUT_TEXT":
				$j('#outputPanel-body').append("<div>" + event.text + "</div>");
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
				break;
			case "COMPILED_PROGRAM":
				$j('#outputPanel-body').html("<div>Compiled without error.</div>");
				Ext.getCmp('outputPanel').scrollBy(0, 50, false);
				this.goInDebugMode();
				Ext.getCmp('editor-1').editor.setReadOnly(true);
				Ext.getCmp('editor-1').initCurrentLines();
				break;
			case "STOPPED_PROGRAM":
				this.leaveDebugMode();
				Ext.getCmp('editor-1').initCurrentLines();
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
	
	this.app.programRunner.addListener(this);
}
