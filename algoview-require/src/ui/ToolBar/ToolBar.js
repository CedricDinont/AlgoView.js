define("ToolBar",
["jQuery"],
function($j) {
	
	function ToolBar(algoViewApp) {
		this.app = algoViewApp;
		
		this.app.programRunner.addListener(this);
	}
	
	ToolBar.prototype.toggleDebugButtons = function() {
		Ext.getCmp('continueButton').setDisabled(! Ext.getCmp('continueButton').disabled);
		Ext.getCmp('stepOverButton').setDisabled(! Ext.getCmp('stepOverButton').disabled);
		Ext.getCmp('stepInButton').setDisabled(! Ext.getCmp('stepInButton').disabled);
		Ext.getCmp('stepOutButton').setDisabled(! Ext.getCmp('stepOutButton').disabled);
	}
	
	ToolBar.prototype.programChanged = function(event) {
		switch (event.type) {
			case "OUTPUT_TEXT":
				break;
			case "DONE_STEP":
				break;
			case "DONE_INSTRUCTION":
				break;
			case "STARTED_PROGRAM":
				this.goInDebugMode();
				break;
			case "STOPPED_PROGRAM":
				this.leaveDebugMode();
				break;
			case "ENTERING_FUNCTION":
				break;
			case "EXITING_FUNCTION":
				break;
			case "EXCEPTION":
				break;
		}
	}
	
	ToolBar.prototype.destroy = function() {
		this.app.programRunner.removeListener(this);
	}
	
	ToolBar.prototype.goInDebugMode = function() {
		this.toggleDebugButtons();
		Ext.getCmp('runStopButton').setText("Stop");
	}
	
	ToolBar.prototype.leaveDebugMode = function() {
		this.toggleDebugButtons();
		Ext.getCmp('runStopButton').setText("Run");
	}
		
	ToolBar.prototype.createExtComponent = function() {
		var toolbar = Ext.create('Ext.toolbar.Toolbar');
		toolbar.suspendLayout = true;
		
		var self = this;

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
														form.submit({
															//url: 'local_files/load_local_program.php',
															url: '/node/load_local_file',
															waitMsg: 'Loading your program...',
															success: function(form, action) {
																form.owner.up('window').close();
																var message;
																try {
																	console.log(action);
																	var escapedText = action.response.responseText;
																	console.log(escapedText);
																	var unescapedText = $j('<div/>').html(escapedText).text();
																	console.log(unescapedText);
																	var newText = unescapedText.replace(/\\\\"/g, '\"');
																	console.log(newText);
																	message = JSON.parse(newText);
																	self.app.executeCommand(message);
																	self.setProgramTextChanged(false);
																} catch (exception) {
																	console.log(exception);
																	// TODO: Faire une boite de dialogue d'erreur
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
								self.app.downloadFile();
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
								Ext.Msg.alert('About', 'AlgoView.js 0.1 Beta<br />\
									<hr /><br />\
									&copy; 2012 ISEN Computer Science Department<br />\
									<br />\
									Please contact core developers for comments, questions or bug reports:<br />\
									<ul>\
										<li>&nbsp;&nbsp;- <a href="mailto:cedric.dinont@isen.fr">Cédric Dinont</a> (Simple Language compiler and interpreter, user interface)</li>\
										<li>&nbsp;&nbsp;- <a href="mailto:michael.soulignac@isen.fr">Michaël Soulignac</a> (Memory model, memory views)</li>\
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
						var compilationResult = self.app.compileProgram();
						if (compilationResult == true) {
							self.app.startProgram();	
						}
					} else {
						self.app.stopProgram(true);
					}
				},
			},{
				id: 'continueButton',
				text: 'Continue',
				disabled: true,
				tooltip: '<b>Continue execution</b><br/>until next beakpoint or end of program',
				handler: function() {
					self.app.continueProgram();
				}
			},{
				id: 'stepOverButton',
				text: 'Step over',
				tooltip: '',
				disabled: true,
				handler: function() {
					self.app.stepOverProgram();
				},

			},{
				id: 'stepInButton',
				text: 'Step in',
				tooltip: '',
				disabled: true,
				handler: function() {
					self.app.stepInProgram();
				}
			},{
				id: 'stepOutButton',
				text: 'Step out',
				tooltip: '',
				disabled: true,
				handler: function() {
					self.app.stepOutProgram();
				}
			}
		);

		toolbar.suspendLayout = false;
		toolbar.doLayout();
		
		return toolbar;
	}
	
	return ToolBar;
	
});
