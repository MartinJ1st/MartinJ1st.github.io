function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("desktop-nav");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (window.pageYOffset > 100) {
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
window.onscroll = function() {myFunction()};
            
    