// Initializes Ext.js

define("ExtInit",
["Ext"],
function(Ext) {

	Ext.Loader.setConfig({
		enabled: true,
		paths: {
			'Ext.ux.aceeditor': EXT_LOADER_PATH + '/ui/editor'
		}
	});

	return Ext;
	
});
