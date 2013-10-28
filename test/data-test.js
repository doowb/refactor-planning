/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */

var logger = require('../lib/logger')();
var config = require('../lib/config');
var data = require('../lib/data');

config.debugLevel = 5;

data.init();

module.exports.create = function(test) {
  
  test.expect(1);

  data.create({foo: 'bar'}, function() {
    console.log('new object created');
  });

  test.ok(true);
  test.done();

};

module.exports.read = function(test) {
  
  test.expect(1);

  data.read(function() { return true; },
    function(results) {
      console.log(results.length + ' items found.');
    });

  test.ok(true);

  test.done();

};