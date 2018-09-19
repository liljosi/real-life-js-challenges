const logger = require('winston')
const options = {
  file: {
    level: 'info',
    filename: `../log.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
}
logger.add(new logger.transports.File(options.file), new logger.transports.Console(options.console))
module.exports = logger
