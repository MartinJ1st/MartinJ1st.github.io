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

function send(){
    var templateParams = 
    {
        from_name: document.getElementById("Name").value,
        message: document.getElementById("Message").value,
        contact_info: document.getElementById("Email").value,
    };
    emailjs.send('service_qhz0c99', 'template_9t33m4j', templateParams)
    .then(function (response) {console.log('SUCCESS!', response.status, response.text);},
    function (error) {console.log('FAILED...', error);});
    alert("Your message has been sent successfully!");
    document.getElementById("Name").value = "";
    document.getElementById("Message").value = "";
    document.getElementById("Email").value = "";
}
            
    