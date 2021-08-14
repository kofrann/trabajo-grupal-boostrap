var d = new Date();
document.getElementById("fecha").innerHTML = d;



function validar() {
    var nombre =document.getElementById("nombres").value;
        if (nombre === '') {
        alert('Ingrese Nombre');
    }
    var Email = document.getElementById("Email1").value;
    if (Email === '') {
        alert('Ingrese E-mail');
    }
    var Password = document.getElementById("Password1").value;
    if (Password === '') {
        alert('Ingrese Password')
    }
 }
