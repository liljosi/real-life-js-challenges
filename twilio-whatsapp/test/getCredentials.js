require('dotenv').config()
const expect = require('chai').expect

describe('Get credentials from environment', () => {
  it('get auth credentials from environment variables', () => {
    const accountSid = process.env.ACCOUNT_SID
    const authToken = process.env.AUTH_TOKEN
    console.log(accountSid, authToken)
    expect(accountSid, authToken).to.be.ok
  })
})