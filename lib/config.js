/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */

var path = require('path');

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

