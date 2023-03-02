//Players
const playerRight = document.getElementById("playerRight");
const playerLeft = document.getElementById("playerLeft");
const field = document.getElementById("field");
const ball = document.getElementById("ball");

let maxWidth = field.offsetWidth;
let maxHeight = field.offsetHeight;

let playerLeftHeight = playerLeft.offsetHeight;
let playerRightHeight = playerRight.offsetHeight;
let playerLeftWidth = playerLeft.offsetWidth;
let playerRightWidth = playerRight.offsetWidth;



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
var coordinate = "E";

function ballXMove () {

    var currentPosPRX = playerRight.offsetLeft - playerRightWidth;
    var currentPosPRY = playerRight.offsetTop;
    var currentPosPLX = playerLeft.offsetLeft + playerLeftWidth;
    var currentPosPLY = playerLeft.offsetTop;

    if(coordinate == "E"){
        ballX = ballX + 2;
        ball.style.left = ballX + "px";
        console.log("ballX: " + ballX);
        console.log("ballY: " + ballY);
        console.log("PlayerX: " + currentPosPRX);
        console.log("PlayerY: " + currentPosPRY);
        if (ballX == currentPosPRX && ballY >= currentPosPRY && ballY <= currentPosPRY + playerRightHeight) {
            coordinate = "W";
        }
        // console.log("estamos en la E") 
    }

    if(coordinate == "W"){
        ballX = ballX - 2;
        ball.style.left = ballX + "px";
        // console.log(ballX);
        if (ballX == currentPosPLX && ballY >= currentPosPLY && ballY <= currentPosPLY + playerLeftHeight) {
            coordinate = "E";
        }
    }

    

    setTimeout(ballXMove, 10);
}

ballXMove()



