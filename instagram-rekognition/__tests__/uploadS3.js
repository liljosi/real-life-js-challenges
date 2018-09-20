const uploadLib = require('../lib/aws/upload')
const bucketName = process.argv[2]
const mimeType = process.argv[3]
const imageName = process.argv[4]
const imageLink = process.argv[5]
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
      logger.debug(data)
      expect.objectContaining(data)
    })
    .catch(error => {
      logger.error(error)
    })
})
