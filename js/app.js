// --- function to check the css atributes of the banana and minion --//
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
function checkCollisions(a,b,c,d) {
    if ( a < b && (c-50) < d && (c+110) > d ) {
        scoreCounter++;
        bananaMove();
        console.log("tocado");
        console.log("c",c);
        console.log("d", d);
        $('.score' + scoreCounter).css('visibility','visible');
//        if (scoreCounter === 5) {
//
//        }
    }
}
//badCollision(elementState.charTop,elementState.turtleTop,elementState.charLeft,elementState.turtleLeft);

//function badCollision(a,b,c,d) {
//    if ( a < b && c > d && (c+65) < (d+0)) {
//        $('.score1').css('visibility','hidden');
//    }
//}




////----audio para otro dia //////
var x = document.getElementById("#game-audio");
function playAudio() {
    x.play();
}
function pauseAudio() {
    x.pause();
}











///////////////////
