// Calculador de modelo de caja

var tipoBox = 0; //Border False
var tipoCaja = 1; // ContentTrue
const PADDING = 10;
const WIDTH = 300;
const BORDER = 2;
var calcularCaja = 0;

tipo = parseInt(prompt("INGRESA EL TIPO DE CAJA A DIBUJAR ----- O = BORDER  1 = CONTENT"));;
calcularCaja = caja(tipo, PADDING, WIDTH, BORDER);

function caja(tipoCaja, p, w, b) {
    if (tipoCaja === 0) {
        console.log(`El ancho del contenido es:  ${w} pixeles`);
    } else if (tipoCaja === 1) {
        console.log(`El ancho del Border-box es de:  ${p+w+b} pixeles`);
    } else {
        console.log("Error");
    }
}