/* Escribir un programa que, dada una nota (número), 
imprima en consola la calificación según la nota: 

  0-3: Muy deficiente
  3-5: Insuficiente
  5-6: Suficiente
  6-7: Bien
  7-9: Notable
  9-10: Sobresaliente
*/

let nota = 5;
let resultado = "";

switch (true) {
  case (nota >= 0) && (nota <= 3):
    resultado = "Muy deficiente";
    console.log("Muy deficiente");
    break;
  case (nota >= 4) && (nota <= 5):
    resultado = "Insuficiente";
    console.log("Insuficiente");
    break;
    case (nota >= 6) && (nota <= 7):
        resultado = "Suficiente";
        console.log("Suficiente");
        break;
  case 8:
    resultado = "Bien";
    console.log("Bien");    
    break;
  case 9:
    resultado = "Notable";
    console.log("Notable");
    break;
  case 10:
    resultado = "Sobresaliente";
    console.log("Sobresaliente");
    break;
     default:
    resultado = "Nota no válida";
}

console.log("Su nota fue: " + nota + ". El resultado es: " + resultado);
document.getElementById("calificacion").textContent = " Su nota fue:  " + nota + ".  El resultado es " + resultado;
