#!/bin/bash

script_dir=`dirname $0`
cd ${script_dir}

java -jar ./antlr-3.3-complete.jar SimpleLanguage.g
