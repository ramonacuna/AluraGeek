import { conexionApi } from "./conexionApi.js";


const contenedorProductos = document.querySelector('.cards')

async function eliminarProducto(event){
    if(event.target && event.target.tagName == 'BUTTON'){
        const nombreProducto = event.target.getAttribute('data-nombre');
        console.log(nombreProducto);
        const producto = await conexionApi.productoPorNombre(nombreProducto);
        console.log(producto);
        console.log(producto[0].id);
        await conexionApi.peticionDelete(producto[0].id)
    }
}

contenedorProductos.addEventListener('click',event => eliminarProducto(event));

