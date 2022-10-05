# DrataAPI

Test suite build for GitHub *Users* REST API, includes coverage report 

GitHub *Users* API documentation can be found [here](https://docs.github.com/en/rest/users)

# Requirements

- Node.js
- Jest
- Octokit

# Test Setup

- Create GitHub test user account
- Login to your test user account
- Navigate to Settings -> Developer Settings -> Personal access tokens
- Generate a personal access token, make sure to select Scope that includes all options for *repo* and *user*
- Store this token somewhere (it will be used for running Jest test suite from the command line) 

# Running Tests

Test suite can be run from the Terminal command line using the following command (all tests will be executed):

`npm test --token=<personal access token>`

To run a single test case, change the desired test function's keyword from *test* to *test.only* for the specific test case that you want to run and specify the path within your project to the test file containing that test case in the command line, e.g:

`npm test -i test/authUser.text.js --token=<personal access token>`

It will run the *test.only* test case from the test file specified in the command. 

# Framework Structure

Short description of the main folders and their content

- api - contains actual API requests for *users* endpoints
- test - contains tests for API endpoints
- data - contains tests user data
- coverage - contains coverage report for run tests (generated automatically by Jest)
- package.json - contains config for running Jest test suite