const authLib = require('./auth')

const getUserPlaylistByName = async (userId) => {
  let authData = await authLib.auth()
  authData.getUserPlaylists(userId)
    .then(data => {
      return data.body
    })
    .catch(error => {
      return {errors: [error]}
    })
}
const getPlaylistSongs = async (userId, playlistId) => {
  let authData = await authLib.auth()
  authData.getPlaylist(userId, playlistId)
    .then(data => {
      return data.body.tracks.items
    })
    .catch(error => {
      return {errors: [error]}
    })
}
