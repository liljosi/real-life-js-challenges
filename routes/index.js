var express = require('express')
var router = express.Router()
const spotifyLib = require('../lib/spotify/playlists')

const songs = async (userId, playlistId) => {
  try {
    let tracks = await spotifyLib.getPlaylistSongs(userId, playlistId)
    return tracks
  } catch (error) {
    return error
  }
}

router.get('/', async (req, res, next) => {
  let playlistSongs = await songs('07eoivmqhpamcrrsil14vfz07', '5F2lnUg2du5po7pNMQqEVN')
  res.render('index', { songs: JSON.stringify(playlistSongs.body), title: 'Challenge' })
})

module.exports = router
