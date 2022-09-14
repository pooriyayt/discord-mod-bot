const chalk = require('chalk');
const util = require('util');

const parseArguments = (args) => {
  return args.map((item) => {
    if (typeof item === 'string') {
      return item;
    }

    return util.inspect(item, { colors: false, depth: null });
  });
};

const prepareMessage = (chalkStyle, prefix, args) => {
  return chalkStyle(`(${new Date().toLocaleTimeString()}) - ${chalk.bold(prefix)} - `, ...parseArguments(Array.prototype.slice.call(args)));
};

const log = (...arguments) => {
  console.log(prepareMessage(chalk.white, '[LOG]', arguments));
};

const info = (...arguments) => {
  console.info(prepareMessage(chalk.cyan, '[INFO]', arguments));
};

const error = (...arguments) => {
  console.error(prepareMessage(chalk.red, '[ERROR]', arguments));
};

const fatal = (...arguments) => {
  console.error(prepareMessage(chalk.red, '[FATAL]', arguments));
};

const warn = (...arguments) => {
  console.warn(prepareMessage(chalk.yellow, '[WARN]', arguments));
};

const debug = (...arguments) => {
  console.debug(prepareMessage(chalk.green, '[DEBUG]', arguments));
};

const clear = () => {
  console.clear();
};

module.exports = {
  log,
  info,
  error,
  fatal,
  warn,
  debug,
  clear
};
