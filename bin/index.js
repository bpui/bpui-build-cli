#!/usr/bin/env node

'use strict';

var List = require('term-list');
var path = require('path');
var buildRouterConfig = require('./buildRouterConfig');
var buildRouterConfig2 = require('./buildRouterConfig2');

var commands = {
  'router': [buildRouterConfig, 'Build router config file in [layouts, pages].'],
  'router2': [buildRouterConfig2, 'Build router config file in [layouts].'],
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
