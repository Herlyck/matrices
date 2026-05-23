const leer = require("prompt-sync")();

const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const TAREAS = [["lavar ropa", "jugar con mascota"], [], ["Ordenar cuarto", "Cocinar", "Ejercicio"], [], ["Practicar Programacion"], [], []]

function main() {
    let dia = 0;
    let tareaCompletada = 0;

    console.log("Selecciones dia a modificar: 0 a 6");
    dia = Number(leer());

    console.log("***Mostrando Tareas del dia " + DIAS[dia] + "***");
    console.log(TAREAS[dia]);

    console.log("Que tarea desea marcar como completada?");
    tareaCompletada = Number(leer());

    console.log("***Actualizando Tarea***");
    TAREAS[dia][tareaCompletada] += " -tarea completada" //tarea[fila][columna]

    console.log(TAREAS);


}
main();