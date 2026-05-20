const leer = require("prompt-sync")();


function main() {
    const matriz = [];

    for (let i = 0; i < 3; i++) {
        matriz.push([]);

        for (let j = 0; j < 3; j++) {
            matriz[i].push(j + 1 + (3 * i));
        }


    }
    matriz.splice(1, 1);  //eliminas de toda la matriz lo q tenes en posicion 1 (fila eliminada)
    // matriz[1].splice(1,1,"hola");  matriz en fila 1, posicion 1 eliminas y agregas hola dentro de la fila
    console.log(matriz);
    
}

main();