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
    
    var $tweet = $('<span class="individualTweet"></span>');

    $tweet.addClass(function() {
      return username;
    })

    $tweet.text(tweet.message);
    $tweet.appendTo('.tweets');

    var $time = $('<div class="time"></div>');

    $tweet.addClass(function() {
      return username;
    })

    $time.text(time);
    $time.appendTo('.tweets');

    index -= 1;


  }

// $('class=' + myClr + ']').addClass('bold');

// THIS CODE WORKS!!! GRANTED IT ONLY ADDS A  NEW CLASS, WHICH ISN'T WHAT I ULTIMATELY NEED 
// IT TO DO. BUT IT'S A GOOD STEP
//   $(document).on('click','.user',function(){
//     alert("hello");
//     $('.' + username).addClass('bold');
// });

// THIS IS THE CODE THAT'S NOT WORKING. ASK IN HELPDESK
//   $(document).on('click','.user',function(){
//     alert("hello");
//     $('.user').filter('.' + username).hide();
// });


  $('button').on('click', function() {
    var newTweets = streams.home.length-1;
    while(newTweets > lastNewTweets) {
      var tweet = streams.home[newTweets]; 
      var username = tweet.user;
      var time = streams.home[newTweets].created_at;

      var $user = $('<span class="user"></span>');

      $user.text('@' + tweet.user + ': ');
      // APPEND TO ADDS TO END. I NEED TO ADD TO BEGINNING.
      // BUT IF I TRY PREPEND, THEN THE TWEET TEXT SHOWS
      // BEFORE THE USERNAME
      $user.appendTo('.tweets');

      $user.addClass(function() {
      return username;
      });


      var $tweet = $('<span class="individualTweet"></span>');

      $tweet.addClass(function() {
      return username;
      })

      $tweet.text(tweet.message);
      // APPEND TO ADDS TO END. I NEED TO ADD TO BEGINNING.
      // BUT IF I TRY PREPEND, THEN THE TWEET TEXT SHOWS
      // BEFORE THE USERNAME
    $tweet.appendTo('.tweets');

    var $time = $('<div class="time"></div>');

    $tweet.addClass(function() {
      return username;
    })

    $time.text(time);
    $time.appendTo('.tweets');

    newTweets -= 1;
    }
    lastNewTweets = streams.home.length-1;
  });

});