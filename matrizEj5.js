const leer = require("prompt-sync")();

const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const TAREAS = [["lavar ropa", "jugar con mascota"], [], ["Ordenar cuarto", "Cocinar", "Ejercicio"], [], ["Practicar Programacion"], [], []];

function main() {
    for (let i = 0; i < DIAS.length; i++) {
        if (TAREAS[i].length > 0) {
            console.log(DIAS[i] + ": " + TAREAS[i]);
        }
    }
}
main();