const image = process.argv[2]
const cloudLib = require('../lib/cloudinary/upload')
const imageUrl = process.argv[3]
const publicId = process.argv[4]
const logger = require('../lib/logger')

it('uploads image to cloudinary', async () => {
  await cloudLib.uploadImage(image, publicId)
    .then(response => {
      expect.objectContaining(response)
      logger.debug(response)
    })
    .catch(error => {
      logger.error(error)
    })
})
it('scales uploaded image', async () => {
  await cloudLib.resizeUploadedImage(imageUrl)
    .then(response => {
      expect.objectContaining(response)
      logger.debug(response)
    })
    .catch(error => {
      logger.error(error)
    })
})
it('gets uploaded images', async () => {
  await cloudLib.getUploadedImages()
    .then(response => {
      logger.debug(response)
      expect.objectContaining(response.resources)
    })
    .catch(error => {
      logger.error(error)
    })
})
