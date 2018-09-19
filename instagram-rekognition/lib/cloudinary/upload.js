const cloudinary = require('cloudinary')
require('dotenv').config()
let cloudinaryCredentials = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
}
cloudinary.config(cloudinaryCredentials)

const uploadImage = async (image, publicId) => {
  try {
    let upload = await cloudinary.v2.uploader.upload(image, {public_id: publicId})
    return upload
  } catch (error) {
    throw error
  }
}
const resizeUploadedImage = async (imageUrl) => {
  try {
    const resizedImage = await cloudinary.image(imageUrl, { width: 800, height: 600, crop: 'scale' })
    return resizedImage
  } catch (error) {
    throw error
  }
}

module.exports = {uploadImage, resizeUploadedImage}
