function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

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
            
    