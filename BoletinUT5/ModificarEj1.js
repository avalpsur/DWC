    //El js tiene que cargar primero el html para trabajar sobre él
    window.addEventListener("load",inicializar,false);
    function inicializar(){
        //aquí se añaden todos los elementos que se van a utilizar
        document.getElementById("enviarBoton").addEventListener('click', mostrarMayusculas, false);
    }
    

    function mostrarMayusculas(){
        var nombre = document.getElementById("nombre").value;
        var nombreUsuario = document.getElementById("nombreUsuario").value;
        var contraseña = document.getElementById("contraseña").value;
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;
        var sexo = document.getElementById("sexo").value;
        var telefono = document.getElementById("numero").value;
        var correo = document.getElementById("mail").value;

        nombre = nombre.toUpperCase();
        nombreUsuario = nombreUsuario.toUpperCase();
        contraseña = contraseña.toUpperCase();
        fechaNacimiento = fechaNacimiento.toUpperCase();
        sexo = sexo.toUpperCase();
        telefono = telefono.toUpperCase();
        correo = correo.toUpperCase();

        var nuevaVentana = window.open("", "_blank", "width=500,height=400");
            nuevaVentana.document.write("<h2>Datos del formulario</h2>");
            nuevaVentana.document.write("<p><strong>Nombre:</strong> " + nombre + "</p>");
            nuevaVentana.document.write("<p><strong>Nombre de Usuario:</strong> " + nombreUsuario + "</p>");
            nuevaVentana.document.write("<p><strong>Contraseña:</strong> " + contraseña + "</p>");
            nuevaVentana.document.write("<p><strong>Fecha de Nacimiento:</strong> " + fechaNacimiento + "</p>");
            nuevaVentana.document.write("<p><strong>Sexo:</strong> " + sexo + "</p>");
            nuevaVentana.document.write("<p><strong>Teléfono:</strong> " + telefono + "</p>");
            nuevaVentana.document.write("<p><strong>Correo:</strong> " + correo + "</p>");

    }
