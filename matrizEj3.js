const leer = require ("prompt-sync")();

const DIAS=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
const TAREAS=[["lavar ropa","jugar con mascota"],[],["Ordenar cuarto","Cocinar","Ejercicio"],[],["Practicar Programacion"],[],[]]

function main() {
    let dia = 0;
    let tareaEliminar=0;

    console.log("Seleccione el dia a Modificar: 0 a 7");
    dia = Number(leer());
    
    console.log("***Mostrando Tareas del dia "+ DIAS[dia]+"***");

    console.log(TAREAS[dia]); //esto tengo q repetir

    console.log("que tarea desea eliminar?");
    tareaEliminar=Number(leer());
    TAREAS[dia].splice(tareaEliminar,1);

    console.log("tarea/s restante/s:",DIAS[dia],TAREAS[dia]);
    console.log(TAREAS);
    

    
    
    
    


}
main();