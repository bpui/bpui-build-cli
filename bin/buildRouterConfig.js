'use strict';

var febs = require('febs');
var path = require('path');
var chalk = require('chalk');

function done(args, options, workDir) {
  workDir = workDir || process.cwd();

  var layout;
  if (options[0] && options[0].indexOf('--') < 0) {
    layout = options[0];
    options = options.slice(1);
  }

  require(path.join(__dirname, '../_scripts/buildRouterConfig')).run(layout);
}


module.exports = {
  done: done,
};