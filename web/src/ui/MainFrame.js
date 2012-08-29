var MainFrame = function(algoViewApp) {
	this.app = algoViewApp;
	this.viewport;
	this.toolbar;
	
	this.heapTableView;
	this.stackTableView;
	this.memoryGraphicalView;

	this.editors = new Array();

	var self = this;

	this.initViews = function() {
		var memory = this.app.programRunner.memory;

        this.memoryGraphicalView = new MemoryGraphicalView("graphicalMemoryViewContainer-body");
		memory.addView(this.memoryGraphicalView);

		this.heapTableView = new HeapTableView("heapTableViewContainer-body");
		memory.addView(this.heapTableView);	

		this.stackTableView = new StackTableView("stackTableViewContainer-body");
		memory.addView(this.stackTableView);					
	}

	this.resizeEditors = function(mainFrame) {
		console.log('resize');
		console.log(mainFrame);
		if (mainFrame.editors[0] != undefined) {
			mainFrame.editors[0].resize();
		}
	}

	this.initViewport = function() {
		this.viewport = Ext.create('Ext.Viewport', {
			layout: {
				type: 'border',
				padding: 0
			},
			defaults: {
				split: true
			},
			items: [{
				region: 'north',
				id: 'north',
				split: false,
				height: 30,
				minHeight: 30,
				maxHeight: 30,
			},{
				region: 'west',
				split: true,
				width: '30%',
				minWidth: 100,
				minHeight: 140,
				xtype: 'tabpanel',
				deferredRender: false,
				
				items: [{
							id: 'editor-1',
							title: 'Program.sl',
							xtype: 'AceEditor',
							parser: 'simple_language',
							theme: 'algoview',
					}],
				
			/*	items: [ {
					id: 'opened_files',
					title: 'Files',
					xtype: 'tabpanel',
					deferredRender: false,
					listeners: {
						//resize: this.resizeEditors(this),
						tabchange: function(tp, newTab) {
						//	editor.resize();
						//	newTab.on('resize', function() {	
						//		editor.resize();
						//	}); 
						}
					},
					items: [{
							id: 'editor-1',
							title: 'Program',
							xtype: 'AceEditor',
							parser: 'simple_language',
							theme: 'algoview',
					}]	
				},{
					id: 'all_files',
					title: 'Repositories',
					xtype: 'treepanel',
					rootVisible: false,
					useArrows: true,
					root: {
						text: 'Root',
						expanded: true,
						children: [{
							text: 'f1',
						//	leaf: true,
						}, {
							text: 'f2',
						//	leaf: true,
						}]
					}
				}], */
			},{
				region: 'center',
				id: 'center',
				minHeight: 80,
				items: [{
					id: 'graphicalMemoryViewContainer'
				}]
			},{
				region: 'east',
				id: 'east',
				floatable: true,
				split: true,
				width: 300,
				minWidth: 120,
				minHeight: 140,
				items: {
					id: 'tableViewsContainer',
					layout: {
						type: 'hbox',
						padding: 0,
						align: 'stretch'
					},
					items: [{
						id: 'stackTableViewContainer',
					}, {
						id: 'heapTableViewContainer',
					}]
				}
			},{
				region: 'south',
				xtype: 'tabpanel',
				id: 'southTabPanel',
				split: true,
				height: 200,
				minHeight: 120,
				layout: {
					type: 'border',
					padding: 5
				},
				items: [{
						id: 'outputPanel',
						title: 'Output',
					},/* {
						id: 'stackTracePanel',
						title: 'Call Stack',
					} */
				]
			}]
		});

		var tb = Ext.create('Ext.toolbar.Toolbar');
		tb.suspendLayout = true;
		tb.render('north-body');
		
		var mainFrameRef = this;

		tb.add({
				text: 'File',
				menu:{
					xtype: 'menu',
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
			}/*, {
				xtype: 'tbfill'
			},{
				text: 'AlgoView.js Rev. XXX'
			} */
		);

		tb.suspendLayout = false;
		tb.doLayout();
		this.toolbar = tb;

	/*	$j(':regex(id, editor-.*-body)').each(function(index) {
			$j(this).css('background-color', 'white');
		}); */

		var extEditor = Ext.getCmp('editor-1');
		this.editors.push(extEditor); // Attention : editor n'est créé qu'à l'affichage du composant
	}

	this.initViewport();
	this.initViews();
	this.viewport.doLayout();
	
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
				break;
			case "DONE_STEP":
				// console.log("DONE_STEP", event.filePosition);
				Ext.getCmp('editor-1').setCurrentLine(event.filePosition - 1);
				break;
			case "DONE_INSTRUCTION":
				// console.log("DONE_INSTRUCTION", event.filePosition);
				Ext.getCmp('editor-1').setCurrentLine(event.filePosition - 1);
				break;
			case "STARTED_PROGRAM":
				break;
			case "COMPILED_PROGRAM":
				$j('#outputPanel-body').html("<div>Compiled without error.</div><hr />");
				this.goInDebugMode();
				Ext.getCmp('editor-1').editor.setReadOnly(true);
				Ext.getCmp('editor-1').initCurrentLines();
				break;
			case "STOPPED_PROGRAM":
				this.leaveDebugMode();
				Ext.getCmp('editor-1').initCurrentLines();
				Ext.getCmp('editor-1').editor.setReadOnly(false);
				break;
			case "ENTERING_FUNCTION":
				Ext.getCmp('editor-1').pushCurrentLine(-1);
				break;
			case "EXITING_FUNCTION":
				Ext.getCmp('editor-1').popCurrentLine();
				break;
		}
	}
	
	this.app.programRunner.addListener(this);
	
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
}

