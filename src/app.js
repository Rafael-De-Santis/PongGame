//Players
const playerRight = document.getElementById("playerRight");
const playerLeft = document.getElementById("playerLeft");
const field = document.getElementById("field");
const ball = document.getElementById("ball");

let maxWidth = field.offsetWidth;
let maxHeight = field.offsetHeight;


let playerLeftHeight = playerLeft.offsetHeight;
let playerRightHeight = playerRight.offsetHeight;

let playerInit = (maxHeight / 2) - (playerLeftHeight / 2);

let ballY = ball.offsetTop;
let ballX = ball.offsetLeft;



playerRight.style.top = playerInit + "px";
playerLeft.style.top = playerInit + "px";




//Player Movement----------------------------------------------------



    window.addEventListener("keydown", (element) => {
    console.log(element.key)


    var currentPositionPR = playerRight.offsetTop;

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

function ballXMove () {
    var coordinate = "E";

    switch (coordinate){

        case "E":
            ballX ++;
            ball.style.left = ballX + "px";
            if (ballX >= maxWidth) {
                coordinate = "W";
            }
            /* console.log(coordinate) */
            break;
        case "W":
            ballX --;
            ball.style.left = ballX + "px";
            /* console.log("HOLA ES AQUI" + ballX); */

    }

    console.log(coordinate)


/*     if (ballX < 384){
        ballX ++;
        ball.style.left = ballX + "px";
        console.log(ballX);
    }    
    if (ballX >= maxWidth) {
        ballX --;
        ball.style.left = ballX + "px";
        console.log(ballX);
    } */

    setTimeout(ballXMove, 10);
}

ballXMove()







/* window.addEventListener("keypress", (element) => {

    var currentPositionPR = playerRight.offsetTop;

    if (currentPositionPR > 5 && keysPressed) {
        switch (element.key) {
            case "ArrowUp": 
                //console.log(currentPositionPR + "pa arriba");
                playerRight.style.top = currentPositionPR - 5 + "px";
                break;
        }}

    if(currentPositionPR < maxHeight-playerRightHeight - 16 && keysPressed) {       7
        switch(element.key) {
            case "ArrowDown": 
                //console.log(currentPositionPR + "pa abajo");
                playerRight.style.top = currentPositionPR + 5 + "px";
        }}

}) */




/* window.addEventListener('keydown',function(e){


    keyState[e.key] = true;
    console.log("key down" + e)
    console.log(keyState)
},true);    


window.addEventListener('keyup',function(e){
    keyState[e.key] = false;
    console.log("key up" + e)
    console.log(keyState)
},true); */


/* function gameLoop() {
    var currentPositionPR = playerRight.offsetTop;

    if (keyState == "ArrowUp"){
        playerRight.style.top = currentPositionPR - 5 + "px";
    }    
    if (keyState[40]){
        playerRight.style.top = currentPositionPR + 5 + "px";
    }

    // redraw/reposition your object here
    // also redraw/animate any objects not controlled by the user

    setTimeout(gameLoop, 10);
} 

gameLoop() */


/*! TODO POR AHORA
1. Inicializar la position del player
2. Crear controles del player (arriba y abajo)
3. Crear los limetes del player
*/



