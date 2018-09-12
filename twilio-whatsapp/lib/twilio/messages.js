require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

const sendMessage = async (message, phone) => {
  try {
    let response = client.messages
      .create({
        body: message,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${phone}`
      })
    return response
  } catch (error) {
    return error
  }
}

module.exports = {sendMessage}
