$(document).ready(function(){
  var $body = $('body');
  // $body.html('');

  var index = streams.home.length - 1;
  var lastNewTweet = index;
  while(index >= 0){
    var tweet = streams.home[index];
    var username = tweet.user;
    var time = streams.home[index].created_at;

    var $container = $('<div class="container"></div>');    
    
    var $user = $('<span class="user"></span>');
    $user.text('@' + tweet.user + ': ');
    $user.appendTo($container);
    
    var $tweet = $('<span class="individualTweet"></span>');
    $tweet.text(tweet.message);
    $tweet.appendTo($container);

    var $time = $('<div class="time"></div>');
    $time.text(time);
    $time.appendTo($container);

    $container.addClass(function() {
       return username;
    })

    $container.appendTo('.tweets');

    index -= 1;

  }



  $(document).on('click','.user',function() {
    $('.container').hide();
    var username = $(this).closest('.container')['0'].classList['1'];
    console.log(username);
    $('.container').filter('.' + username).show();
});


$('button').on('click', function() {
  var index = streams.home.length-1;
  while(lastNewTweet + 1 < index) {
    var tweet = streams.home[index]; 
    var username = tweet.user;
    var time = streams.home[index].created_at;

    var $container = $('<div class="container"></div>');    
    
    var $user = $('<span class="user"></span>');
    $user.text('@' + tweet.user + ': ');
    $user.appendTo($container);
    
    var $tweet = $('<span class="individualTweet"></span>');
    $tweet.text(tweet.message);
    $tweet.appendTo($container);

    var $time = $('<div class="time"></div>');
    $time.text(time);
    $time.appendTo($container);

    $container.addClass(function() {
       return username;
    })

    $container.prependTo('.tweets');

    lastNewTweet += 1;
}
});

});