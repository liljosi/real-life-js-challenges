const SpotifyWebApi = require('spotify-web-api-node')
const config = require('../../config')()
const clientId = config.get('spotify: client_id')
const clientSecret = config.get('spotify: client_secret')

const auth = () => {
  const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
  })
  spotifyApi.clientCredentialsGrant().then(data => {
    // console.log('The access token expires in ' + data.body['expires_in'])
    // console.log('The access token is ' + data.body['access_token'])
    // spotifyApi.setAccessToken(data.body['access_token'])
    return data.body['access_token']
  })
    .catch(error => {
      return {errors: [error]}
    })
}

module.exports = auth
