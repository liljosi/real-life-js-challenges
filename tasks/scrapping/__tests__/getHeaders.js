const Scrap = require('../lib/main')
const link = 'http://www.jornada.com.mx/ultimas/deportes/'

it('gets headers', done => {
  const scrapHeaders = new Scrap(link)
  scrapHeaders.headers((error, response) => {
    if (error) {
      console.log(error)
    } else {
      console.log(response)
      done()
    }
  }, 30000)
})
