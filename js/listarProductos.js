import { conexionApi } from "./conexionApi.js";

async function postearProducto(){
    const lista = document.querySelector('.cards');
    try{
        const data = await conexionApi.peticionGet()
        data.forEach(element => {
        lista.appendChild(crearCard(element.nombre,element.precio,element.imagen))
    });
    }catch (e){
        const mensajeError = document.createElement('p');
        mensajeError.classList.add('message-default');
        mensajeError.innerHTML = `<strong><br>No se ha podido extablecer una conexion con el servidor :(</strong>`
        lista.appendChild(mensajeError)
    }
    
}

export default function crearCard (nombre,precio,imagen){
    const elemento = document.createElement('div');
    elemento.classList.add('card')
    elemento.innerHTML = `<img src="${imagen}" alt="Imagen 1">
                        <p>${nombre}</p>
                        <div class="button-text-container">
                            <p>$ ${precio}</p>
                            <button id="botonEliminar" class="boton-eliminar" type="button" data-nombre="${nombre}">
                            </button>
                        </div>`
    return elemento;
}

postearProducto();