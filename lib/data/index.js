/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */

var nosql = require('nosql');
var config = require('../config');
var logger = require('../logger')();

var data = module.exports = {};

data.init = function(options) {
  this.options = options || {};
  this.db = nosql.load(config.databasePath);
  //this.db.description('Assemble database');
};

data.create = function(obj, callback) {
  this.db.insert(obj, callback);
};

data.read = function(search, callback) {
  this.db.read(search, callback);
};

data.drop = function(callback) {
  this.db.drop(callback);
};