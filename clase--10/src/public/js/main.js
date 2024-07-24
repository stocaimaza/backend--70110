console.log("Hola, si estoy bien conectado");

//Aca vamos a generar una instancia de socket.io pero ahora desde el front: 
const socket = io(); 

//Cada vez que yo quiero enviar un mensaje lo voy a realizar con el metodo: EMIT
//Cada vez que yo quiero escuchar un mensaje lo voy a hacer con el metodo: ON
//Cada uno de estos mensajes se van a enviar a traves de "eventos"

socket.emit("mensaje", "Hola Backend, como estas? Soy el front");

//Ahora escuchamos el mensaje del backend: 

socket.on("saludito", ( data ) => {
    console.log(data)
})

//Recibimos el array del servidor: 

socket.on("usuarios", (arrayUsuarios) => {
    const listaUsuarios = document.getElementById("lista-usuarios");

    arrayUsuarios.forEach(usuario => {
        listaUsuarios.innerHTML += `<li> ${usuario.nombre} - ${usuario.apellido} </li>`
        
    })

})