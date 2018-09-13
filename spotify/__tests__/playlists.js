const playlistLib = require('../lib/spotify/playlists')
require('dotenv').config()
const userId = process.env.USER_ID
const playlistId = process.env.PLAYLIST_ID

it('if token is set playlists are recovered', async () => {
  let playlist = await playlistLib.getUserPlaylistByName(userId)
  expect(playlist).toHaveProperty('body')
})
test('if token is set it gets users playlist songs', async () => {
  let songs = await playlistLib.getPlaylistSongs(userId, playlistId)
  expect(songs.body).toHaveProperty('tracks')
})
