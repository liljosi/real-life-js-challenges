const cloudinary = require('cloudinary')
require('dotenv').config()
const logger = require('../logger')
let cloudinaryCredentials = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
}
cloudinary.config(cloudinaryCredentials)

const uploadImage = async (image, publicId) => {
  try {
    let upload = await cloudinary.v2.uploader.upload(image, {public_id: publicId})
    return upload.url
  } catch (error) {
    logger.error(error)
    throw error
  }
}
const resizeUploadedImage = async (imageUrl) => {
  try {
    const resizedImage = await cloudinary.image(imageUrl, { width: 800, height: 600, crop: 'scale' })
    return resizedImage
  } catch (error) {
    logger.error(error)
    throw error
  }
}
const getUploadedImages = async () => {
  try {
    let images = await cloudinary.v2.api.resources({ type: 'upload' })
    return images
  } catch (error) {
    logger.error(error)
    throw error
  }
}

module.exports = {uploadImage, resizeUploadedImage, getUploadedImages}
