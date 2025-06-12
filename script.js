const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/*function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
}*/