const uploadLib = require('../lib/rekognition/upload')
const bucketName = 'yoshiman'
const mimeType = 'image/jpg'
const imageName = 'lepresi.jpg'
const imageLink = '/Users/sandra/Downloads/presi.jpg'

it('creates a bucket in S3 to store images', () => {
  const bucket = uploadLib.createBucket(bucketName)
  bucket
    .then(data => {
      expect.stringContaining(bucketName)
    })
})
it('uploads an image to an s3 bucket', () => {
  const upload = uploadLib.uploadImage(bucketName, imageName, imageLink, mimeType)
  upload
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
})
