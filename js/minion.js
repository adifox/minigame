// moving minion to the left or to the right ///

function minionLeft() {
    var l = parseInt($('.minion').css('left'));
    if (l <= 0) {
        $('.minion').css('display','hidden');
    } else {
        $('.minion').stop().animate({
            left: '-=50'
        });
    }
    gameState.charLeft = l;
}


function minionRight() {
    var r = parseInt($('.minion').css('left'));
    if (r > 1000) {
        $('.minion').css('display','hidden');
    } else {
        $('.minion').stop().animate({
            left: '+=50'
        });
    }
}


/// -------- ////
