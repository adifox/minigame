///----movements of the game items -> banana, cherry, apple //////
function bananaMove(){
    var d = parseInt($('.banana').css('top'));
    if (d > 525) {
        $('.banana')
        .css({
            'visibility': 'hidden',
            "left": getRandomX()
        }).queue(function() {
            $(this).css({
                "visibility": "visible",
                "top": 0
            }).dequeue();
        });
    }  else {
        $('.banana').stop().animate({top: '+=30'});
    }
    initializeGameState();
    gameState.goodItemTop = d;
    checkCollisions(gameState.charTop,gameState.goodItemTop,gameState.charLeft,gameState.goodItemLeft);
//    console.table([gameState]);
}

function cherryMove(){
    var d = parseInt($('.cherry').css('top'));
    if (d > 550) {
        $('.cherry').css({
            'visibility': 'hidden',
            'left': getRandomX()
            }).queue(function() {
                $(this).css({
                    'visibility': 'visible',
                    'top': 0
            }).dequeue();
        });
    } else {
        $('.cherry').stop().animate({top: '+=30'});
    }
}

function turtleMove(){
    var d = parseInt($('.turtle').css('top'));
    if (d > 525) {
        $('.turtle').css({
            'visibility': 'hidden',
            'left': getRandomX()
        }).queue(function(){
                $(this).css({
                    'visibility': 'visible',
                    'top': 0
                }).dequeue();
        });
    } else {
        $('.turtle').stop().animate({top: '+=30'});
    }
    initializeElementState();
    elementState.turtleTop = d;
    badCollision(elementState.charTop,elementState.turtleTop,elementState.charLeft,elementState.turtleLeft);
}

//// ----- creates a random position for the items ---////////
function getRandomX() {
    return (Math.floor(Math.random() * (900 - 50)) + 100) + "px";
}
//// ----- creates a random velocity for the fall of the items ---/////
function velocityRandom() {
    return (Math.floor(Math.random() * (900 - 100)) + 100);
}

/// ------ creates a <left> random start position -------//////
function itemRandom() {
  xbPos = Math.floor(Math.random() * (900 - 50)) + 100;
  xcPos = Math.floor(Math.random() * (900 - 50)) + 100;
  xtPos = Math.floor(Math.random() * (900 - 50)) + 100;
  $(".banana").css("left",xbPos+"px");
  $(".cherry").css("left",xcPos+"px");
  $(".turtle").css("left",xtPos+"px");
}



//////////////////
