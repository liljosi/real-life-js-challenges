var express = require('express')
var router = express.Router()
const spotifyLib = require('../lib/spotify/playlists')
const userId = '07eoivmqhpamcrrsil14vfz07'
const playlistId = '5F2lnUg2du5po7pNMQqEVN'
const songs = async (userId, playlistId) => {
  try {
    let tracks = await spotifyLib.getPlaylistSongs(userId, playlistId)
    return tracks
  } catch (error) {
    throw error
  }
}

router.get('/', async (req, res, next) => {
  let playlistSongs = await songs(userId, playlistId)
  playlistSongs
    .then(playlistSongs => {
      res.render('index', { songUrl: playlistSongs.body.tracks.items[0].track.uri, title: 'Challenge' })
    })
    .catch(error => {
      throw new Error(error)
    })
})

module.exports = router
