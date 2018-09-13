const SpotifyWebApi = require('spotify-web-api-node')
require('dotenv').config()
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

let authCredentials = {
  clientId: clientId,
  clientSecret: clientSecret,
  grant_type: 'client_credentials'
}

const auth = async () => {
  const spotifyApi = new SpotifyWebApi(authCredentials)
  try {
    let response = await spotifyApi.clientCredentialsGrant()
    spotifyApi.setAccessToken(response.body['access_token'])
    return spotifyApi
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {auth}
