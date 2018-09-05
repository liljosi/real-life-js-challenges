const expect = require('chai').expect
const authLib = require('../lib/spotify/auth')
const SpotifyWebApi = require('spotify-web-api-node')

describe('Testing spotify authentication', async () => {
  it('/api/token spotify access_token obtained and set', async () => {
    let response = await authLib.auth()
    expect(response).to.be.ok
  })
})
