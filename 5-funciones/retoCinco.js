// Arrow functions everywhere
// Vamos a rehacer alguno de los ejercicios anteriores con funciones flecha.¡A lo loco!

a = parseInt(prompt("Ingrese el valor de su compra: "));
iva = 0.21;
const compra = (a, iva) => {

    const result = (a + (a * iva));
    return result;
}

const totalresult = compra(a, iva);

console.log("El precio sin IVA es: " + a + ", IVA: " + (a * iva) + " y total: " + totalresult);