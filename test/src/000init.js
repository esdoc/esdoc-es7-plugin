import _ from 'core-js';
import fs from 'fs-extra';
import path from 'path';
//import ESDoc from 'esdoc/out/src/ESDoc.js';
//import publisher from 'esdoc/out/src/Publisher/publish.js';
import ESDoc from '/usr/local/lib/node_modules/esdoc/out/src/ESDoc.js';
import publisher from '/usr/local/lib/node_modules/esdoc/out/src/Publisher/publish.js';

const configFilePath = './test/fixture/esdoc.json';
const configJSON = fs.readFileSync(configFilePath, {encode: 'utf8'});
const config = JSON.parse(configJSON);

const selfPath = path.relative('./', __filename);
if (selfPath.indexOf('out/test/src/') === 0) config.plugins[0].name = './out/src/Plugin.js';

fs.removeSync(config.destination);
ESDoc.generate(config, publisher);
