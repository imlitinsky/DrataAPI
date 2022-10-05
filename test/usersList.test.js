const usersList = require('../api/usersList');
const ExpectedUser = require('../test/data/user');
const token = process.env.npm_config_token

describe('Users list', () => {
    test('Get users list', async() => {
        const response = await usersList(token)
        expect(
            response.status
        ).toBe(200)
    })
    
    test('Validate users list contains specific user', async() => {
        const response = await usersList(token)
        expect(
            response.data
        ).toEqual(expect.objectContaining(ExpectedUser))
        console.log(response)
    })

    // Assume requirement for login to be more than 3 characters
    test('Check login length for all entries', async() => {
        const response = await usersList(token)
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i])
            expect(
                response.data[i].login.length
            ).toBeGreaterThan(3)
        }
    })

    // Check all URLs have https scheme
    test('Check all URLs have https scheme', async() => {
        const response = await usersList(token)
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i])
            expect(
                response.data[i].url
            ).toMatch(/^https/)
            expect(
                response.data[i].avatar_url
            ).toMatch(/^https/)
            expect(
                response.data[i].html_url
            ).toMatch(/^https/)
            expect(
                response.data[i].followers_url
            ).toMatch(/^https/)
            expect(
                response.data[i].following_url
            ).toMatch(/^https/)
            expect(
                response.data[i].gists_url
            ).toMatch(/^https/)
            expect(
                response.data[i].starred_url
            ).toMatch(/^https/)
            expect(
                response.data[i].subscriptions_url
            ).toMatch(/^https/)
            expect(
                response.data[i].organizations_url
            ).toMatch(/^https/)
            expect(
                response.data[i].repos_url
            ).toMatch(/^https/)
            expect(
                response.data[i].events_url
            ).toMatch(/^https/)
            expect(
                response.data[i].received_events_url
            ).toMatch(/^https/)
        }
    })
})