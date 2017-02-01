//----- hiding elements before the game start ------//
$('.banana').css('visibility','hidden');
$('.minion').css('visibility','hidden');
$('.score').css('visibility','hidden');
$('.cherry').css('visibility','hidden');
$('.turtle').css('visibility','hidden');
$('.score-back').css('visibility','hidden');
$('.score1').css('visibility','hidden');
$('.score2').css('visibility','hidden');
$('.score3').css('visibility','hidden');
$('.score4').css('visibility','hidden');
$('.score5').css('visibility','hidden');

// ------ game start ---------//
$(".start").on('click',function(){
    $('.start').css('visibility','hidden');
//    playAudio();
setTimeout(function start(){
    $('.banana').css('visibility','visible');
    $('.minion').css('visibility','visible');
    $('.score').css('visibility','visible');
    $('.cherry').css('visibility','visible');
    $('.turtle').css('visibility','visible');
    $('.score-back').css('visibility','visible');
    itemRandom();
    setInterval(bananaMove,velocityRandom());
    setInterval(cherryMove,velocityRandom());
//    setInterval(turtleMove,velocityRandom());
},100);
});



///////
