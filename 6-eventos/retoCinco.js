'use strict';
const prof1 = document.querySelector('.teacher--uno');
const prof2 = document.querySelector('.teacher--dos');
const prof3 = document.querySelector('.teacher--tres');

prof1.addEventListener('click', prof);
prof2.addEventListener('click', prof);
prof3.addEventListener('click', prof);

function prof(event) {
    const profeElegido = event.currentTarget;
    if (profeElegido.classList.contains('teacher--selected')) {
        profeElegido.classList.remove('teacher--selected');
        profeElegido.querySelector('.favorite').innerHTML = 'Añadir';
    } else {
        profeElegido.classList.add('teacher--selected');
        profeElegido.querySelector('.favorite').innerHTML = 'Quitar';
    }

}