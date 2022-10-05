const { Octokit } = require("octokit")

async function getUserContext(token, username) {
    const octokit = new Octokit({ auth: token })
    const response = await octokit.request('GET /users/' + username + '/hovercard', {
        username: username
      })
    return response
}

module.exports = getUserContext