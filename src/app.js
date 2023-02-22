//Players
const playerRight = document.getElementById("playerRight");
const playerLeft = document.getElementById("playerLeft");
const field = document.getElementById("field");
let maxWidth = field.offsetWidth;
let maxHeight = field.offsetHeight;

let playerLeftHeight = playerLeft.offsetHeight;
let playerRightHeight = playerRight.offsetHeight;

let playerInit = (maxHeight / 2) - (playerLeftHeight / 2);



/* window.addEventListener("keydown", (element) =>{
    console.log(element.key)

    switch (element.key) {
        case "ArrowUp"
    }
    
})

 */
/* window.innerWidth*/

console.log(field.offsetWidth);

/*! TODO POR AHORA
1. Inicializar la position del player
2. Crear controles del player (arriba y abajo)
3. Crear los limetes del player
*/
