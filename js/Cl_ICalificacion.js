export default class Cl_ICalificacion{
    leerNombre(){
        return prompt("Introduzca el nombre del estudiante");
    }
    leerNotaFinal(){
        return parseInt(prompt("Introduzca la nota final del estudiante"));
    }

    reporteCalificacion(n,nf,c){
        return`
        <h1>----REPORTE CALIFICACION EN LETRAS----</h1>
        <br> Nombre: ${n}
        <br> Nota Final: ${nf}
        <br> Calificación en letras: ${c}
        `;
    }
}