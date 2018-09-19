const image = '/Users/sandra/Downloads/presi.jpg'
const cloudLib = require('../lib/cloudinary/upload')
const imageUrl = 'https://cloudinary.com/console/media_library/asset/manage/summary/image/upload/presi'
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
