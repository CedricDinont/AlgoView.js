#!/bin/bash

script_dir=`dirname $0`
cd ${script_dir}

java -jar ./antlr-3.3-complete.jar -verbose SimpleLanguage.g

sed -i s/____BEGIN____/{/ SimpleLanguageLexer.js
sed -i s/____BEGIN____/{/ SimpleLanguageParser.js

echo "

    return SimpleLanguageLexer;
});" >> SimpleLanguageLexer.js

echo "
    return SimpleLanguageParser;
});" >> SimpleLanguageParser.js

