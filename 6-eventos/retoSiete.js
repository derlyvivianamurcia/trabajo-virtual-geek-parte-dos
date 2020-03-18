const button = document.getElementById('start');
button.addEventListener('click', () => document.querySelector('ul').innerHTML = '<li id="One" onclick="sectUno()">Inception</li><li onclick="sectDos()">The butterfly effect</li><li onclick="sectTres()">Eternal sunshine of the spotless mind</li><li onclick="sectCuatro()">Blue velvet</li><li onclick="sectCinco()">Split</li>');


function sectUno() {

    document.getElementById('pelicula').innerHTML = "Inception";
    console.log("Inception");
}

function sectDos() {

    document.getElementById('pelicula').innerHTML = "The butterfly effect";
    console.log("The butterfly effect");
}

function sectTres() {

    document.getElementById('pelicula').innerHTML = "Eternal sunshine of the spotless mind";
    console.log("Eternal sunshine of the spotless mind");
}

function sectCuatro() {

    document.getElementById('pelicula').innerHTML = "Blue velvet";
    console.log("Blue velvet");
}

function sectCinco() {

    document.getElementById('pelicula').innerHTML = "Split";
    console.log("Split");
}