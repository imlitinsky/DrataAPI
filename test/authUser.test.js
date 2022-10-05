const authUser = require('../api/authUser');
const token = process.env.npm_config_token

describe('Authenticated user', () => {
    test('Status code with valid token provided', async() => {
        const response = await authUser(token)
        expect(
            response.status
        ).toBe(200)
    })

    test('Invalid token', async() => {
        try {
            await authUser('Invalid token value')
        } catch (error) {
            expect(
                error.message
            ).toBe('Bad credentials')
        }
    })

    test('No token', async() => {
        try {
            await authUser()
        } catch (error) {
            expect(
                error.message
            ).toBe('Requires authentication')
        }
    })

    test('Validate user login', async() => {
        const response = await authUser(token)
        expect(
            response.data.login
        ).toBe('ilittest')
    })

    test('Validate current user plan', async() => {
        const response = await authUser(token)
        expect(
            response.data.plan.name
        ).toBe('free')
    })

    test('Validate current user email', async() => {
        const response = await authUser(token)
        expect(
            response.data.email
        ).toBe('inchik@gmail.com')
    })

    test('Validate current user location', async() => {
        const response = await authUser(token)
        expect(
            response.data.location
        ).toBe('Los Angeles')
    })

    test('Validate current user company', async() => {
        const response = await authUser(token)
        expect(
            response.data.company
        ).toBe('CTU')
    })

    test('Validate current user hiring status', async() => {
        const response = await authUser(token)
        expect(
            response.data.hirable
        ).toBeUndefined()
    })
    
    test('Validate current user site_admin status', async() => {
        const response = await authUser(token)
        expect(
            response.data.site_admin
        ).toBeFalsy()
    })
})