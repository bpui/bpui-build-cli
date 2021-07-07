'use strict';

var febs = require('febs');

function done(args, options, workDir) {
  workDir = workDir || process.cwd();

  console.log('');
  console.log('**************************************************************');
  console.log('> Will build project: development');
  console.log('**************************************************************');
  console.log('');

  require('../scripts/buildRouterConfig');
  febs.utils.execCommand('./node_modules/.bin/vue-cli-service', ['build', '--mode', 'development'], { cwd: workDir }, (err, stdout, stderr) => {
    if (!err) {
      console.log(stdout);
    }
    else {
      console.error(stderr);
    }
  });
}


module.exports = {
  done: done,
};