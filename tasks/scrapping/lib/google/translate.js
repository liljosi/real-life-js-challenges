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

const translateTitles = async (text, targetLanguage) => {
  let params = desiredTranslation(targetLanguage, text)
  if (params.TargetLanguageCode !== 'en') {
    let param = {
      Text: text,
      SourceLanguageCode: 'es',
      TargetLanguageCode: 'en'
    }
    try {
      const firstTranslation = await translate.translateText(param)
      const finalTranslation = await translate.translateText({Text: firstTranslation.TranslatedText, SourceLanguageCode: 'en', TargetLanguageCode: targetLanguage})
      return finalTranslation
    } catch (error) {
      throw error
    }
  } else {
    try {
      const translation = await translate.translateText(params)
      return translation
    } catch (error) {
      throw error
    }
  }
}

module.exports = {translateTitles}
