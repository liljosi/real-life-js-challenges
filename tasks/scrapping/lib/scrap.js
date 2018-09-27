
const requestLib = require('../lib/request/getHTML')
const cheerioLib = require('../lib/cheerio/getHeaders')
const googleLib = require('../lib/google/translate')
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
  translate (titles, targetLanguage, cb) {
    googleLib.translateTitles(titles, targetLanguage, (error, response) => {
      if (error) {
        cb(error)
      } else {
        cb(null, response)
      }
    })
  }
}

module.exports = Scrap
