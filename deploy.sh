#!/bin/bash

yarn
./node_modules/.bin/babel ./src --presets es2017 --plugins transform-es2015-modules-commonjs -d ./dist
forever stop ./dist/server.js
forever start ./dist/server.js
