const getUserContext = require('../api/getUserContext');
const token = process.env.npm_config_token

describe('Get user context', () => {
    test('Get user context', async() => {
        const response = await getUserContext(token, 'imlitinsky')
        expect(
            response.status
        ).toBe(200)
    })
})