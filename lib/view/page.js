/**
 * Page
 */

'use strict';


/**
 * Dependencies
 */

// Node.js
var path  = require('path');
var fs    = require('fs');

// Internal modules
var utils = require('../utils');




/**
 * Export the `Page` module.
 */
module.exports = Page;




/**
 * Render with the given `options` and callback `fn(err, str)`.
 *
 * @param {Object} options
 * @param {Function} fn
 * @api private
 */

Page.prototype.render = function(options, fn) {
  this.Engine(this.path, options, fn);
};