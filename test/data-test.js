/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */

var inspect = require('util').inspect;

var logger = require('../lib/logger')();
var config = require('../lib/config');
var Data = require('../lib/data');

config.debugLevel = 5;

var data = new Data({});

module.exports.insert = function(test) {
  test.expect(1);
  data.insert({foo: 'bar'}, function(err, obj) {
    if(err) {
      logger.log('Error:');
      logger.log(inspect(err, null, 10));
    } else {
      logger.log('new object created');
      logger.log(inspect(obj, null, 10));
    }
  test.ok(true);
  test.done();
  });
};

module.exports.find = function(test) {
  test.expect(1);
  data.find({foo: 'bar'}, function(err, results) {
    if(err) {
      logger.log('Error');
      logger.log(inspect(err, null, 10));
    } else {
      logger.log('results: ');
      logger.log(inspect(results, null, 10));
    }
    test.ok(true);
    test.done();
  });
};

module.exports.findOne = function(test) {
  test.expect(1);
  data.findOne({foo: 'bar'}, function(err, results) {
    if(err) {
      logger.log('Error');
      logger.log(inspect(err, null, 10));
    } else {
      logger.log('results: ');
      logger.log(inspect(results, null, 10));
    }
    test.ok(true);
    test.done();
  });
};

module.exports.update = function(test) {
  test.expect(1);
  data.update({foo: 'bar'}, {foo: 'baz'}, {}, function(err, results) {
    if(err) {
      logger.log('Error');
      logger.log(inspect(err, null, 10));
    } else {
      logger.log('documents updated: ' + results);
    }
    test.ok(true);
    test.done();
  });
};