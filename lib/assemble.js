/**
 * Create the main assemble object.
 *
 * Creating it like this instead of using a contructor
 * and doing assemble = new Assemble will allow us to
 * keep state across multiple requires.
 *
 */
var assemble = module.exports = {};


/**
 * Expose events that happen in assemble
 *
 * TODO: hash out what this really means
 *  - event emitter?
 *  - pub/sub through assemble.events?
 *  - promises?
 */
assemble.events = require('./events');


/**
 * Provide a way to specify plugins or middleware
 * that assemble can use.
 *
 * TODO:
 *  - Should this be called plugins or middleware?
 *  - What types of plugins are allowed?
 *  - Are plugins neccesary with events?
 * @type {[type]}
 */
assemble.plugins = require('./extensions/plugins');