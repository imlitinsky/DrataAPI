const { Octokit } = require("octokit")

async function authUserUpdate(token, data) {
    const octokit = new Octokit({ auth: token })
    const response = await octokit.request('PATCH /user', {
        name: data.name,
        email: data.email,
        blog: data.blog,
        twitter_username: data.twitter_username,
        company: data.company,
        location: data.location,
        hireable: data.hireable,
        bio: data.bio
    });
    return response
}

module.exports = authUserUpdate