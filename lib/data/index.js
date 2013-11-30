/**
 * Database
 */

'use strict';


/**
 * Dependencies
 */

// node_modules
var nosql = require('nosql');

// internal modules
var config = require('../config');
var logger = require('../logger')();



/**
 * Export the `data` module
 */
var Data = module.exports = {};


/**
 * init
 */

Data.init = function(options) {
  this.options = options || {};
  this.db = nosql.load(config.databasePath);
  //this.db.description('Assemble database');
};

/**
 * create
 */

Data.create = function(obj, callback) {
  this.db.insert(obj, callback);
};

/**
 * read
 */

Data.read = function(search, callback) {
  this.db.read(search, callback);
};

/**
 * drop
 */

Data.drop = function(callback) {
  this.db.drop(callback);
};