function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    updateHeaderOnScroll();
};

var header = document.getElementById("desktop-nav");
var sticky = header.offsetTop;

function updateHeaderOnScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (window.pageYOffset > 80) {
            header.classList.add("glue"); // Add the "glue" class
            header.style.backgroundColor = "#3dca00";
            header.style.transition = "background-color 0.5s, color 0.5s";
            header.style.zIndex = "9999";
        }
    } else {
        header.classList.remove("sticky");
        header.classList.remove("glue"); // Remove the "glue" class
        header.style.backgroundColor = "";
        header.style.color = "";
        header.style.transition = "background-color 0.5s, color 0.5s";
        header.style.zIndex = "";
    }
}

window.onscroll = function() {
    updateHeaderOnScroll();
};

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetPosition = targetElement.offsetTop - 200;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});