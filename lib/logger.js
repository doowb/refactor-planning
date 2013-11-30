/**
 * Logger
 */

// Node.js
var util = require('util');

// Internal modules
var config = require('./config');


var getLineNumber = function() {
  var error = new Error();
  return error.stack.split('\n')[3].split(':')[config.isWin?2:1];
};

var getModule = function() {
  var parent = module.parent;
  if(parent) {
    if(parent.id) {
      if(parent.id === '.'){
        return 'main';
      } else {
        return parent.id;
      }
    } else {
      return parent;
    }
  } else {
    return 'unknown';
  }
};

var log = function(msg) {
  var line = getLineNumber();
  var module = getModule();
  util.puts('[' + module + ':' + line + ']', msg);
};

var createLogger = function(level) {
  return function(msg) {
    if(config.debugLevel >= config.DEBUG_LEVELS[level].priority) {
      log(msg);
    }
  };
};

module.exports = function(opts) {
  var options = opts || {};
  var logger = {
    options: options,
    log: log
  };
  for (var level in config.DEBUG_LEVELS) {
    logger[level] = createLogger(level);
  }
  return logger;
};