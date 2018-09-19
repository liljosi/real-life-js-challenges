const AWS = require('aws-sdk')
const cloudinary = require('cloudinary')
require('dotenv').config()
const fs = require('fs')
const logger = require('../logger')

AWS.config = new AWS.Config()
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
AWS.config.region = process.env.AWS_REGION
let cloudinaryCredentials = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
}
cloudinary.config(cloudinaryCredentials)
// const rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'})
const s3 = new AWS.S3({apiVersion: '2006-03-01'})

const createBucket = async (bucketName) => {
  try {
    const bucket = await s3.createBucket({Bucket: bucketName}).promise()
    return bucket
  } catch (error) {
    throw error
  }
}
const uploadImage = async (bucketName, imageName, imageLink, mimeType) => {
  try {
    cloudinary.image(imageLink)
    const rs = fs.createReadStream(imageLink)
    rs.on('open', () => {
      logger.info('OPEN')
    })
    rs.on('end', () => {
      logger.info('END')
    })
    rs.on('close', () => {
      logger.info('CLOSE')
    })
    logger.info('START UPLOAD')
    let params = {Bucket: bucketName, Key: imageName, Body: rs, ContentType: mimeType, ACL: 'public-read'}
    const response = await s3.upload(params).promise()
    return response
  } catch (error) {
    throw error
  }
}
module.exports = {createBucket, uploadImage}
