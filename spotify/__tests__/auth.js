const authLib = require('../lib/spotify/auth')

it('if credentials are not sent it will be a bad request', async () => {
  let response = await authLib.auth()
  expect(response.statusCode).toEqual(400)
})
it('if credentials are sent token will be obtained for further requests', async () => {
  let response = await authLib.auth()
  expect(response._credentials).toHaveProperty('accessToken')
})
