/**
 * Convert
 */




/**
 * Convert markdown to html
 * Just a thought, we can
 */

var markdown = function (str, options) {
  var md;
  try {
    md = require('markdown');
  } catch (err) {
    try {
      md = require('discount');
    } catch (err) {
      try {
        md = require('markdown-js');
      } catch (err) {
        try {
          md = require('showdown');
        } catch (err) {
          try {
            md = require('marked');
          } catch (err) {
            throw new
            Error('Cannot find markdown library, install markdown, discount, markdown-js or marked.');
          }
        }
      }
    }
  }
  return md.parse(str, options);
};