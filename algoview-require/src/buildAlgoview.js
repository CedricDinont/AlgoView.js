({
    // pour avoir toutes les options, https://github.com/jrburke/r.js/blob/master/build/example.build.js
    // répertoire où se trouvent les scripts
    baseUrl: ".",
    // nom du fichier de départ à minifier
    name: "initializer",
    // nom du fichier de sortie
    out: "AlgoView-SimpleLanguage-Minified.js",
    // fichier js où prendre la configuration require (require.config(...)) de l'application (par défaut, la configuration doit être faite dans ce fichier)
    mainConfigFile: './initializer.js',
    // retrouve les require qui sont imbriqués dans d'autres require
    // attention: ne supporte pas le chargement dynamique de module (type require dont les arguments sont calculés):
    // il faut faire un appel explicite à require(["monmodule"],function(monModule){})
    findNestedDependencies: true,
    // pour un résultat plus blanc que blanc
    optimize: "uglify2",
    uglify2: {
        output: {
         //   beautify: true,
            comments: function() {
				return false;
			}
        },
        compress: {
            global_defs: {
                DEBUG: false,
                INIT_UI: true,
                LANGUAGE: "SimpleLanguage",
            }
        },
        warnings: true,
        mangle: true,
    },
})
// howto:
// sudo npm install -g requirejs
// r.js -o buildAlgoview.js
// nécessite l'installation de nodejs
// l'exécutable recherché par r.js s'appelle node - faire éventuellement un lien symbolique /usr/bin/node sur /usr/bin/nodejs
