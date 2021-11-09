let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', (event) => {
    if(hamburger.classList.contains('is-active') === false) {
        hamburger.classList.add('is-active');
    } else {
        hamburger.classList.remove('is-active');
    }
});