const leer = require("prompt-sync")();

const DIAS = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGOS"];



function main() {
    const tareas = [[],[],[],[],[],[],[]];
    let tareasAgregar = 0;
    let diaModificar = 0;
    let tareaIngresada="def";

    console.log("seleccione dia a modificar");
    diaModificar = Number(leer());

    console.log("cuantas tareas desea agregar?");
    tareasAgregar = Number(leer());


    for (let i = 0; i < tareasAgregar; i++) {
        console.log("agregando Tarea N°" + (i+1) + " tareas" + " al Dia " + DIAS[diaModificar]);
        console.log("ingrese tarea");
        tareaIngresada=leer();
        tareas[diaModificar].push(tareaIngresada);
        
    }
    console.log(tareas);
    





}
main();