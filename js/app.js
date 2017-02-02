// --- function to check the css atributes of the banana/minion and turtles--//
var gameState;
function initializeGameState() {
    gameState = {
        charLeft: parseInt($('.minion').css('left')),
        charTop: parseInt($('.minion').css('top')),
        goodItemTop: parseInt($('.banana').css('top')),
        goodItemLeft: parseInt($('.banana').css('left'))
    };
}

var elementState;
function initializeElementState() {
    elementState = {
        turtleTop: parseInt($('.turtle').css('top')),
        turtleLeft: parseInt($('.turtle').css('left')),
        charLeft: parseInt($('.minion').css('left')),
        charTop: parseInt($('.minion').css('top'))
    };
}

var element2State;
function initializeElement2State() {
    element2State = {
        turtleTop: parseInt($('.turtle2').css('top')),
        turtleLeft: parseInt($('.turtle2').css('left')),
        charLeft: parseInt($('.minion').css('left')),
        charTop: parseInt($('.minion').css('top'))
    };
}

// --- function to check the key for the minion movement --- //
function animateSite(e){
    switch (e.which) {
        case 37:
        minionLeft();
        break;
        case 39:
        minionRight();
        break;
    }
}
$(document).on('keydown', animateSite);

// ---- function to check the collision between character and good element --- //
var scoreCounter = 0;

function checkCollisions(miniTop,bananaTop,miniLeft,bananaLeft) {
//    console.log("mini-left",miniLeft);
//    console.log("banana-left",bananaLeft);
    if (miniTop < bananaTop && (miniLeft - 20) < bananaLeft && (miniLeft + 90) > (bananaLeft + 10)) {
        scoreCounter++;
        audioBanana.play();
        positiveScore();
//        $('.score' + scoreCounter).css('visibility','visible');
        if (scoreCounter === 2) {
            scoreCounter = 0;
            levelUpShow();
            levelUp.play();
            setTimeout(function() {
                levelUpHide();
            },2000);
            $('.minion')
            .css({
                'width': '105',
                'height': '140',
                 top: '-=40'
            });
        resetScore();
        }
    }
}

function levelUpShow() {
    $('.level2').css('visibility','visible');
}
function levelUpHide() {
    $('.level2').css('visibility','hidden');
}


function positiveScore() {
    switch (scoreCounter) {
        case 1:
        $('.score1').css('visibility', 'visible');
        break;
        case 2:
        $('.score2').css('visibility', 'visible');
        break;
        case 3:
        $('.score3').css('visibility', 'visible');
        break;
        case 4:
        $('.score4').css('visibility', 'visible');
        break;
    }
}

function negativeScore() {
    switch (scoreCounter) {
        case 1:
        $('.score1').css('visibility', 'hidden');
        break;
        case 2:
        $('.score2').css('visibility', 'hidden');
        break;
        case 3:
        $('.score3').css('visibility', 'hidden');
        break;
        case 4:
        $('.score4').css('visibility', 'hidden');
        break;
        case 5:
        $('.score5').css('visibility', 'hidden');
        break;
    }
}

function resetScore(){
    $('.score1').css('visibility', 'hidden');
    $('.score2').css('visibility', 'hidden');
    $('.score3').css('visibility', 'hidden');
    $('.score4').css('visibility', 'hidden');
    $('.score5').css('visibility', 'hidden');
}

//$( "div" )
//    .animate({ left:"+=200px" }, 2000 )
//    .animate({ top:"0px" }, 600 )
//    .queue(function() {
//      $( this ).toggleClass( "red" ).dequeue();
//    })
//    .animate({ left:"10px", top:"30px" }, 700 );
//
//var badscoreCounter = scoreCounter;



function badCollision(minionTop,turtTop,minionLeft,turtLeft) {
    if ( minionTop < turtTop && (minionLeft - 5) < turtLeft && (minionLeft + 70) > (turtLeft + 10)) {
        negativeScore();
        scoreCounter--;
//        alert('oh no!!');
    }
}

////------ get the audios -------//////
var audio = new Audio('audio/happy1.wav');
var audioBanana = new Audio('audio/banana.wav');
var startAudio = new Audio('audio/start.wav');
var levelUp = new Audio('audio/level-up.wav');

///////////////////
