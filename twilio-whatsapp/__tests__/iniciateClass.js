const Twilio = require('../lib/twilio/index')

it('Iniciates class fails when wrong param sent', () => {
  expect(() => new Twilio('holaaa', 23232)).toThrow(Error)
})
it('Iniciates class', () => {
  let message = new Twilio('holaaa', '+523121949384')
})
