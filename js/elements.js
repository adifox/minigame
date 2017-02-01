function game() {
function BananaMove(){}
function item(){}
function CherryMove(){}
function AppleMove(){}
function BananaScore(){}
}


BananaMove.prototype.moveDown = function(){
    var d = parseInt($('.banana').css('top'));
    if (d > 550) {
        $('.banana').css('visibility','hidden');
    } else
        { $('.banana').stop().animate({top: '+=50'});
    }
};

CherryMove.prototype.moveDown = function(){
    var d = parseInt($('.cherry').css('top'));
    if (d > 550) {
        $('.cherry').css('visibility','hidden');
    } else {
        $('.cherry').stop().animate({top: '+=50'});
    }
};

AppleMove.prototype.moveDown = function(){
    var d = parseInt($('.apple').css('top'));
    if (d > 550) {
        $('.apple').css('visibility','hidden');
    } else {
        $('.apple').stop().animate({top: '+=50'});
    }
};


item.prototype.maker = function() {
  this.xPos = Math.floor(Math.random() * (900 - 50)) + 100;
  this.xcPos = Math.floor(Math.random() * (900 - 50)) + 100;
  this.xaPos = Math.floor(Math.random() * (900 - 50)) + 100;
  $(".banana").css("left",this.xPos+"px");
  $(".cherry").css("left",this.xcPos+"px");
  $(".apple").css("left",this.xaPos+"px");


//BananaScore.prototype.score = function(){
//      var topBanana = parseInt($('.banana').css('top'));
//      var leftBanana = parseInt($('.banana').css('left'));
//      var topMinion = parseInt($('.minion').css('top'));
//      var leftMinion = parseInt($('.minion').css('left'));
//      console.log(leftMinion);
//      if (topMinion <= topBanana && leftMinion >= leftBanana) {
//          alert('Score');
//      }
//};




//  this.velocity = Math.floor(Math.random() * (8 - 2)) + 2;

//  $(".enemy").css("left",this.posX+"px");
};

// Birds.prototype.flock = function() {
//   var randomTime = Math.floor(Math.random() * (3 - 1)) + 1;
//   $(".enemy").css("top",randomPosition+"px");
//   $(".enemy").css("left","720px");
// };

//Birds.prototype.movement = function() {
//  if ($(".enemy").css("left") < "0") {
//    this.maker();
//  }else{
//    $(".enemy").css("left","-="+this.velocity);
//  }
//};
