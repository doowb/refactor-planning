/**
 * Config
 */

// Node.js
var path = require('path');


// The module to be exported.
var config = module.exports = {};


config.isWin = !!process.platform.match(/^win/);

config.DEBUG_LEVELS = {
  error: { priority: 1 },
  warn:  { priority: 2 },
  info:  { priority: 3 },
  debug: { priority: 4 },
  trace: { priority: 5 },
};

config.debugLevel = 2;

config.databasePath = path.join(__dirname, 'data', 'database.nosql');