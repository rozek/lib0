'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var environment = require('./environment-7991e0f6.cjs');
var logging_common = require('./logging.common.cjs');
require('./map-9a5915e4.cjs');
require('./string-b1bee84b.cjs');
require('./conditions-f5c0c102.cjs');
require('./storage.cjs');
require('./function-35e8ddea.cjs');
require('./array-a1682de6.cjs');
require('./set-0f209abb.cjs');
require('./object-aad630ed.cjs');
require('./symbol-c5caa724.cjs');
require('./time-bc2081b9.cjs');
require('./metric.cjs');
require('./math-08e068f9.cjs');

/**
 * Isomorphic logging module with support for colors!
 *
 * @module logging
 */

const _nodeStyleMap = {
  [logging_common.BOLD]: '\u001b[1m',
  [logging_common.UNBOLD]: '\u001b[2m',
  [logging_common.BLUE]: '\x1b[34m',
  [logging_common.GREEN]: '\x1b[32m',
  [logging_common.GREY]: '\u001b[37m',
  [logging_common.RED]: '\x1b[31m',
  [logging_common.PURPLE]: '\x1b[35m',
  [logging_common.ORANGE]: '\x1b[38;5;208m',
  [logging_common.UNCOLOR]: '\x1b[0m'
};

/* c8 ignore start */
/**
 * @param {Array<string|Symbol|Object|number>} args
 * @return {Array<string|object|number>}
 */
const computeNodeLoggingArgs = (args) => {
  const strBuilder = [];
  const logArgs = [];
  // try with formatting until we find something unsupported
  let i = 0;
  for (; i < args.length; i++) {
    const arg = args[i];
    // @ts-ignore
    const style = _nodeStyleMap[arg];
    if (style !== undefined) {
      strBuilder.push(style);
    } else {
      if (arg.constructor === String || arg.constructor === Number) {
        strBuilder.push(arg);
      } else {
        break
      }
    }
  }
  if (i > 0) {
    // create logArgs with what we have so far
    strBuilder.push('\x1b[0m');
    logArgs.push(strBuilder.join(''));
  }
  // append the rest
  for (; i < args.length; i++) {
    const arg = args[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs
};
/* c8 ignore stop */

/* c8 ignore start */
const computeLoggingArgs = environment.supportsColor
  ? computeNodeLoggingArgs
  : logging_common.computeNoColorLoggingArgs;
/* c8 ignore stop */

/**
 * @param {Array<string|Symbol|Object|number>} args
 */
const print = (...args) => {
  console.log(...computeLoggingArgs(args));
};

/* c8 ignore start */
/**
 * @param {Array<string|Symbol|Object|number>} args
 */
const warn = (...args) => {
  console.warn(...computeLoggingArgs(args));
};
/* c8 ignore stop */

/**
 * @param {Error} err
 */
/* c8 ignore start */
const printError = (err) => {
  console.error(err);
};
/* c8 ignore stop */

/**
 * @param {string} _url image location
 * @param {number} _height height of the image in pixel
 */
/* c8 ignore start */
const printImg = (_url, _height) => {
  // console.log('%c                ', `font-size: ${height}x; background: url(${url}) no-repeat;`)
};
/* c8 ignore stop */

/**
 * @param {string} base64
 * @param {number} height
 */
/* c8 ignore next 2 */
const printImgBase64 = (base64, height) =>
  printImg();

/**
 * @param {Array<string|Symbol|Object|number>} args
 */
/* c8 ignore next 3 */
const group = (...args) => {
  console.group(...computeLoggingArgs(args));
};

/**
 * @param {Array<string|Symbol|Object|number>} args
 */
/* c8 ignore next 3 */
const groupCollapsed = (...args) => {
  console.groupCollapsed(...computeLoggingArgs(args));
};

/* c8 ignore next 3 */
const groupEnd = () => {
  console.groupEnd();
};

/**
 * @param {function():Node} _createNode
 */
/* c8 ignore next 2 */
const printDom = (_createNode) => {};

/**
 * @param {HTMLCanvasElement} canvas
 * @param {number} height
 */
/* c8 ignore next 2 */
const printCanvas = (canvas, height) =>
  printImg(canvas.toDataURL());

/**
 * @param {Element} _dom
 */
/* c8 ignore next */
const createVConsole = (_dom) => {};

/**
 * @param {string} moduleName
 * @return {function(...any):void}
 */
/* c8 ignore next */
const createModuleLogger = (moduleName) => logging_common.createModuleLogger(print, moduleName);

exports.BLUE = logging_common.BLUE;
exports.BOLD = logging_common.BOLD;
exports.GREEN = logging_common.GREEN;
exports.GREY = logging_common.GREY;
exports.ORANGE = logging_common.ORANGE;
exports.PURPLE = logging_common.PURPLE;
exports.RED = logging_common.RED;
exports.UNBOLD = logging_common.UNBOLD;
exports.UNCOLOR = logging_common.UNCOLOR;
exports.createModuleLogger = createModuleLogger;
exports.createVConsole = createVConsole;
exports.group = group;
exports.groupCollapsed = groupCollapsed;
exports.groupEnd = groupEnd;
exports.print = print;
exports.printCanvas = printCanvas;
exports.printDom = printDom;
exports.printError = printError;
exports.printImg = printImg;
exports.printImgBase64 = printImgBase64;
exports.warn = warn;
//# sourceMappingURL=logging.node.cjs.map
