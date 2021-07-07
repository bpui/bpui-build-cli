'use strict';

var febs = require('febs');
var path = require('path');
var chalk = require('chalk');

function done(args, options, workDir) {
  workDir = workDir || process.cwd();

  console.log('');
  console.log('**************************************************************');
  console.log('> Will build project router config');
  console.log('**************************************************************');
  console.log('');

  require(path.join(__dirname, '../_scripts/buildRouterConfig'));
}


module.exports = {
  done: done,
};