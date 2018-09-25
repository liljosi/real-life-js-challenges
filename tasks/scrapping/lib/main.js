
const requestLib = require('../lib/request/getHTML')
const cheerioLib = require('../lib/cheerio/getHeaders')
let link

class Scrap {
  constructor (url) {
    if (typeof url !== 'string') {
      throw new Error('Invalid url, must be a string')
    }
    link = url
  }
  headers (cb) {
    requestLib.getHTML(link, (error, body) => {
      if (error) {
        cb(error)
      } else {
        let headers = cheerioLib.getHeaders(link, body)
        cb(null, headers)
      }
    })
  }
}

module.exports = Scrap
