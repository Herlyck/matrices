const leer = require("prompt-sync")();

function main() {
    const matriz = [];

    for (let i = 0; i < 3; i++) {
        matriz.push([]);
        for (let j = 0; j < 3; j++) {
            matriz[i].push(j + 1 + (3 * i))
        }
    }

    matriz[0][1] = -7;
    matriz[1][0] = -7;
    matriz[2][2] = -3;

    console.log(matriz);

}
main();