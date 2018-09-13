require('dotenv').config()

test('get auth credentials from environment variables', () => {
  const accountSid = process.env.ACCOUNT_SID
  const authToken = process.env.AUTH_TOKEN
  expect(accountSid).toBeTruthy()
  expect(authToken).toBeTruthy()
})
