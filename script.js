// Array donde se guardarán los contactos
let contactos = [];

// Obtener elementos del HTML
const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");
const contador = document.getElementById("contador");
const buscarInput = document.getElementById("buscar");


// Evento para agregar contacto
btnAgregar.addEventListener("click", function () {

    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();

    // No permitir campos vacíos
    if (nombre === "" || telefono === "") {
        return;
    }

    // Crear objeto contacto
    const contacto = {
        nombre: nombre,
        telefono: telefono
    };

    // Agregar al array
    contactos.push(contacto);

    // Limpiar inputs
    nombreInput.value = "";
    telefonoInput.value = "";

    // Mostrar contactos
    mostrarContactos();

});