const leer = require("prompt-sync")();
const TAREAS = [
    ["lavar ropa", "videos git", "planchar"],
    [],
    ["Ordenar cuarto"],
    [],
    ["Practicar Programacion"],
    [],
    []
];

const DIAS = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGOS"];
function main() {
    let opcion = 0;

    console.log("seleccione dia:");
    opcion = Number(leer());

    console.log("Dia:", DIAS[opcion]);
    for (let i = 0; i < TAREAS[opcion].length; i++) {
        console.log("Tarea N° " + (i + 1) + " " + TAREAS[opcion][i]);
    }
}

main();
