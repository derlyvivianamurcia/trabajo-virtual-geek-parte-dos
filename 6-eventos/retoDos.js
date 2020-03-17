const button = document.querySelector('.btn');
const name = document.querySelector('.name');

button.addEventListener('click', () => console.log('Hola, ' + name.value));