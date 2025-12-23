require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;

const githubData = {
    "login": "tayyab2203",
    "id": 147302977,
    "node_id": "U_kgDOCMeqQQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/147302977?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tayyab2203",
    "html_url": "https://github.com/tayyab2203",
    "followers_url": "https://api.github.com/users/tayyab2203/followers",
    "following_url": "https://api.github.com/users/tayyab2203/following{/other_user}",
    "gists_url": "https://api.github.com/users/tayyab2203/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tayyab2203/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tayyab2203/subscriptions",
    "organizations_url": "https://api.github.com/users/tayyab2203/orgs",
    "repos_url": "https://api.github.com/users/tayyab2203/repos",
    "events_url": "https://api.github.com/users/tayyab2203/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tayyab2203/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Tayyab Sajjad",
    "company": null,
    "blog": "",
    "location": "Pakistan",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 24,
    "public_gists": 0,
    "followers": 1,
    "following": 8,
    "created_at": "2023-10-08T07:29:37Z",
    "updated_at": "2025-10-09T17:49:55Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get("/about", (req, res) => {
    res.send('Hey, this is me Tayyab Sajjad. Im a MERN Stack Developer. Recently, i started learning Backend Development.')
})

app.get("/contact", (req, res) => {
    res.send('You can contact me on my email:' + ' ' + ' tayyabsajjad4679@gmail.com')
})

app.get("/github", (req, res) =>{
    // res.json is used to send JSON response. It converts a JavaScript object or value to a JSON string and sends it as a response.
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
