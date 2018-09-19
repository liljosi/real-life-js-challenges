const imageProcessLib = require('../lib/aws/rekognition')
const imageLink = '/Users/sandra/Downloads/presi.jpg'

it('detects faces', async () => {
  await imageProcessLib.detectFaces(imageLink)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
})
