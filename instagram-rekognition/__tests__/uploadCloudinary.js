const image = '/Users/sandra/Downloads/presi.jpg'
const cloudLib = require('../lib/cloudinary/upload')
const imageUrl = 'https://res.cloudinary.com/liljosu/image/upload/v1537389563/presi.jpg'
const publicId = 'presi'
const logger = require('../lib/logger')
it('uploads image to cloudinary', async () => {
  await cloudLib.uploadImage(image, publicId)
    .then(response => {
      expect.objectContaining(response)
    })
    .catch(error => {
      logger.error(error)
    })
})
it('scales uploaded image', async () => {
  await cloudLib.resizeUploadedImage(imageUrl)
    .then(response => {
      expect.objectContaining(response)
    })
    .catch(error => {
      logger.error(error)
    })
})
