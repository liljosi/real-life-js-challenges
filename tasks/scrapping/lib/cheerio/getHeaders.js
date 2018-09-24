const cheerio = require('cheerio')

const getHeaders = (link, html) => {
  const headers = []
  if (link === 'http://www.jornada.com.mx/ultimas/deportes/') {
    const $ = cheerio.load(html)
    $('.ljn-title-listado').children().each((index, element) => {
      headers.push(element)
    })
    return headers
  } else if (link === 'https://elpais.com/tag/c/8a04e14f346d7e93abdc29d951c9484a') {
    const $ = cheerio.load(html)
    $('.articulo-titulo').children().each((index, element) => {
      headers.push(element)
    })
    return headers
  }
}

module.exports = {getHeaders}
