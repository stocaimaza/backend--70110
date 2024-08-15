//Primero tenes que crearte una instancia de Socket.io: 

const socket = io(); 

//Voy a escuchar el evento "productos" y recibir ese array de datos: 

socket.on("productos", (data) => {
    //console.log(data);
    renderProductos(data); 
})

//"contenedorProductos"

//Voy a crear una funciona que se encargue de modificar el DOM para agregar los productitos. 

const renderProductos = (productos) => {
    const constenedorProductos = document.getElementById("contenedorProductos"); 
    constenedorProductos.innerHTML = ""; 

    productos.forEach(item => {
        const card = document.createElement("div"); 
        card.innerHTML = `  <p> ${item.id} </p>
                            <p> ${item.title} </p>
                            <p> ${item.price} </p>
                            <button> Eliminar </button>
                            `
        constenedorProductos.appendChild(card); 

        //Vamos a darle vida al boton de eliminar: 
        card.querySelector("button").addEventListener("click", () => {
            eliminarProducto(item.id); 
            //Le voy a pasar el ID del producto
        })
    })
}

//Aca armamos la funcion para enviar el id al backend: 
const eliminarProducto = (id) => {
    socket.emit("eliminarProducto", id); 
}

//Vincular ese formulario con el idLoco a alguna constante, tomar su value y enviarlo por websockets al backend por medio de un evento. 
