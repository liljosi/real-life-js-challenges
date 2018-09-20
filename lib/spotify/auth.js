const SpotifyWebApi = require('spotify-web-api-node')
const logger = require('../../lib/')
require('dotenv').config()
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const grant_type = 'client_credentials'

const auth = async () => {
  const spotifyApi = new SpotifyWebApi({clientId, clientSecret, grant_type})
  try {
    let response = await spotifyApi.clientCredentialsGrant()
    spotifyApi.setAccessToken(response.body['access_token'])
    return spotifyApi
  } catch (error) {
    throw error
  }
}

module.exports = {auth}
