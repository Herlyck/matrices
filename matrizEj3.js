const leer = require ("prompt-sync")();

const DIAS=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
const TAREAS=[["lavar ropa","jugar con mascota"],[],["Ordenar cuarto","Cocinar","Ejercicio"],[],["Practicar Programacion"],[],[]]

function main() {
    let dia = 0;

    console.log("Seleccione el dia a Modificar: 0 a 7");
    dia = Number(leer());
    
}
main();