//Players
const playerRight = document.getElementById("playerRight");
const playerLeft = document.getElementById("playerLeft");
const field = document.getElementById("field");
const ball = document.getElementById("ball");
const scoreLeft = document.getElementById("scoreLeft");
const scoreRight = document.getElementById("scoreRight");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");


let maxWidth = field.offsetWidth;
let maxHeight = field.offsetHeight;

let playerLeftHeight = playerLeft.offsetHeight;
let playerRightHeight = playerRight.offsetHeight;
let playerLeftWidth = playerLeft.offsetWidth;
let playerRightWidth = playerRight.offsetWidth;

let borderBottom = maxHeight - 24
let borderTop = 0

var scoreL = 0;
var scoreR = 0;

// var ballPos = ballX + ballY;

let playerInit = (maxHeight / 2) - (playerLeftHeight / 2);

let ballY = ball.offsetTop;
let ballX = ball.offsetLeft;

playerRight.style.top = playerInit + "px";
playerLeft.style.top = playerInit + "px";

//Player Movement----------------------------------------------------
window.addEventListener("keydown", (element) => {
    // console.log(element.key)
    var currentPositionPR = playerRight.offsetTop;
    currentPosPRX = playerRight.offsetLeft - playerRightWidth;
    currentPosPRY = playerRight.offsetTop + playerRightHeight;

    var currentPositionPL = playerLeft.offsetTop;

    if (currentPositionPR > 5) {
        switch (element.key) {
            case "ArrowUp": 
                //console.log(currentPositionPR + "pa arriba");
                playerRight.style.top = currentPositionPR - 5 + "px";
                break;
        }}

    if(currentPositionPR < maxHeight-playerRightHeight - 16) {
        switch(element.key) {
            case "ArrowDown": 
                //console.log(currentPositionPR + "pa abajo"); 
                playerRight.style.top = currentPositionPR + 5 + "px";
        }}
 
    if (currentPositionPL > 5) {
        switch (element.key) {
            case "s": 
                console.log(currentPositionPL + "pa arriba");
                playerLeft.style.top = currentPositionPL - 5 + "px";
                break;
            }}
    
    if(currentPositionPL < maxHeight-playerLeftHeight - 16) {       
        switch(element.key) {
            case "x": 
                console.log(currentPositionPL + "pa abajo");
                playerLeft.style.top = currentPositionPL + 5 + "px";
                }}
 
})

//Ball Movement----------------------------------------------------
var coordinateX = "E";
var coordinateY = ""

startBtn.addEventListener("click", () => {
    ballMove()
})

resetBtn.addEventListener("click", () => {
    scoreLeft.textContent = 0;
    scoreRight.textContent = 0;

    eraseBall();

    setTimeout(ballInit, 1000);

    playerRight.style.top = playerInit + "px";
    playerLeft.style.top = playerInit + "px";


})

function ballMove () {

    var currentPosPRX = playerRight.offsetLeft - playerRightWidth;
    var currentPosPRY = playerRight.offsetTop;

    var currentPosPLX = playerLeft.offsetLeft + playerLeftWidth;
    var currentPosPLY = playerLeft.offsetTop;

    if(coordinateX == "E"){
        ballX = ballX + 2;
        ball.style.left = ballX + "px";
        //console.log("ballX: " + ballX);
        console.log("ballY: " + ballY);
      /*   console.log("PlayerX: " + currentPosPRX);
        console.log("PlayerY: " + currentPosPRY); */
        if (ballX == currentPosPRX && ballY >= currentPosPRY && ballY <= currentPosPRY + playerRightHeight) {
            coordinateX = "W";

           var numR =  Math.round(Math.random())
            if (numR == 1) {
                coordinateY = "N"
                console.log("pa arriba")
            } else {
                coordinateY = "S"
                console.log("pa abajo")
            }
        }
        // console.log("estamos en la E") 
    }

    if(coordinateX == "W"){
        ballX = ballX - 2;
        ball.style.left = ballX + "px";
        console.log("ballY: " + ballY);
        if (ballX == currentPosPLX && ballY >= currentPosPLY && ballY <= currentPosPLY + playerLeftHeight) {
            coordinateX = "E";

            var numR =  Math.round(Math.random())
            if (numR == 1) {
                coordinateY = "N"
                console.log("pa arriba")
            } else {
                coordinateY = "S"
                console.log("pa abajo")
            }
        }
    }

    if (coordinateY == "N") {
        ballY = ballY - 1;
        ball.style.top = ballY + "px";
        if(ballY == borderTop){
            coordinateY = "S";
        }
    }

    if (coordinateY == "S") {
        ballY = ballY + 1;
        ball.style.top = ballY + "px";
        if(ballY == borderBottom){
            coordinateY = "N";
        }
    }


    if (ballX == 0) {

     
        eraseBall();

        setTimeout(ballInit, 1000);

        scoreL++
        scoreLeft.textContent = scoreL;

    }

    if (ballX == maxWidth - 10) {

     
        eraseBall();

        setTimeout(ballInit, 1000);

        scoreR++
        scoreRight.textContent = scoreR;

    }
    



    setTimeout(ballMove, 10);
}


function ballInit() {
    var numeroloquesea = Math.round(Math.random())

    if (numeroloquesea == 1) {
        
        coordinateX = "E";

    } else {

        coordinateX = "W";
    }

    coordinateY = "";

}


function eraseBall() {

    coordinateX = "";
    coordinateY = "";

    ballX = maxWidth / 2;
    ballY = maxHeight / 2;

    ball.style.left = ballX + "px"
    ball.style.top = ballY + "px"

}


