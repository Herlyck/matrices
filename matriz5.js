const leer = require("prompt-sync")();

function main() {
    const matriz = [];
    let elemento= 10;
    
    for (let i = 0; i < 3; i++) {
        matriz.push([]);
        for (let j = 0; j < 3; j++) { 
            matriz[i].push(j+1+(3*i));
        }
    }
    matriz[1].splice(1,0,elemento);

    console.log(matriz);

}
main();