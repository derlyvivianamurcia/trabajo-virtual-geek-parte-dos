const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';



const button = document.querySelector('.btn');
button.addEventListener('click', function recibir() {
    document.getElementById("txt").innerHTML = (inception + "<br>" + theButterFlyEffect + "<br>" + eternalSunshineOfTheSM + "<br>" +
        blueVelvet + "<br>" + split);

});

const Inception = document.querySelector('.pe1');
Inception.addEventListener('click', function capturar() {
    console.log("El nombre de la pelicula es: " + inception)
});

const Thebutterflyeffect = document.querySelector('.pe2');
Thebutterflyeffect.addEventListener('click', function capturar2() {
    console.log("El nombre de la pelicula es: " + theButterFlyEffect)
});

const Eternalsunshine = document.querySelector('.pe3');
Eternalsunshine.addEventListener('click', function capturar3() {
    console.log("El nombre de la pelicula es: " + eternalSunshineOfTheSM)
});
const Bluevelvet = document.querySelector('.pe4');
Bluevelvet.addEventListener('click', function capturar4() {
    console.log("El nombre de la pelicula es: " + blueVelvet)
});
const Split = document.querySelector('.pe5');
Split.addEventListener('click', function capturar5() {
    console.log("El nombre de la pelicula es: " + split)
});