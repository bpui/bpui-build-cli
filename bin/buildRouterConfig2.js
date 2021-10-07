'use strict';

var febs = require('febs');
var path = require('path');
var chalk = require('chalk');
var libs = require('@bpui/build-cli/bin/libs');

function done(args, options, workDir) {
  workDir = workDir || process.cwd();

  var layout = libs.getOptionByName(options, 'layout');
  if (!layout) {
    layout = process.env['BP_LAYOUT']
  }
  require(path.join(__dirname, '../_scripts/buildRouterConfig2')).run(layout);
}


module.exports = {
  done: done,
};