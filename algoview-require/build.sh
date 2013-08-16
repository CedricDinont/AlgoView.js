#!/bin/bash

mkdir -p build/
mkdir -p dist/

LANGUAGES="SimpleLanguage SimpleAssembler RemoteC"

for LANGUAGE in ${LANGUAGES}
do
	echo "Building ${LANGUAGE}..."
	mkdir -p build/${LANGUAGE}/src/

	cp AlgoView-${LANGUAGE}.html build/${LANGUAGE}/
	cp -r lib/ build/${LANGUAGE}/
	cp -r resources/ build/${LANGUAGE}/
	cp -r style/ build/${LANGUAGE}/
	mkdir -p build/${LANGUAGE}/src/ui/
	cp -r src/ui/editor/ build/${LANGUAGE}/src/ui/
	sed s/LANGUAGE_MODULE/\"${LANGUAGE}Module\"/g src/initializer.js > src/initializer-temp.js
	sed s/__LANGUAGE__/${LANGUAGE}/g minifier-config-template.js > minifier-config-${LANGUAGE}.js
	r.js -o minifier-config-${LANGUAGE}.js
	rm src/initializer-temp.js
	rm minifier-config-${LANGUAGE}.js
	
	cd build/${LANGUAGE}/
	tar cvjf ../../dist/AlgoView-${LANGUAGE}.tar.bz2 ./
	cd ../..
done
