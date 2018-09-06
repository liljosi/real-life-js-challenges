const expect = require('chai').expect
const authLib = require('../lib/spotify/auth')

describe('Testing spotify authentication', async () => {
  it('if credentials are not sent it will be a bad request', async () => {
    let response = await authLib.auth()
    expect(response.errors[0].statusCode).to.equal(400)
  })
  it('if credentials are sent token will be obtained for further requests', async () => {
    let response = await authLib.auth()
    expect(response._credentials.accessToken).to.be.ok
  })
})

