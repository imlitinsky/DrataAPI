const getUser = require('../api/getUser');
const token = process.env.npm_config_token

describe('Get user', () => {
    test('Get user test', async() => {
        const response = await getUser(token, 'imlitinsky')
        expect(
            response.status
        ).toBe(200)
    })
    test('Validate user name', async() => {
        const response = await getUser(token, 'imlitinsky')
        expect(
            response.data.name
        ).toBe('Inna Litinsky')
    })
    test('Validate user email', async() => {
        const response = await getUser(token, 'imlitinsky')
        expect(
            response.data.email
        ).toBe('i.litinsky@genapsys.com')
    })
    test('Validate user company', async() => {
        const response = await getUser(token, 'imlitinsky')
        expect(
            response.data.company
        ).toBe('Genapsys')
    })
    test('Validate user location', async() => {
        const response = await getUser(token, 'imlitinsky')
        expect(
            response.data.location
        ).toBe('San Francisco')
    })
    test('Validate public repos', async() => {
        const response = await getUser(token, 'imlitinsky')
        expect(
            response.data.public_repos
        ).toBeGreaterThanOrEqual(1)
    })
})