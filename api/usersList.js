const { Octokit } = require("octokit")

async function usersList(token) {
    const octokit = new Octokit({ auth: token })
    const response = await octokit.request('GET /users', {})
    return response
}

module.exports = usersList