//get

async function peticionGet() {
    try{
        const response = await fetch('http://localhost:3030/productos')
        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            const dataError = await response.json();
            console.error('Error del servidor:',dataError.status,dataError.message);
            throw new Error(dataError.message || 'Error desconocido del servidor');
        }
        
    }catch (e){
        console.error('Error en la peticion: ',e.message);
    }
}
async function peticionPost(nombre,precio,imagen) {
    try{
        const response = await fetch('http://localhost:3030/productos',{
            method:'POST',
            headers:{'Content-type':'application/json'},
                body:JSON.stringify({
                    nombre:nombre,
                    precio:precio,
                    imagen:imagen
                }),
            })
            if(response.ok){
                const data = await response.json()
                return data
            }else{
                const dataError = await response.json();
                console.error('Error del servidor:',dataError.status,dataError.message);
                throw new Error(dataError.message ||'Ha ocurrido un error al enviar el producto');
            }
    }catch (e){
        console.error('Error:',e)
    }
}

async function peticionDelete(id) {
    try{
        const response = await fetch(`http://localhost:3030/productos/${id}`, {
            method:'DELETE',
        });
    
        if(response.ok){
            const data = response.json()
            console.log('Producto eliminado',data);
        }else{
            const dataError = response.json()
            console.error('Error al eliminar el producto',response.status);
        }
    } catch (e){
        console.error('Error en la peticion :',e)
    }
}

async function productoPorNombre (params) {
    try{
        const response = await fetch(`http://localhost:3030/productos?q=${params}`)
        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            const dataError = await response.json();
            console.error('Error del servidor:',dataError.status,dataError.message);
            throw new Error(dataError.message || 'Error desconocido del servidor');
        }
        
    }catch (e){
        console.error('Error en la peticion: ',e.message);
    }
}

export const conexionApi = {
    peticionGet,peticionPost,peticionDelete,productoPorNombre
}