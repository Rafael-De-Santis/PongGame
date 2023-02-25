//Players
const playerRight = document.getElementById("playerRight");
const playerLeft = document.getElementById("playerLeft");
const field = document.getElementById("field");
let maxWidth = field.offsetWidth;
let maxHeight = field.offsetHeight;

let playerLeftHeight = playerLeft.offsetHeight;
let playerRightHeight = playerRight.offsetHeight;

let playerInit = (maxHeight / 2) - (playerLeftHeight / 2);

playerRight.style.top = playerInit + "px";
playerLeft.style.top = playerInit + "px";

//Player Movement----------------------------------------------------

let keysPressed = {};

window.addEventListener("keydown", (element) => {
    console.log(element.key)

    var currentPositionPR = playerRight.offsetTop;

 /*    var currentPositionPL = playerLeft.offsetTop; */

    if (currentPositionPR > 5) {
        switch (element.key) {
            case "ArrowUp": 
                //console.log(currentPositionPR + "pa arriba");
                playerRight.style.top = currentPositionPR - 5 + "px";
                break;
        }}

    if(currentPositionPR < maxHeight-playerRightHeight - 16) {       7
        switch(element.key) {
            case "ArrowDown": 
                //console.log(currentPositionPR + "pa abajo");
                playerRight.style.top = currentPositionPR + 5 + "px";
        }}

/*     if (currentPositionPL > 5) {
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
 */
})

console.log(field.offsetWidth);

/*! TODO POR AHORA
1. Inicializar la position del player
2. Crear controles del player (arriba y abajo)
3. Crear los limetes del player
*/



