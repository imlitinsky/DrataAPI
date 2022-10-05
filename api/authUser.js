const { Octokit } = require("octokit")

async function authUser(token) {
    const octokit = new Octokit({ auth: token })
    const response = await octokit.request("/user")
    return response
}

module.exports = authUser