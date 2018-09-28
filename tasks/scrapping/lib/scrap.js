
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
  async translate (titles, targetLanguage) {
    try {
      const translatedTitle = await googleLib.translateTitles(titles, targetLanguage)
      return translatedTitle
    } catch (error) {
      throw error
    }
  }
}

module.exports = Scrap
