define("EditorsPanel",
["Ext", "ExtUxAceEditorPanel", "ExtUxAceEditor"],
function(Ext, ExtUxAceEditorPanel, ExtUxAceEditor) {
	
	function EditorsPanel(algoViewApp) {
		this.app = algoViewApp;
		
		this.editors = new Array();
		
		this.app.setEditorsPanel(this);
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
			

	//	this.quickReferencePanel.setUseWorker(false);
	//	this.quickReferencePanel.editor.renderer.setShowGutter(false);
//		this.fillQuickReferenceEditor();
	//	this.quickReferencePanel.editor.setReadOnly(true);
	//	editorsTabPanel.setActiveTab(editorPanel);
			
	/*	this.setShowQuickReference(this.showQuickReference);
		 */
		
		return editorsTabPanel;
	}
	
	EditorsPanel.prototype.getCurrentEditor = function() {
		return this.editors[0].editor;
	}
	
	return EditorsPanel;
	
});
