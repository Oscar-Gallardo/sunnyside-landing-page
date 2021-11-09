let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navigation__menu');

hamburger.addEventListener('click', (event) => {
    if(hamburger.classList.contains('is-active') === false) {
        hamburger.classList.add('is-active');
        menu.classList.add('is-active');
    } else {
        hamburger.classList.remove('is-active');
        menu.classList.remove('is-active');
    }
});