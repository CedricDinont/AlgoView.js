define("MainFrame",
["Ext", "JSUtils", "LayoutManager"],
function(Ext, JSUtils, LayoutManager) {

	var MainFrame = function(algoViewApp, layoutName) {
		this.app = algoViewApp;
		
		this.layoutManager = new LayoutManager(this.app, this);
		
		this.viewport;
		
		this.init();
	}
	
	MainFrame.prototype.init = function() {
		this.createViewport();
		this.initViewport();
		this.layoutManager.applyLayoutByName("complete");
		this.setOnLeaveHandler();
		Ext.defer(this.hideLoadingMask, 250);
	}
	
	MainFrame.prototype.setOnLeaveHandler = function() {
		this.leaveWithoutConfirmation = JSUtils.getUrlVar("leaveWithoutConfirmation");
		var self = this;
		window.onbeforeunload = function(e) {
			var message = undefined;
			
			if (self.leaveWithoutConfirmation == "true") {
				return;
			}
			
			if (self.app.editorsPanel.programTextChanged == true) {
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
	}
	
	MainFrame.prototype.createViewport = function() {
		this.viewport = Ext.create('Ext.Viewport', {
			layout: {
				type: 'border',
				padding: 0
			},
			defaults: {
				split: true,
				deferredRender: true
			},
		});
	}
	
	MainFrame.prototype.initViewport = function() {
		this.viewport.add([{
			region: 'north',
			id: 'north',
			split: false,
			height: 30,
			minHeight: 30,
			maxHeight: 30,
			layout: 'fit',
		},{
			region: 'center',
			id: 'center',
			minHeight: 80,
			layout: 'fit',
		},{
			region: 'south',
			id: 'south',
			split: true,
			height: 200,
			minHeight: 40,
			layout: 'fit',
		},{
			region: 'west',
			id: 'west',
			layout: 'fit',
			width: '30%',
			minWidth: 100,
			minHeight: 140,
		},{
			region: 'east',
			id: 'east',
			layout: 'fit',
			width: 350,
			minWidth: 120,
			minHeight: 140,
		}]);
				
		this.viewport.doLayout();
	}
	
	MainFrame.prototype.resetViewport = function() {
		this.viewport.removeAll(true);
	}
	
	MainFrame.prototype.hideLoadingMask = function () {
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
	
	return MainFrame;
});
