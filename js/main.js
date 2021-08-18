var d = new Date();
document.getElementById("fecha").innerHTML = d;

/*
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
 */

$(document).ready(function () {
  $("#form1").validate({
    rules: {
        nombres: {
        required: true,
        minlength: 3,
        maxlength: 20,
      },
      apellido: {
        required: true,
        minlength: 3,
        maxlength: 20,
      },
      Email1: {
        required: true,
        minlength: 10,
        maxlength: 30,
      },
    },

    messages:{
      nombres: {
        required: "Debe Ingresar el Nombre",
        minlength: "El nombre debe contener al menos 3 caracteres",
        maxlength: "El nombre debe contener al menos 20 caracteres",
      },
      apellido: {
        required: "Debe Ingresar el Apellido",
        minlength: "El nombre debe contener al menos 3 caracteres",
        maxlength: "El nombre debe contener al menos 20 caracteres",
      },
      Email1: {
        required: "Debe Ingresar el Correo",
        minlength: "El nombre debe contener al menos 3 caracteres",
        maxlength: "El nombre debe contener al menos 20 caracteres",
      },
    },
  });
});

