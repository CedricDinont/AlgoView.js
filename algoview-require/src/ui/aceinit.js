// Initialise ace

// recopie toutes les propriétés censées être dans le scope global
// charge le mode et le thème "Simple Language"
 
 define("aceinit",
["ace", "aceSimpleLanguageMode"],
function(ace) {

	with(ace){

		require(["ace/ace"], function(aceace) {
			

		aceace.config.init();
		
		// on recopie les propriétés de ace/ace dans l'objet de notre module ace
		// car cela est le fonctionnement normal de ace (normalement, cela est fait dans window.ace)
		for (var key in aceace){
			if (aceace.hasOwnProperty(key)){
				ace[key] = aceace[key];     
			}              
		}
		
		}); 
	}
	return ace;

});

