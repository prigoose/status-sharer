$(document).ready(function(){
  var $body = $('body');
  // $body.html('');

  var index = streams.home.length - 1;
  var lastNewTweets = index;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.insertAfter('.tweets');
    index -= 1;
  }

  $('button').on('click', function() {
    var newTweets = streams.home.length-1;
    while(newTweets > lastNewTweets) {
      var tweet = streams.home[newTweets];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.prependTo('.tweets');
      newTweets -= 1;
    }
    lastNewTweets = streams.home.length-1;
  });
});