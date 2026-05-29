const leer = require("prompt-sync")();

const ESTUDIANTES = ["Harry", "Draco", "Luna"];
const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const ESTUDIANTE_INEXISTENTE = -1;

function main(params) {
    const asistencia = [];
    let asistenciaTemporal = 0;
    let nombreEstudiante = 0;
    let posEstudiante = 0;
    let filtrado=0;
    
    

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

    if (posEstudiante === ESTUDIANTE_INEXISTENTE) {
        console.log("Alumno " +nombreEstudiante+ " no encontrado");

    } else {
        // console.log(asistencia[posEstudiante]);
            filtrado=asistencia[posEstudiante].filter(filter=>filter===1);
            console.log("Cantidad de asistencias:"+filtrado.length);
    }


    
    // console.log(filtrado);
    
    


}
main();