({
    // pour avoir toutes les options, https://github.com/jrburke/r.js/blob/master/build/example.build.js
    // répertoire où se trouvent les scripts
    baseUrl: "src/",
    // nom du fichier de départ à minifier
    name: "initializer-temp",
    // nom du fichier de sortie
    out: "build/__LANGUAGE__/src/AlgoView-__LANGUAGE__-Minified.js",
    // fichier js où prendre la configuration require (require.config(...)) de l'application (par défaut, la configuration doit être faite dans ce fichier)
    mainConfigFile: 'src/initializer-temp.js',
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
			hoist_funs: false,
			hoist_vars: false,
            global_defs: {
                DEBUG: false,
                INIT_UI: true,
                LANGUAGE_MODULE: "__LANGUAGE__Module",
            }
        },
        warnings: true,
        mangle: true,
    },
})
// howto:
// sudo npm install -g requirejs
// r.js -o minifier-config-template.js
// nécessite l'installation de nodejs
// l'exécutable recherché par r.js s'appelle node - faire éventuellement un lien symbolique /usr/bin/node sur /usr/bin/nodejs
