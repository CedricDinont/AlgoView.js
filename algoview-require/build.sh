#!/bin/bash

mkdir -p dist/

LANGUAGES="SimpleLanguage" # SimpleAssembler RemoteC"

for LANGUAGE in ${LANGUAGES}
do
	echo "Building ${LANGUAGE}..."
	mkdir -p dist/${LANGUAGE}/lib/AlgoView/
	cp AlgoView-${LANGUAGE}.html dist/${LANGUAGE}/
	sed s/LANGUAGE_MODULE/\"${LANGUAGE}Module\"/ src/initializer.js > src/initializer-temp.js
	r.js -o minifier-config-template.js
	rm src/initializer-temp.js
done
