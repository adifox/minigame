///----movements of the game items -> banana, cherry, apple //////
function bananaMove(){
    var d = parseInt($('.banana').css('top'));
    if (d > 519) {
        removeDiv();
        newDiv();
    }  else {
        var divB = $('.banana');
        console.log(divB);
        $('.banana').stop().animate({top: '+=20'});
    }
    initializeGameState();
    gameState.goodItemTop = d;
    checkCollisions(gameState.charTop,gameState.goodItemTop,gameState.charLeft,gameState.goodItemLeft);
//  console.table([gameState]);
}

// removes the Banana element //
function removeDiv() {
    var div = document.getElementsByClassName('banana');
    $('.banana').css('visibility','hidden');
    div[0].remove();
}

// creates a new banana element //
function newDiv() {
    var iDiv = document.getElementsByClassName('screen');
    var innerDiv = document.createElement('div');
    innerDiv.className = 'banana';
    iDiv[0].appendChild(innerDiv);
    $('.banana').css(
        {'visibility':'visible',
        "left" :getRandomX() });
}

// movement of turtle number 2 //
function turtle2Move(){
    var d = parseInt($('.turtle2').css('top'));
    if (d > 530) {
        $('.turtle2').css({
            'visibility': 'hidden',
            'left': getRandomX()
            }).queue(function() {
                $(this).css({
                    'visibility': 'visible',
                    'top': 0
            }).dequeue();
        });
    } else {
        $('.turtle2').stop().animate({top: '+=30'});
    }
    initializeElement2State();
    element2State.turtleTop = d;
    badCollision(element2State.charTop,element2State.turtleTop,element2State.charLeft,element2State.turtleLeft);
}

// movememt of turtle number 1 //
function turtleMove(){
    var d = parseInt($('.turtle').css('top'));
    if (d > 530) {
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
    return (Math.floor(Math.random() * (900 - 50)) + 100);
}
//// ----- creates a random velocity for the fall of the items ---/////
function velocityRandom() {
    return (Math.floor(Math.random() * (900 - 100)) + 100);
}

/// ------ creates a random start position of items-------//////
function itemRandom() {
  xbPos = Math.floor(Math.random() * (900 - 50)) + 100;
  xcPos = Math.floor(Math.random() * (900 - 50)) + 100;
  xtPos = Math.floor(Math.random() * (900 - 50)) + 100;
  $(".banana").css("left",xbPos+"px");
  $(".turtle2").css("left",xcPos+"px");
  $(".turtle").css("left",xtPos+"px");
}



//////////////////
