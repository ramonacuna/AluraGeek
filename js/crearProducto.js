import { conexionApi } from "./conexionApi.js";

const formulario = document.querySelector('[data-formulario]')

async function añadirProducto (event){
    event.preventDefault();
    const nombre = document.querySelector('#nombre').value
    const precio = document.querySelector('#precio').value
    const imagen = document.querySelector('#imagen').value
    console.log(nombre)
    console.log(precio)
    console.log(imagen)

    await conexionApi.peticionPost(nombre,precio,imagen);
}

formulario.addEventListener('submit', event => añadirProducto(event))