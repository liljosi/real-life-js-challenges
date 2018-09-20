const expect = require('chai').expect
const playlistLib = require('../lib/spotify/playlists')

const userId = '07eoivmqhpamcrrsil14vfz07'
const playlistId = '5F2lnUg2du5po7pNMQqEVN'

describe('Getting user playlists and playlist tracks', () => {
  it('if token is not set no playlists are recovered', async () => {
    let playlist = await playlistLib.getUserPlaylistByName(userId)
    expect(playlist.errors).to.be.ok     
  })
   it('if token is set playlists are recovered', async () => {
    let playlist = await playlistLib.getUserPlaylistByName(userId)
    expect(playlist.body).to.be.ok
  })
  it('should return error if clientId not sent when getting users playlists', async () => {
    let playlist = await playlistLib.getUserPlaylistByName('')
    expect(playlist).to.not.be.ok
  })
   it('if token not set users playlist songs wont be recovered', async () => {
    let songs = await playlistLib.getPlaylistSongs(userId, playlistId)
    expect(songs.errors).to.be.ok
  })
  it('if token is set it gets users playlist songs', async () => {
    let songs = await playlistLib.getPlaylistSongs(userId, playlistId)
    expect(songs.body).to.be.ok
  })
})
