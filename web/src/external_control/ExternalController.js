var ExternalController = function(algoViewApp) {
	this.algoViewApp = algoViewApp;

	this.registeredActions = new Array();
}

ExternalController.prototype.registerAction = function(actionName, action) {
	this.registeredActions[actionName] = action;
}

