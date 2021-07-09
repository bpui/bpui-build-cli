#!/usr/bin/env node

'use strict';

var List = require('term-list');
var path = require('path');
var build = require('./build');
var debug = require('./debug');
var buildRouterConfig = require('./buildRouterConfig');

var commands = {
  'build': [build, 'Build project.'],
  'debug': [debug, 'Debug project.'],
  'router': [buildRouterConfig, 'Build router config file.'],
}

/**
 * Parses the command line and runs a command of the CLI.
 */
function run() {
  var args = process.argv.slice(2);
  if (args.length === 0) {
    printUsage();
  }

  var command = commands[args[0]];
  if (!command) {
    console.error('Command `%s` unrecognized', args[0]);
    printUsage();
    return;
  }

  var options = args.slice(1);
  
  command[0].done(args, options);
}

function printUsage() {
  console.log([
    '',
    'Usage: bpui-build <command> [Options]',
    '',
    'Commands:'
  ].concat(Object.keys(commands).map(function(name) {
    return '  ' + name + ': ' + commands[name][1];
  }))
    // .concat([
    //   '',
    //   'Options:',
    //   '  --bundleAll: bundle all dependency',
    //   '',
    // ])
    .join('\n')
  
  );
  process.exit(1);
}

if (require.main === module) {
  run();
}

module.exports = {
  run: run,
};
