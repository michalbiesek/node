'use strict';

const {
  prepareMainThreadExecution,
  markBootstrapComplete
} = require('internal/process/pre_execution');

prepareMainThreadExecution();
markBootstrapComplete();

// Legacy _third_party_main.js support
process.nextTick(() => {
  require('_third_party_main');
});
