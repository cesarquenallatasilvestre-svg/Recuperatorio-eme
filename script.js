// Array donde se guardarán los contactos
let contactos = [];

// Obtener elementos del HTML
const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");
const contador = document.getElementById("contador");
const buscarInput = document.getElementById("buscar");

btnAgregar.addEventListener("click", function () {

    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();

    if (nombre === "" || telefono === "") {
        return;
    }

    const contacto = {
        nombre: nombre,
        telefono: telefono
    };

    contactos.push(contacto);

    nombreInput.value = "";
    telefonoInput.value = "";

    mostrarContactos();
    actualizarContador();

});

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

function mostrarContactos() {

    listaContactos.innerHTML = "";

    if (contactos.length === 0) {

        listaContactos.innerHTML = `
            <p class="mensaje-vacio">
                Todavía no agregaste contactos.
            </p>
        `;

        return;
    }

    contactos.forEach(function (contacto, indice) {

        const elemento = document.createElement("div");

        elemento.classList.add("contacto");

        elemento.innerHTML = `
            <div class="datos-contacto">
                <span class="nombre-contacto">
                    ${contacto.nombre}
                </span>

                <span class="telefono-contacto">
                    ${contacto.telefono}
                </span>
            </div>

            <button class="btnEliminar">
                Eliminar
            </button>
        `;

        listaContactos.appendChild(elemento);

        // Botón eliminar de este contacto
        const btnEliminar = elemento.querySelector(".btnEliminar");

        btnEliminar.addEventListener("click", function () {

            contactos.splice(indice, 1);

            mostrarContactos();
            actualizarContador();

        });

    });
}

function actualizarContador() {

    contador.textContent = contactos.length;

}