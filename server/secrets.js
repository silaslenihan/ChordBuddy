exports.FIREBASE_CONFIG = {
    "type": "service_account",
    "project_id": "chords-72fdf",
    "private_key_id": "fffaae488f3cda52d7f120ed4f9b1bd845a4d22a",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCXwk7DQeFqf1kl\nZASFHNl0Axeifc+0ku9dM0SxSmNESJ9Lan7pGjqUcT7YR583/z3hMG1cl3wgN9qR\nVlBAAmXqJQqsWrDflO3tUeCOw7qzQ7/HsdErozbwNweFSXa0MHyMTtZdqg4Qh90a\neADjV8xyaHafZQm0VHNQ6uk/5b/q7o/8GSnL8a/2MZKZKUiMcUucipfYSvjj5nx5\nJfuDdC2ryd2TrOGddQulzffjRZw31K2WhewQiB9mUC/fpYGi64krJK7NIBeQtgs0\nt0r1ZS0e26JzVc4TIwf8igb6Wad1WCC9jnV0f3RClD1Dxlyl3WKLIBx0w06bbE0O\nNCoDEH3BAgMBAAECgf8WHkOEfQTPcqGzRWaqtlyimYtyKxSR6OhzLlI/oYV8Ib7X\n5sVX6ep0lXqjFkbVEsP3p4CReaGUWiCzWk66muMjbfEM05r7zD6TSxtlmcHg1a4v\nPxyzeeE7aprgZsmz049o1/OgfDDHgzSxauUnTmkfIosUPYCQlWf8Z7Or+xoubRyI\nsiWfbG/0AWjheaQM2LRVyNeiX9m/enq/0S59R68G5kTV3IsfF1Ed+1D8WdQvqXNt\nAwWFmAPhYHpGrpd/iBSn0kQi2vEJn1vvOjJM79Sf/VMJXf7L4rwLvoplaf42gs1K\nFjJNC+Qmfp57UBl12nUtygLxenY36gSsWQhwKgECgYEA1I/R+lAHNQb73ARxeOkj\nHyEwDw1OaHNbKoA8wigyAyt9HEcf+TI+60S2t7aeMDJCtoQpTx7XyJpXy0/jZtw/\nn377iPIawZEwlzN5MXXLa51zLMlDND2ea1QGsVaJjUcIZpAaPytoK6fKknyF1fqB\nfkHd22/Hae4kBnDKiIa8HgECgYEAtsWWUAZ8HF38/BvSjq0Tm5g13/cIiEC3nXR8\nO+9WRtdotQYob912i1tu27XPGFjai98b6hggmApiCucoWVWcA0L04CJ5HvU539H3\nBjBcg412gEbsMgmB6YXJpZ+qEYxNuWrnWtdsOtqmp/mVdlYIVxNMgwWVF1X15cX5\n9Wcb38ECgYA9cICyCHW81xLvin0+BK05Lz+T6jWyrT05sK1fNX0XO3fDN6+/OM3E\n9SyXN3rL1YtA9Dx4eSLIAgzEYIgLUDg3ot2TvN8M+imAWsl6CWFN7sm+tUHulKz4\nuuXgVnIV2uVLt/VOMv6+N5au9r08l1bcpq844TtTnBjfn7R69+7iAQKBgE2xspL0\nHsAkSA2XeitCcapbytMY/RyGfkdFpCYKOJ/Go/EH3BqphuH4jSiCobVU2BpLTl91\nwC1BhKnj16gaF0bfqJ66qMg7ME3vwFV2K22UrgIbo/4lQn9VawGn3LC29rdSNWTN\nXGmsVtni4+E48zSotIah0d3ooa36OaZTHWtBAoGBAJYbteVLuB1ZMDwWhf7WLYPy\n6Ix8HYM/WG4zPoOWwKTr4bWoSSV8FeUjYQs+HcK6ZuRyCck8rOEiSs+VKnR0UVMJ\nHt+hzv3KUioDYhy7TOALlJVBeh2EYll+9GvZ0sQFNTEoZ0V5pbOUQppNXLNkk2oN\neabfocCdB5qe9fKf+e0h\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-9duct@chords-72fdf.iam.gserviceaccount.com",
    "client_id": "108397817621543329623",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9duct%40chords-72fdf.iam.gserviceaccount.com",
    "serviceAccount":"firebase-adminsdk-9duct@chords-72fdf.iam.gserviceaccount.com"
}



// These should represent the final URLs for your front- and backend projects
exports.DEPLOYED_URLS = {
    // TODO: change to Heroku and GitLab URLs, with a trailing slash
    SERVER: 'https://young-falls-82514.herokuapp.com/',
    VIEW: 'https://compsci290_2021spring.dukecs.io/portfolio_sjl58/Chords/ui/dist/index.html/',
}

// WARNING: really lousy encryption key!
exports.COOKIE_ENCRYPTION_KEY = 'SECRET';

// This needs to be downloaded from Google Cloud Service Credentials Console to configure access
//   https://console.cloud.google.com/apis/credentials
exports.OAUTH = {
    // TODO: fill this in with downloaded JSON data
    "web":{
        "client_id":"662453886783-cj0cj585ifcg34srccmf3dph4suuhht3.apps.googleusercontent.com",
        "project_id":"datalist-309421",
        "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
        "client_secret":"_qMBlFE7ViJXik3PHJ2M7Q8n",
        "redirect_uris":["http://localhost:9995/auth/google/redirect",
        "http://localhost:8080/api/auth/google/redirect",
        "https://young-falls-82514.herokuapp.com/api/auth/google/redirect"]}
};
  