const authLib = require('./auth')

const getUserPlaylistByName = async (userId) => {
  try {
    let authData = await authLib.auth()
    return authData.getUserPlaylists(userId)
  } catch (error) {
    return error
  }
}
const getPlaylistSongs = async (userId, playlistId) => {
  try {
    let authData = await authLib.auth()
    return authData.getPlaylist(userId, playlistId)
  } catch (error) {
    return error
  }
}

module.exports = {getUserPlaylistByName, getPlaylistSongs}
