// Crea una función que reciba como parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA(21 % ) y el total.Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.

var precio = 0;
var IVA = 0.21;

var calcularIva = 0;
precio = parseInt(prompt("Digita un numero a"));;


calcularIva = calculo(precio);

function calculo(numPrecio) {
    const precioIva = (numPrecio * IVA);
    total = (precioIva + numPrecio);

    console.log("Precio sin IVA: " + numPrecio + "IVA: " + precioIva + "Total: " + total);


}