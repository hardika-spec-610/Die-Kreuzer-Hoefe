const menu = document.querySelector('#mobile-menu-btn');
const menuLinks = document.querySelector('.nav-ul-list');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})