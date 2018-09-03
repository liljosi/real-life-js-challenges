const nconf = require('nconf')
const Path = require('path')
const debug = require('debug')('management:lib:config')
require('dotenv').config()

module.exports = function (path = Path.join(__dirname, '../', 'config')) {
  debug('loading config')
  nconf.argv().env()
  const environment = nconf.get('NODE_ENV') || 'development'
  nconf.file(environment, Path.join(path, environment.toLowerCase() + '.json'))
  nconf.file(Path.join(path, 'default.json'))
  // All secrets should be loaded here via environment variables
  // these values can be overridden in environment files.
  nconf.defaults({
    spotify: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    }
  })
  return nconf
}
