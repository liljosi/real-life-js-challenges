const AWS = require('aws-sdk')
const logger = require('../logger')
require('dotenv').config()
AWS.config = new AWS.Config()
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
AWS.config.region = process.env.AWS_REGION
const translate = new AWS.Translate({apiVersion: '2017-07-01'})

const desiredTranslation = (targetLanguage, text) => {
  if (targetLanguage === 'en') {
    return {
      Text: text,
      SourceLanguageCode: 'es',
      TargetLanguageCode: 'en'
    }
  } else {
    return {
      Text: text,
      SourceLanguageCode: 'es',
      TargetLanguageCode: targetLanguage
    }
  }
}

const translateTitles = (text, targetLanguage, cb) => {
  let params = desiredTranslation(targetLanguage, text)
  if (params.TargetLanguageCode !== 'en') {
    let param = {
      Text: text,
      SourceLanguageCode: 'es',
      TargetLanguageCode: 'en'
    }
    translate.translateText(param, (error, response) => {
      if (error) {
        logger.error(error)
      } else {
        translate.translateText({Text: response.TranslatedText, SourceLanguageCode: 'en', TargetLanguageCode: targetLanguage}, (error, response) => {
          if (error) {
            cb(error)
          } else {
            cb(null, response)
          }
        })
      }
    })
  } else {
    translate.translateText(params, (error, response) => {
      if (error) {
        logger.error(error)
        cb(error)
      } else {
        cb(null, response)
      }
    })
  }
}

module.exports = {translateTitles}
