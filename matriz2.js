const leer = require("prompt-sync")();

function main() {
    const matriz = [];
    let contador= 1;

    for (let i = 0; i < 3; i++) {
        matriz.push([]);
        for (let j = 0; j < 3; j++) {
            matriz[i].push((j+1+(3 * i))); // push(contador++)) 2da posibilidad
        }
    }
    console.log(matriz);
    console.log("2do elemento 1ra fila",matriz[0][1]);
    console.log("1er elemento 2da fila",matriz[1][0]);
    console.log("3er elemento 3ra fila",matriz[2][2]);

    console.table(matriz);
    
    
}
main();
