const messageLib = require('../lib/twilio/messages')

it('sends message to twilio user', async () => {
  let message = 'my name is Josue'
  let to = '+523121949384'
  expect.assertions(1)
  const response = await messageLib.sendMessage(message, to)
  expect(response).toHaveProperty('body')
})
