const expect = require('chai').expect
const playlistLib = require('../lib/spotify/playlists')
const authLib = require('../lib/spotify/auth')

const userId = '07eoivmqhpamcrrsil14vfz07'
const playlistId = '5F2lnUg2du5po7pNMQqEVN'
describe('Getting user playlists and playlist tracks', () => {
  it('gets users playlists', () => {
    playlistLib.getUserPlaylistByName(userId)
      .then(data => {
        expect(data).to.be.ok
      })
  })
  it('should return error if clientId not sent when getting users playlists', () => {
    playlistLib.getUserPlaylistByName('')
      .catch(error => {
        expect(error).to.be.ok
      })
  })
  it('gets users playlist songs', () => {
    playlistLib.getPlaylistSongs(userId, playlistId)
      .then(data => {
        expect(data).to.be.ok
      })
  })
  it('should return error if clientId not sent when getting songs from playlist', () => {
    playlistLib.getPlaylistSongs('', playlistId)
      .catch(error => {
        expect(error).to.be.ok
      })
  })
  it('should return error if playlistId not sent when getting songs from playlist', () => {
    playlistLib.getPlaylistSongs(userId, '')
      .catch(error => {
        expect(error).to.be.ok
      })
  })
})
