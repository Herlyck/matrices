const leer = require("prompt-sync")();

function main() {
    const matriz = [];
    for (let i = 0; i < 1; i++) {
        matriz.push([]);
        for (let j = 0; j < 3; j++) {
            matriz[i].push(String.fromCharCode(65+j).toLowerCase());
        }
    }
    console.log(matriz);
    
    console.log(matriz[0][0]);
    console.log(matriz[0][2]);
}
main();

// String.fromCharCode(codigo) sirve para pasar de 