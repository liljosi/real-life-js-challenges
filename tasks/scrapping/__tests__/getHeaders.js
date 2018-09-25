const Scrap = require('../lib/main')
const link = 'http://www.jornada.com.mx/ultimas/deportes/'
const logger = require('../lib/logger')
it('gets headers', done => {
  const scrapHeaders = new Scrap(link)
  scrapHeaders.headers((error, response) => {
    if (error) {
      done(error)
    } else {
      logger.debug(response)
      done()
    }
  }, 30000)
})
