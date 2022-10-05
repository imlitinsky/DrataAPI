const sampleUser = {
    //name string
    //The new name of the user.
    name: "Jack Bauer",
    //email string
    //The publicly visible email address of the user.
    email: "inchik@gmail.com",
    //blog string
    //The new blog URL of the user.
    blog: "",
    //twitter_username string or null
    //The new Twitter username of the user.
    twitter_username: null,
    //company string or null
    //The new company of the user.
    company: null,
    //location string
    //The new location of the user.
    location: "Los Angeles",
    //hireable boolean or null
    //The new hiring availability of the user.
    hireable: null,
    //bio string
    //The new short biography of the user.
}

const ExpectedUser = {
    login: 'pjhyett',
          id: 3,
          node_id: 'MDQ6VXNlcjM=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/pjhyett',
          html_url: 'https://github.com/pjhyett',
          followers_url: 'https://api.github.com/users/pjhyett/followers',
          following_url: 'https://api.github.com/users/pjhyett/following{/other_user}',
          gists_url: 'https://api.github.com/users/pjhyett/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/pjhyett/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/pjhyett/subscriptions',
          organizations_url: 'https://api.github.com/users/pjhyett/orgs',
          repos_url: 'https://api.github.com/users/pjhyett/repos',
          events_url: 'https://api.github.com/users/pjhyett/events{/privacy}',
          received_events_url: 'https://api.github.com/users/pjhyett/received_events',
          type: 'User',
          site_admin: false
}