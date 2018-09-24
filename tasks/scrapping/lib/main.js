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
    requestLib.getHTML(link, (error, response, body) => {
      if (error) {
        cb(error)
      } else {
        if (response.status === 200) {
          let headers = cheerioLib.getHeaders(body)
          cb(headers)
        }
      }
    })
  }
}

module.exports = Scrap
