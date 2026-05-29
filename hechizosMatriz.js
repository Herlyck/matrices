const leer = require("prompt-sync")();

const ESTUDIANTES = ["Harry", "Draco", "Luna"];
const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];


function main(params) {
    const asistencia = [];
    let asistenciaTemporal = 0;
    let nombreEstudiante = 0;
    let posEstudiante = 0;

    for (let i = 0; i < ESTUDIANTES.length; i++) {
        asistencia.push([]);
        for (let j = 0; j < DIAS.length; j++) {
            asistenciaTemporal = Math.floor(Math.random() * 2);
            asistencia[i].push(asistenciaTemporal);

        }
    }

    console.log("Consulta asistencia en Hogwarts\ningresa nombre del alumno:");
    nombreEstudiante = leer();

    posEstudiante = ESTUDIANTES.indexOf(nombreEstudiante);

    console.log(asistencia[posEstudiante]);







}
main();