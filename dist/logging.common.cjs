'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var symbol = require('./symbol-c5caa724.cjs');
var time = require('./time-bc2081b9.cjs');
var environment = require('./environment-7991e0f6.cjs');
var _function = require('./function-35e8ddea.cjs');
require('./metric.cjs');
require('./math-08e068f9.cjs');
require('./map-9a5915e4.cjs');
require('./string-b1bee84b.cjs');
require('./conditions-f5c0c102.cjs');
require('./storage.cjs');
require('./array-a1682de6.cjs');
require('./set-0f209abb.cjs');
require('./object-aad630ed.cjs');

const BOLD = symbol.create();
const UNBOLD = symbol.create();
const BLUE = symbol.create();
const GREY = symbol.create();
const GREEN = symbol.create();
const RED = symbol.create();
const PURPLE = symbol.create();
const ORANGE = symbol.create();
const UNCOLOR = symbol.create();

/* c8 ignore start */
/**
 * @param {Array<string|Symbol|Object|number>} args
 * @return {Array<string|object|number>}
 */
const computeNoColorLoggingArgs = args => {
  const logArgs = [];
  // try with formatting until we find something unsupported
  let i = 0;
  for (; i < args.length; i++) {
    const arg = args[i];
    if (arg.constructor === String || arg.constructor === Number) ; else if (arg.constructor === Object) {
      logArgs.push(JSON.stringify(arg));
    }
  }
  return logArgs
};
/* c8 ignore stop */

const loggingColors = [GREEN, PURPLE, ORANGE, BLUE];
let nextColor = 0;
let lastLoggingTime = time.getUnixTime();

/* c8 ignore start */
/**
 * @param {function(...any):void} _print
 * @param {string} moduleName
 * @return {function(...any):void}
 */
const createModuleLogger = (_print, moduleName) => {
  const color = loggingColors[nextColor];
  const debugRegexVar = environment.getVariable('log');
  const doLogging = debugRegexVar !== null &&
    (debugRegexVar === '*' || debugRegexVar === 'true' ||
      new RegExp(debugRegexVar, 'gi').test(moduleName));
  nextColor = (nextColor + 1) % loggingColors.length;
  moduleName += ': ';
  return !doLogging
    ? _function.nop
    : (...args) => {
      const timeNow = time.getUnixTime();
      const timeDiff = timeNow - lastLoggingTime;
      lastLoggingTime = timeNow;
      _print(
        color,
        moduleName,
        UNCOLOR,
        ...args.map((arg) =>
          (typeof arg === 'string' || typeof arg === 'symbol')
            ? arg
            : JSON.stringify(arg)
        ),
        color,
        ' +' + timeDiff + 'ms'
      );
    }
};
/* c8 ignore stop */

exports.BLUE = BLUE;
exports.BOLD = BOLD;
exports.GREEN = GREEN;
exports.GREY = GREY;
exports.ORANGE = ORANGE;
exports.PURPLE = PURPLE;
exports.RED = RED;
exports.UNBOLD = UNBOLD;
exports.UNCOLOR = UNCOLOR;
exports.computeNoColorLoggingArgs = computeNoColorLoggingArgs;
exports.createModuleLogger = createModuleLogger;
//# sourceMappingURL=logging.common.cjs.map
