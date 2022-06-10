const menubtn = document.getElementById('toggle')
const menuNav = document.querySelector('.nav-menu');


function openMenu() {
    menuNav.classList.toggle("hidden");
    menubtn.setAttribute('aria-expanded', true);
}

menubtn.addEventListener('click', openMenu);