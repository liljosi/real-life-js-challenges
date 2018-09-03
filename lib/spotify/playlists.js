const authLib = require('../spotify/auth')
const SpotifyWebApi = require('spotify-web-api-node')

const getUserPlaylistByName = (playlistName) => {
  const token = authLib.auth()
  if (token.errors) {
    return {errors: [token.errors]}
  } else {
    const spotifyApi = new SpotifyWebApi({access_token: token})
    spotifyApi.getUserPlaylists(playlistName)
      .then(playlist => {
        return playlist.body
      })
      .catch(error => {
        return {errors: [error]}
      })
  }
}

module.exports = getUserPlaylistByName
