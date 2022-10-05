const authUser = require('../api/authUser')
const authUserUpdate = require('../api/authUserUpdate')
const sampleUser = require('../test/data/user')
const token = process.env.npm_config_token

describe('Authenticated user update', () => {
    test('Update user name', async() => {
        sampleUser.name = "Tony Almeida"
        const response = await authUserUpdate(token, sampleUser)
        expect(
            response.status
        ).toBe(200)
    })
    test('Verify updated user name', async() => {
        const response = await authUser(token)
        expect(
            response.data.name
        ).toBe("Tony Almeida")
    })
    test('Reset authenticated user', async() => {
        sampleUser.name = "Jack Bauer"
        const response = await authUserUpdate(token, sampleUser)
        expect(
            response.status
        ).toBe(200)
    })
})