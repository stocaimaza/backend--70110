console.log("Si funcionaaaaaaaaaaa"); 
//alert("Olis, ke asen?");

//Creamos una instancia de socket.io desde el lado del cliente ahora: 
const socket = io(); 

//Crear una variable para guardar el nombre del usuario: 
let user; 
const chatBox = document.getElementById("chatBox");

//Utilizamos Sweet Alert para el mensaje de Bienvenida. 

//Swal es un objeto global que nos permite usar los metodos de la libreria. 
//Fire es un metodo qe nos permite configurar el alerta. 

Swal.fire({
    title: "Identificate", 
    input: "text",
    text: "Ingresa un usuario para identificarte en el chat",
    inputValidator: (value) => {
        return !value && "Necesitas escribir un nombre para continuar";
    },
    allowOutsideClick: false
}).then(result => {
    user = result.value
})


chatBox.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        if(chatBox.value.trim().length > 0){
            //Trim nos permite sacar los espacios en blanco del principio y del final de un string. 
            //Si el mensaje tiene mas de 0 caracteres, lo enviamos al backend.
            socket.emit("message", {user: user, message: chatBox.value}); 
            chatBox.value = "";
        }
    }
})

//Vamos a mostrar los mensajes en la pantalla del navegador: 

socket.on("messagesLogs", data => {
    const log = document.getElementById("messagesLogs"); 
    let messages = ""; 

    data.forEach( message => {
        messages = messages + `${message.user} dice ${message.message} <br>`;
    })
    log.innerHTML = messages; 
})