const uploadLib = require('../lib/aws/upload')
const bucketName = 'yoshiman'
const mimeType = 'image/jpg'
const imageName = 'lepresi.jpg'
const imageLink = '/Users/sandra/Downloads/presi.jpg'
const logger = require('../lib/logger')

it('creates a bucket in S3 to store images', async () => {
  await uploadLib.createBucket(bucketName)
    .then(data => {
      expect.stringContaining(bucketName)
    })
    .catch(error => {
      logger.error(error)
    })
})
it('uploads an image to an s3 bucket', async () => {
  await uploadLib.uploadImage(bucketName, imageName, imageLink, mimeType)
    .then(data => {
      logger.info(data)
      expect.objectContaining(data)
    })
    .catch(error => {
      logger.info(error)
    })
})
