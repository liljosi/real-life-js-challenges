const request = require('request')
const logger = require('../logger')
const getHTML = (url, cb) => {
  request(url, (error, response, body) => {
    if (error) {
      logger.error(error)
      cb(error)
    } else {
      if (response.statusCode >= 200) {
        cb(null, body)
      }
    }
  })
}

module.exports = {getHTML}
