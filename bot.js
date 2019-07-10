
console.log('Twitter bot starting!');


const Twit = require('twit');

const config = require('./config');

const T = new Twit(config);



// POST
tweetIt();
setInterval(tweetIt, 1000*20)


function tweetIt() {
  /* Anytime we call this function will trigger and post a tweet! */

  let randomTwit = Math.floor(Math.random()*100);


  let tweet = {
    status: 'This is my #twitterbot! ' + 'number ' + randomTwit
  }
  T.post('statuses/update', tweet, tweeted); 

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!");
    } else {
      console.log("It worked!");
    }
  }
}


// GET
/* 
T.get('search/tweets', { 
  q: 'banana', 
  count: 2 }, 

function(err, data, response) {
  // Before declaring 'tweets', run node bot.js and export the json from 
  // your terminal to a text file. Then utilize the tags that you need. 
  let tweets = data.statuses;
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text); 
  }
}) */