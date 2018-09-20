const imageProcessLib = require('../lib/aws/rekognition')
const imageLink = process.argv[2]
const logger = require('../lib/logger')

it('detects faces', async (done) => {
  await imageProcessLib.detectFaces(imageLink)
    .then(response => {
      logger.info(response)
      expect.objectContaining(response.FaceDetails)
    })
    .catch(error => {
      logger.error(error)
    })
  done()
})
