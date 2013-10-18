/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */

var isWin = !!process.platform.match(/^win/);

var getLineNumber = function() {
  var error = new Error();
  return error.stack.split('\n')[3].split(':')[isWin?2:1];
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
  setTimeout(function() {
    console.log('[' + module + ':' + line + ']', msg);
  }, 0);  
};

module.exports = logger = function(opts) {
  var options = opts || {};
  return {
    options: options,
    log: log
  };
};