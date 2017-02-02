//----- hiding elements before the game start ------//
$('.banana').css('visibility','hidden');
$('.minion').css('visibility','hidden');
$('.score').css('visibility','hidden');
$('.turtle2').css('visibility','hidden');
$('.turtle').css('visibility','hidden');
$('.score-back').css('visibility','hidden');
$('.score1').css('visibility','hidden');
$('.score2').css('visibility','hidden');
$('.score3').css('visibility','hidden');
$('.score4').css('visibility','hidden');
$('.score5').css('visibility','hidden');
$('.level2').css('visibility','hidden');


// ------ game start ---------//
$(".start").on('click',function(){
    startAudio.play();
    $('.start').css('visibility','hidden');
    audio.play();
    audio.volume = 0.2;
    setTimeout(function start(){
    $('.banana').css('visibility','visible');
    $('.minion').css('visibility','visible');
    $('.score').css('visibility','visible');
    $('.turtle2').css('visibility','visible');
    $('.turtle').css('visibility','visible');
    $('.score-back').css('visibility','visible');
    itemRandom();
    setInterval(bananaMove,400);
    setInterval(turtle2Move,velocityRandom());
    setInterval(turtleMove,velocityRandom());
},100);
});



///////
