function toggleMobileMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');

    var toggle = document.getElementById('mobile-menu-toggle');
    toggle.classList.toggle('active');

    var bar1 = toggle.children[0];
    var bar2 = toggle.children[1];
    var bar3 = toggle.children[2];
}

document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
