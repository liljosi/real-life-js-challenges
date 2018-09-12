const expect = require('chai').expect
const Twilio = require('../lib/twilio/index')

describe('Iniciate Twilio class correctly', () => {
  it('Iniciates class fails when wrong param sent', () => {
    let message = new Twilio('holaaa', 23232)
  })
  it('Iniciates class', () => {
    let message = new Twilio('holaaa', '+523121949384')
  })
})