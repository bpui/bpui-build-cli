'use strict';

var febs = require('febs');
var path = require('path');
var chalk = require('chalk');

function done(args, options, workDir) {
  workDir = workDir || process.cwd();

  require('./buildRouterConfig');

  console.log('');
  console.log('**************************************************************');
  console.log('> Will build project: development');
  console.log('**************************************************************');
  console.log('');

  febs.utils.execCommand('./node_modules/.bin/vue-cli-service', ['build', '--mode', 'development'], { cwd: workDir }, (err, stdout, stderr) => {
    if (!err) {
      if (stdout) console.log(stdout);
    }
    else {
      if (stdout) console.log(stdout);
      if (stderr) console.error(chalk.red(stderr));
    }
  });
}


module.exports = {
  done: done,
};