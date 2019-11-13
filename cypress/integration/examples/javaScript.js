function getTweets(uid){
    return fetch('https://google.com' + uid)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
    .then(function(tweets){
        return tweets.filter(function(tweet){
            return tweet.stars>50
        })
    })
    .then(function(tweets){
        return tweets.filter(function(tweet){
            return tweets.rts>50
        })
    })
}


function getTweets(uid){
    return fetch('https://google.com' + uid)
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        return response.data
    })
    .then((tweets) => {
        return tweets.filter((tweet) => {
            return tweet.stars>50
        })
    })
    .then((tweet) => {
        return tweets.filter((tweet) => {
            return tweet.rts>50
        })
    })
}

function getTweets (uid) {
    return fetch('https://google.com' + uid)
      .then((response) => response.json())
      .then((response) => response.data)
      .then((tweets) => tweets.filter((tweet) => tweet.stars > 50))
      .then((tweets) => tweets.filter((tweet) => tweet.rts > 50))
  }

  //if the arrow function only has one parameter, you can omit the () around it

function getTweets (uid) {
  return fetch('https://api.users.com/' + uid)
    .then(response => response.json())
    .then(response => response.data)
    .then(tweets => tweets.filter(tweet => tweet.stars > 50))
    .then(tweets => tweets.filter(tweet => tweet.rts > 50))
}