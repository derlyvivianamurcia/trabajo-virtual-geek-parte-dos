/* Crea una función que reciba como argumento dos valores y devuelva como valor de retorno la multiplicación de ambos.Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log(). */
var a = 0;
var b = 0;
var calcularMultiplicacion = 0;
a = parseInt(prompt("Digita un numero a"));;
b = parseInt(prompt("Digita un numero b"));;

calcularMultiplicacion = mult(a, b);

function mult(nA, nB) {
    const result = nA * nB;
    console.log("EL RESULTADO DE LA MULTIPLICACIÓN: " + result);

}