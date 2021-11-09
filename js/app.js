// get the elements needed
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navigation__menu');

// event binding for the mobile hamburger icon
hamburger.addEventListener('click', toggleMenu);

// function to toggle menu on / off
function toggleMenu() {
    // if the hamburger icon doesn't contain is-active class
    if(hamburger.classList.contains('is-active') === false) {
        // add is-active class to hamburger icon to trigger animation to the close icon
        hamburger.classList.add('is-active');
        // add is-active class to open the menu
        menu.classList.add('is-active');
    } else {
        // remove is-active class to hamburger icon to trigger animation to revert to the hamburger icon
        hamburger.classList.remove('is-active');
        // remove is-active class to close the menu
        menu.classList.remove('is-active');
    }
}