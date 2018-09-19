const AWS = require('aws-sdk')
const fs = require('fs')
const logger = require('../logger')
require('dotenv').config()
AWS.config = new AWS.Config()
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
AWS.config.region = process.env.AWS_REGION
const rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'})

const detectFaces = async (imageLink) => {
  try {
    const rs = fs.readFileSync(imageLink, { encoding: 'base64' })
    console.log(rs)
    const params = {
      Image: {
        Bytes: rs
      }
    }
    const faceDetected = await rekognition.detectFaces(params).promise()
    return faceDetected
  } catch (error) {
    throw error
  }
}

module.exports = {detectFaces}
