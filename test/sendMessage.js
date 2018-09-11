const expect = require('chai').expect
const messageLib = require('../lib/twilio/messages')

describe('Send a message to whatsapp user via twilio', async () => {
  it('sends message to twilio user', async () => {
    let message = 'my name is Josue'
    let to = '+523121949384'
    const response = await messageLib.sendMessage(message, to)
    expect(response.body).to.be.ok
  })
})
