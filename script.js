// Array donde se guardan los contactos
let contactos = [];


// Elementos HTML
const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");
const contador = document.getElementById("contador");
const buscarInput = document.getElementById("buscar");


// AGREGAR CONTACTO
btnAgregar.addEventListener("click", function () {

    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();

    // No permitir campos vacíos
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


// MOSTRAR CONTACTOS
function mostrarContactos(lista = contactos) {

    listaContactos.innerHTML = "";

    if (lista.length === 0) {

        if (contactos.length === 0) {

            listaContactos.innerHTML = `
                <p class="mensaje-vacio">
                    Todavía no agregaste contactos.
                </p>
            `;

        } else {

            listaContactos.innerHTML = `
                <p class="mensaje-vacio">
                    No se encontraron contactos.
                </p>
            `;

        }

        return;
    }

    lista.forEach(function (contacto) {

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


        // EVENT LISTENER DEL BOTÓN ELIMINAR
        const btnEliminar = elemento.querySelector(".btnEliminar");

        btnEliminar.addEventListener("click", function () {

            const indice = contactos.indexOf(contacto);

            contactos.splice(indice, 1);

            mostrarContactos();

            actualizarContador();

        });

    });

}


// ACTUALIZAR CONTADOR
function actualizarContador() {

    contador.textContent = contactos.length;

}


// BUSCADOR EN TIEMPO REAL
buscarInput.addEventListener("input", function () {

    const texto = buscarInput.value
        .toLowerCase()
        .trim();

    const contactosFiltrados = contactos.filter(function (contacto) {

        return contacto.nombre
            .toLowerCase()
            .includes(texto);

    });

    mostrarContactos(contactosFiltrados);

});