const { Octokit } = require("octokit")

async function getUser(token, username) {
    const octokit = new Octokit({ auth: token })
    const response = await octokit.request('GET /users/' + username, {
        username: username
      })
    return response
}

module.exports = getUser