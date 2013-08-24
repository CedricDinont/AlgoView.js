define("LayoutManager",
["ToolBar", "OutputPanel", "EditorsPanel", "MemoryGraphicalViewPanel", 
"StackTableViewPanel", "HeapTableViewPanel", "ProgramTreeViewPanel"],
function(ToolBar, OutputPanel, EditorsPanel, MemoryGraphicalViewPanel, 
StackTableViewPanel, HeapTableViewPanel, ProgramTreeViewPanel) {

	function LayoutManager(algoViewApp, mainFrame) {
		this.app = algoViewApp;
		this.mainFrame = mainFrame;
		
		this.layouts = new Array();
		
		this.components = new Array();
		
		this.layouts["complete"] = {
			north: {
				component: "ToolBar",
			},
			west: {
				split: true,
				component: "EditorsPanel",
			},
			center: {
				component: {
					type: "TabbedPane",
					components: [{
							type: "MemoryGraphicalViewPanel",
						}, {
							type: "ProgramTreeViewPanel"
						}
					],
				}
			},
			east: {
				component: {
					type: "TabbedPane",
					components: [{
							type: "StackTableViewPanel",
						}, {
							type: "HeapTableViewPanel",
						}
					],
				}
			},
			south: {
				component: "OutputPanel",
				parameters: {
					title: ''
				}
			}
		};
	}
	
	LayoutManager.prototype.registerLayout = function(layoutName, layout) {
		this.layouts[layoutName] = layout;
	}
	
	LayoutManager.prototype.destroyOldComponents = function() {
		console.log("Destroying old components", this.components);
		for (var i = 0; i < this.components.length; i++) {
			if (this.components[i].destroy != undefined) {
				this.components[i].destroy();
			}
		}
		this.components = new Array();
	}
	
	LayoutManager.prototype.createCompoundComponent = function(componentDescription) {
		var component;
		
		if (componentDescription.type === "TabbedPane") {
			component = Ext.create("Ext.tab.Panel", {
				deferredRender: false,
			});
		} else {
			component = this.createSimpleComponent(componentDescription.type);
		}
		
		if (componentDescription.components != undefined) {
			for (var i = 0; i < componentDescription.components.length; ++i) {
				var childComponent = this.createComponent(componentDescription.components[i]);
				component.add(childComponent);
			}
		}
		
		return component;
	}

	LayoutManager.prototype.createSimpleComponent = function(componentDescription) {
		var component;

		if (componentDescription === "ToolBar") {
			component = new ToolBar(this.app);
		} else if (componentDescription === "OutputPanel") {
			component = new OutputPanel(this.app);
		} else if (componentDescription === "EditorsPanel") {
			component = new EditorsPanel(this.app);
		} else if (componentDescription === "StackTableViewPanel") {
			component = new StackTableViewPanel(this.app);
		} else if (componentDescription === "HeapTableViewPanel") {
			component = new HeapTableViewPanel(this.app);
		} else if (componentDescription === "MemoryGraphicalViewPanel") {
			component = new MemoryGraphicalViewPanel(this.app);
		}  else if (componentDescription === "ProgramTreeViewPanel") {
			component = new ProgramTreeViewPanel(this.app);
		} 
		
		this.components.push(component);
				
		return component.createExtComponent();
	}
	
	LayoutManager.prototype.createComponent = function(componentDescription) {
		if (typeof componentDescription === "object") {
			return this.createCompoundComponent(componentDescription);
		} else {
			return this.createSimpleComponent(componentDescription);
		}
	}
	
	LayoutManager.prototype.applyLayoutPart = function(layout, extComponent) {
		if (layout == undefined) {
			return;
		}
		
		if (layout.visible != undefined) {
			extComponent.setVisible(layout.visible);
		}
				
		if (layout.component != undefined) {
			var component = this.createComponent(layout.component, extComponent);
			extComponent.add(component);
		}
	}
	
	LayoutManager.prototype.applyLayout = function(layout) {
		
		console.log("Applying layout", layout);

		this.destroyOldComponents();
		
		this.mainFrame.resetViewport();
		this.mainFrame.initViewport();
		this.mainFrame.viewport.doLayout();

		this.applyLayoutPart(layout.north, Ext.getCmp('north'));
		this.applyLayoutPart(layout.west, Ext.getCmp('west'));
		this.applyLayoutPart(layout.center, Ext.getCmp('center'));
		this.applyLayoutPart(layout.east, Ext.getCmp('east'));
		this.applyLayoutPart(layout.south, Ext.getCmp('south'));
		
		try {
			parent.focus();
		} catch (e) {
			console.log("Cannot set focus to parent", e);
			// Silently ignore if we have no parent.
		}
	}

	LayoutManager.prototype.applyLayoutByName = function(layoutName) {
		this.applyLayout(this.layouts[layoutName]);
	}
		
	return LayoutManager;

});
