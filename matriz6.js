const leer = require("prompt-sync")();

function main() {
    let elemento= 10;
    const matriz = [];

    for (let i = 0; i < 3; i++) {
        matriz.push([]);
        for (let j = 0; j < 3; j++) { 
            matriz[i].push(j+1+(3*i));
        }
    }
    matriz[0].splice(1,1,null);
    matriz[1].splice(0,1,null);
    matriz[2].splice(2,1,null);
    
    console.log(matriz);

}
main();