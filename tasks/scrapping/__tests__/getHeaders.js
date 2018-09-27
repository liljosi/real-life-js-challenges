const Scrap = require('../lib/scrap')
const link = 'http://www.jornada.com.mx/ultimas/deportes/'
const logger = require('../lib/logger')
let targetLanguage = 'fr'
let titles = []
const scrapHeaders = new Scrap(link)
it('gets headers', done => {
  scrapHeaders.headers((error, response) => {
    if (error) {
      done(error)
    } else {
      titles = response
      expect.arrayContaining(response)
      done()
    }
  }, 30000)
})
it('translates titles', done => {
  titles.map(title => {
    scrapHeaders.translate(title, targetLanguage, (error, response) => {
      if (error) {
        logger.error(error)
        done(error)
      } else {
        logger.debug(response)
        expect.arrayContaining(response)
        done()
      }
    })
  })
})
