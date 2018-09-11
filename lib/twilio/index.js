const messageLib = require('../twilio/messages')
let body, to

class Twilio {
  constructor (message, phone) {
    if (typeof message !== 'string' || typeof phone !== 'string') {
      throw new Error('Invalid parameter')
    }
    body = message
    to = phone
  }
  async send () {
    let sentMessage = await messageLib.sendMessage(body, to)
    return sentMessage
  }
}

module.exports = Twilio
