var ball = document.getElementById('ball');
var velocity = 50;
var positionX = 0;
var positionY = 0;
var reverse = false;

function Move() {
    var Xmin = 0;
    var Xmax = 500;
    var Ymin = 0;
    var Ymax = 500;

    if(reverse == false) {
        positionX += velocity;
        positionY += velocity;
    } else {
        positionX -= velocity;
        positionY -= velocity;
    };

    if(positionX > Xmax || positionX == Xmin) {
        reverse = ! reverse;
    }
    ball.style.top = positionY + 'px';
    ball.style.left = positionX + 'px';
};

setInterval(Move, 400);