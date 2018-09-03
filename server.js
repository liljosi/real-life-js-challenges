const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const playlistRoute = require('./api/routes/playlists')
app.use('/api', playlistRoute)

module.exports = app
