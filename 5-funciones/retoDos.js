// Función media
// Crea una función que reciba 4 parámetros, cada uno con un número, y devuelva como valor la media de todos ellos.Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var calcularMitad = 0;
a = parseInt(prompt("Digita un numero a"));;
b = parseInt(prompt("Digita un numero b"));;
c = parseInt(prompt("Digita un numero c"));;
d = parseInt(prompt("Digita un numero d"));;

calcularMitad = calculo(a, b, c, d);

function calculo(nA, nB, nC, nD) {
    const result = (nA + nB + nC + nD);
    media = (result / 4);

    console.log("LA MEDIA DE TODOS LOS VALORES ES LA SIGUIENTE: " + media);

}