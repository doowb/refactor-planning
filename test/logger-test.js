/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */
module.exports.myTest = function(test) {
  
  test.expect(1);

  test.ok(true, "this assertion should pass");

  test.done();

};

module.exports.log = function(test) {
  
  var logger = require('../lib/logger')();
  logger.log('Logging an error with some module and line number information');

  test.done();

};