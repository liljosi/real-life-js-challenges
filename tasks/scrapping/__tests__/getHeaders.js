const Scrap = require('../lib/scrap')
const link = 'http://www.jornada.com.mx/ultimas/deportes/'
const logger = require('../lib/logger')
let targetLanguage = 'en'
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
it('translates titles', async () => {
  titles.map(async title => {
    await scrapHeaders.translate(title, targetLanguage)
      .then(translatedTitle => {
        logger.debug(translatedTitle)
      })
      .catch(error => {
        logger.error(error)
      })
  })
})
