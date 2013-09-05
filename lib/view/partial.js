/**
* Module dependencies.
*/

var path     = require('path')
  , fs       = require('fs')
  , utils    = require('./utils');

var dirname  = path.dirname
  , basename = path.basename
  , extname  = path.extname
  , exists   = path.existsSync || fs.existsSync
  , join     = path.join;


/**
* Expose `Partial`.
*/

module.exports = Partial;








/**
* Render with the given `options` and callback `fn(err, str)`.
*
* @param {Object} options
* @param {Function} fn
* @api private
*/

Partial.prototype.render = function(options, fn){
  this.engine(this.path, options, fn);
};