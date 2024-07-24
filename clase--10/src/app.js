/** CLASE 10 - WEBSOCKETS **/

//Temas de hoy: 
//1) Que es Websocket
//2) Socket.io

//Pueden instalar: npm i express express-handlebars

//Websocket es un protocolo de comunicacion bidireccional en tiempo real. A diferencia de HTTP, donde el cliente envia una solicitud y el servidor responde. 
//Websocket es una comunicacion directa y en tiempo real. 

//La comunicacion se realiza entre dos endpoint que reciben el nombre de "socket".

//1) El cliente tiene que enviar una peticion HTTP al servidor, esto se conoce handshake (apreton de manos). 

//2) El servidor recibe la peticon y procede a responder el saludo. A esto se lo conoce como "abrir la conexion". 

//3) A partir de este momento la comunicación es bidireccional entre el cliente y el servidor, hasta que uno de los dos corte la "llamada". 

//Iniciamos un servidor: 

import express from "express";
//import exphbs from "express-handlebars"; 
import { engine } from "express-handlebars";
const app = express(); 
const PUERTO = 8080; 

//Middleware 
app.use(express.json()); 
app.use(express.static("./src/public"));

//Configuramos Express-Handlebars
app.engine("handlebars", engine() );
app.set("view engine", "handlebars"); 
app.set("views", "./src/views");

//Ruta 

app.get("/", (req, res) => {
    res.render("index");
})

const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto de Mar del Plata`);
})

//Socket.io: 
//1) Instalamos: npm i socket.io

//2) Importamos el modulo: 

import { Server } from "socket.io";


//3) Nos tenemos que guardar una referencia del servidor. ( creando el httpServer)

//4) Generamos una instancia de socket en mi backend. 

const io = new Server(httpServer);

//Armamos un array de usuarios: 

const usuarios = [
    {id: 1, nombre: "Lionel", apellido: "Messi"},
    {id: 2, nombre: "Cristiano", apellido: "Ronaldo"},
    {id: 3, nombre: "James", apellido: "Rodriguez"},
    {id: 4, nombre: "Kyliam", apellido: "Mbappe"},
    {id: 5, nombre: "Pocho", apellido: "Lavezzi"},
]

io.on("connection", (socket) => {
    console.log("Un cliente se conecto conmigo");

    //No se olviden el nombre del evento a escuchar, que tiene que ser el mismo que se envia desde el cliente.

    socket.on("mensaje", (data) => {
        console.log(data);
    })

    //Ahora el backend le va a enviar un saludito al front: 
    socket.emit("saludito", "Hola Cliente, ¿como estas? "); 

    //Le vamos a enviar al front el array de usuarios: 
    socket.emit("usuarios", usuarios); 

})