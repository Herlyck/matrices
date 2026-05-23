const leer = require("prompt-sync")();

const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const TAREAS = [["lavar ropa", "jugar con mascota"], [], ["Ordenar cuarto", "Cocinar", "Ejercicio"], [], ["Practicar Programacion"], [], []]

function main() {
    let dia = 0;
    let tareaEliminar = 0;


    console.log("***Mostrando Tareas del dia " + DIAS[dia] + "***");
    for (let i = 0; i < DIAS.length; i++) {
       
        console.log("Seleccione el dia a Modificar: 0 a 6");
        dia = Number(leer());
        console.log(TAREAS[dia]);

        console.log("que tarea desea eliminar?");
        tareaEliminar = Number(leer());

        TAREAS[dia].splice(tareaEliminar, 1);

        console.log("tarea/s restante/s:", DIAS[dia], TAREAS[dia]);
        console.log(TAREAS);
    }

   /*  use DIAS.lenght para dar un rango de 7 modificaciones, podria usar una variable const CANT_MODIFICACIONES= X; para movilidad
    y reemplazar el dias.lenght*/

}
main();