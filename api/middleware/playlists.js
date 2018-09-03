const spotifyPlaylistsLib = require('../../lib/spotify/playlists')

const getPlaylist = (req, res, next) => {
  let {playlist: playlistName} = req.params
  const playlist = spotifyPlaylistsLib.getUserPlaylistByName(playlistName)
  res.json(playlist)
}

module.exports = getPlaylist
