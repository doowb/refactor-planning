/**
 * Layout
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
 * Export the `layout` module.
 */

module.exports = Layout;


/**
 * TODO:
 *  - stackLayout (function)
 *  - layoutStack (object)
 *  - flattenLayout (function)
 *  - injectContent (function)
 *
 */



/**
 * Render with the given `options` and callback `fn(err, str)`.
 *
 * @param {Object} options
 * @param {Function} fn
 * @api private
 */

Layout.prototype.render = function(options, fn) {
  this.Engine(this.path, options, fn);
};