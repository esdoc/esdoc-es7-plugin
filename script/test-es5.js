#!/usr/bin/env node
var sh = require('./sh');

var mochaOption=" -t 10000 --recursive ./out/test/src -R spec";

sh.exec('node ./script/build.js');

if (process.env.TRAVIS) {
  sh.exec('./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- ' + mochaOption + ' && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js');
} else if(process.argv.indexOf('--coverage') !== -1) {
  sh.exec('./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha  -- ' + mochaOption);
} else {
  sh.exec('./node_modules/.bin/mocha' + mochaOption);
}
