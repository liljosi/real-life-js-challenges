const htmlLib = require('../lib/request/getHTML')
const headerLib = require('../lib/cheerio/getHeaders')
const logger = require('../lib/logger')
const link = 'http://www.jornada.com.mx/ultimas/deportes/'

it('gets headers', done => {
  htmlLib.getHTML(link, (error, body) => {
    if (error) {
      logger.error(error)
    } else {
      let headers = headerLib.getHeaders(link, body)
      console.log(headers)
      done()
    }
  }, 30000)
})
