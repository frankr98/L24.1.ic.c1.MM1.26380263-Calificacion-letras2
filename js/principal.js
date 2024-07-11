/** análisis
 * crear un programa que muestre la calificación en letras del estudiante
 * en función de su nota final. el programa debe solicitar el nombre del estudiante y la nota final
 * el programa de calcular su calificación en letras y mostrarlo por pantalla de acuerdo a los siguientes datos:
 * 90 - 100: A, 80 - 89: B, 70 - 79: C, 60 - 69: D, 0 - 59: F 
 */

import Cl_ICalificacion from "./Cl_ICalificacion.js";
import Cl_Calificacion from "./Cl_Calificacion.js";

let Ical = new Cl_ICalificacion(),
    n = Ical.leerNombre(),
    nf = Ical.leerNotaFinal(),

    Cal = new Cl_Calificacion(n, nf),
    salida = document.getElementById("salida")
salida.innerHTML = Ical.reporteCalificacion(Cal.nombre, Cal.notafinal, Cal.Calificacion())