//Desarrollar un servidor express que, en su archivo app.js importe al archivo de productManager.

const express = require("express"); 
const app = express(); 
const PUERTO = 8080;
const productsRouter = require("./routes/products.router.js");
const cartsRouter = require("./routes/carts.router.js"); 
const viewsRouter = require("./routes/views.router.js");
require("./database.js"); 

//Socket.io
const socket = require("socket.io"); 
//import {Server} from "socket.io";

//Importamos express-handlebars
const exphbs = require("express-handlebars");

//Configuramos express-handlebars: 
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Middleware: 
app.use(express.json()); 
app.use(express.static("./src/public")); 
//Le decimos al servidor que vamos a trabajar con JSON. 

//Rutas
app.use("/api/products", productsRouter );
app.use("/api/carts", cartsRouter); 
app.use("/", viewsRouter);


const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`); 
})

//Apuntes: traigan el ProductManager: 
const ProductManager = require("./dao/db/product-manager-db.js");
const manager = new ProductManager(); 

//Trabajamos con WebSocket: 

const io = socket(httpServer);
//const io = new Server(httpServer); 

io.on("connection", async (socket) => {
    console.log("Un cliente se conecto");

    //Le envian el array de productos a la vista realTimeProducts: 
    socket.emit("productos", await manager.getProducts());
    //Con un evento y el metodo "on" lo escuchas desde el  main.js y lo mostras por pantalla. 

    //Recibimos el evento "eliminarProducto" desde el cliente y borramos con el metodo borrar: 
    socket.on("eliminarProducto", async (id) => {
        await manager.deleteProduct(id); 

        //Despues de borrar le envio los productos actualizados al cliente: 
        io.sockets.emit("productos", await manager.getProducts());
    })
    
})