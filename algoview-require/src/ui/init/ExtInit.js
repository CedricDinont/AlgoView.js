// Initializes Ext.js
 
 define("ExtInit",
["Ext"],
function(Ext) {

	// MSO : a priori, ce module n'est plus utilisé : les Ext.require() ont été remplacés par des require() de requirejs

	Ext.Loader.setConfig({
		enabled: true,
		paths: {
			'Ext.ux.aceeditor': '../editor'
		}
	});

	Ext.require(['*']);

	Ext.require([ 'Ext.ux.aceeditor.Panel' ]);


return Ext;

});

