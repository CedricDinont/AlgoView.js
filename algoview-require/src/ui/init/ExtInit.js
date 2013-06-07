// Initializes Ext.js

 define("ExtInit",
["Ext"],
function(Ext) {

	Ext.Loader.setConfig({
		enabled: true,
		paths: {
			'Ext.ux.aceeditor': './editor'
		}
	});

	return Ext;

});

