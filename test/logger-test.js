/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */
var config = require('../lib/config');
var logger = require('../lib/logger')();

module.exports.myTest = function(test) {
  
  test.expect(1);

  test.ok(true, 'default test');

  test.done();

};

module.exports.log = function(test) {
  logger.log('Logging an error with some module and line number information');
  test.done();
};

module.exports.error = function(test) {
  config.debugLevel = 1;
  logger.error('This is a test error message.');
  test.done();
};

module.exports.warn = function(test) {
  config.debugLevel = 2;
  logger.warn('This is a test warn message.');
  test.done();
};

module.exports.info = function(test) {
  config.debugLevel = 3;
  logger.info('This is a test info message.');
  test.done();
};

module.exports.debug = function(test) {
  config.debugLevel = 4;
  logger.debug('This is a test debug message.');
  test.done();
};

module.exports.trace = function(test) {
  config.debugLevel = 5;
  logger.trace('This is a test trace message.');
  test.done();
};

module.exports.all = function(test) {
  config.debugLevel = 5;
  logger.error('ALL: This is a test error message.');
  logger.warn('ALL: This is a test warn message.');
  logger.info('ALL: This is a test info message.');
  logger.debug('ALL: This is a test debug message.');
  logger.trace('ALL: This is a test trace message.');
  test.done();
};