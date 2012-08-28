Ext.Loader.setConfig({
	enabled: true,
	paths: {
		'Ext.ux.aceeditor': './ux/aceeditor'
	}
});

Ext.require(['*']);

Ext.require([ 'Ext.ux.aceeditor.Panel' ]);

var algoViewApp;
var $j;

Ext.onReady(function() {
	$j = jQuery.noConflict();
	
	algoViewApp = new AlgoViewApp();

	var hideMask = function () {
		Ext.get('loading').remove();
		Ext.fly('loading-mask').animate({
			opacity: 0,
			remove: true,
		});
	};

	Ext.defer(hideMask, 250);
	//  doResize();
});

jQuery.expr[':'].regex = function(elem, index, match) {
	var matchParams = match[3].split(','),
	validLabels = /^(data|css):/,
	attr = {
		method: matchParams[0].match(validLabels) ? matchParams[0].split(':')[0] : 'attr',
		property: matchParams.shift().replace(validLabels,'')
	},
	regexFlags = 'ig',
	regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
	return regex.test(jQuery(elem)[attr.method](attr.property));
}


