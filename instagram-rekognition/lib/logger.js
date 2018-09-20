const logger = require('winston')

logger.add(new logger.transports.File({filename: 'console.log', level: 'debug'}))
logger.add(new logger.transports.File({filename: 'log.log', level: 'info'}))
logger.add(new logger.transports.File({filename: 'errors.log', level: 'error'}))
module.exports = logger
