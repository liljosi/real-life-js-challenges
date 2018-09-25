const cheerio = require('cheerio')
const JORNADA = 'http://www.jornada.com.mx/ultimas/deportes/'
const PAIS = 'https://elpais.com/tag/c/8a04e14f346d7e93abdc29d951c9484a'

const getClasses = type => {
  if (type === JORNADA) {
    return '.ljn-title-listado'
  } else if (type === PAIS) {
    return '.articulo-titulo'
  }
}

const getHeaders = (link, html) => {
  link = link.toLowerCase()
  const classes = getClasses(link)
  const headers = []
  const $ = cheerio.load(html)
  $(classes).children().each((index, element) => {
    const title = $(element).text()
    headers.push(title)
  })
  return headers
}

module.exports = {getHeaders}
