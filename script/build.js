#!/usr/bin/env node
var sh = require('./sh');

sh.rm('./out/src');
sh.mkdir('./out/src');
sh.exec('./node_modules/.bin/babel --out-dir out/src src');

// build test
sh.rm('./out/test/src');
sh.mkdir('./out/test/src');
sh.exec('./node_modules/.bin/babel --out-dir out/test/src test/src');
