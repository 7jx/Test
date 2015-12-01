var boardWidth = 600;
var boardHeight = 400;

var paddleWidth = 80;
var paddleHeight = 10;
var paddleSpeed = 6;
var paddleX = 300;
var paddleY = 5;

var ballSize = 10;
var ballX = 300;
var ballY = 200;
var ballXSpeed = 2;
var ballYSpeed = 2;

var keyPressed = 0;

function frame() {
    
    //Check to see if the ball should bounce off the walls
    if (ballX < 0 || ballX + ballSize > boardWidth) {
        ballXSpeed = -ballXSpeed;
    }
    
    if (ballY + ballSize > boardHeight) {
        ballYSpeed = -ballYSpeed;
    }
    
    //Check to see if ball hits paddle
    if((ballX > paddleX) && (ballX < paddleX + paddleWidth)) {
        if(ballY<= paddleY + paddleHeight) {
            ballYSpeed = -ballYSpeed;
        }
    }
    
    //Check to see if ball makes it past paddle
    if(ballY < 0) {
        ballY = 200;
    }
    
    //see if we need to move the paddle
    if (keyPressed == 37 && paddleX > paddleSpeed) {
        paddleX = paddleX - paddleSpeed;
    } else if (keyPressed == 39 && (paddleX + paddleWidth) < (boardWidth - paddleSpeed)) {
        paddleX = paddleX + paddleSpeed;
    }
    
    //update ball position
    ballX = ballX + ballXSpeed;
    ballY = ballY + ballYSpeed;
    
    updateCSS();
}

function updateCSS() {
    
    var boardObj = document.getElementById("board");
 	boardObj.style.width = boardWidth.toString() + "px";
    boardObj.style.height = boardHeight.toString() + "px";
    
    var paddleObj = document.getElementById("paddle");
 	paddleObj.style.width = paddleWidth.toString() + "px";
    paddleObj.style.height = paddleHeight.toString() + "px";
    paddleObj.style.top = paddleY.toString() + "px";
    paddleObj.style.left = paddleX.toString() + "px";
    
    var ballObj = document.getElementById("ball");
 	ballObj.style.width = ballSize.toString() + "px";
    ballObj.style.height = ballSize.toString() + "px";
    ballObj.style.top = ballY.toString() + "px";
    ballObj.style.left = ballX.toString() + "px";
}

document.onkeydown = function (e) {
    var evt = e;
    keyPressed = e.keyCode;
    return false;
};

document.onkeyup = function (e) {
    keyPressed = 0;
    return false;
};

window.onload = function() {
  setInterval(function(){frame();},10);
  updateCSS();
};




<div id='board'>
    <div id='ball'></div>
    <div id='paddle'></div>
    
</div>

#board {
    position: relative;
    top: 0;
    left: 0;
    background-color: blue;
}

#ball {
    position: absolute;
    background-color: white;
}

#paddle {
    position: absolute;
    background-color: black;
}
