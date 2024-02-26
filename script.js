function toggleMobileMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');

    var toggle = document.getElementById('mobile-menu-toggle');
    toggle.classList.toggle('active');

    var bar1 = toggle.children[0];
    var bar2 = toggle.children[1];
    var bar3 = toggle.children[2];

    if (toggle.classList.contains('active')) {
        bar1.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bar1.style.transform = '';
        bar2.style.opacity = '';
        bar3.style.transform = '';
    }
}
    
document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
