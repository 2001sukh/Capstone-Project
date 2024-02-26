function toggleMobileMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
