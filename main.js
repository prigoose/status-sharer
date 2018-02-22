$(document).ready(function(){
  var $body = $('body');
  // $body.html('');

  var index = streams.home.length - 1;
  var lastNewTweets = index;
  while(index >= 0){
    var tweet = streams.home[index];
    var username = tweet.user;
    var time = streams.home[index].created_at;
    
    var $user = $('<span class="user"></span>');

    $user.addClass(function() {
      return username;
    });

    $user.text('@' + tweet.user + ': ');
    $user.appendTo('.tweets');
    
    var $tweet = $('<div class="individualTweet"></div>');

    $tweet.addClass(function() {
      return username;
    })

    $tweet.text(tweet.message + ' (' + time + ')');
    $tweet.appendTo('.tweets');
    index -= 1;
  }

// $('class=' + myClr + ']').addClass('bold');


  $(document).on('click','.user',function(){
    alert("hello");
});


  $('button').on('click', function() {
    var newTweets = streams.home.length-1;
    while(newTweets > lastNewTweets) {
      var tweet = streams.home[newTweets];
      var time = streams.home[newTweets].created_at;
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' (' + time + ')');
      $tweet.prependTo('.tweets');
      newTweets -= 1;
    }
    lastNewTweets = streams.home.length-1;
  });

});