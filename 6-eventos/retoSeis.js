const sty = document.querySelector('.sty');

function funColor(action) {
    if (action.keyCode === 82) {
        sty.classList.add('red');
        sty.classList.remove('purple');
    }

    if (action.keyCode === 77) {
        sty.classList.add('purple');
        sty.classList.remove('red');
    }
}

document.addEventListener('keydown', funColor);