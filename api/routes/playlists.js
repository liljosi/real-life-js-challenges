const router = require('express').Router()
const {getPlaylist} = require('../middleware/playlists')

router.route('/user/:id/playlists/:playlist')
  .get(getPlaylist)

module.exports = router
