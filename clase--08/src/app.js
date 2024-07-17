/** CLASE 8 - ROUTER Y MULTER **/

//Temas de hoy: 

//1) Express Router
//2) Servicio de archivos estáticos
//3) Middleware
//4) Tipos de Middleware
//5) Multer
//6) Vemos las consignas de la Primer Pre Entrega del TP Final. 

//VETERINARIA DE PEPE ARGENTO. 

//Ejercicio de Mascotas y Usuarios. 

import express from "express";
const app = express(); 
const PUERTO = 8080; 
import usersRouter from "./routes/users.router.js"; 
import petsRouter from "./routes/pets.router.js";

app.use(express.json()); 
//Aca le digo al servidor que le voy a enviar informacion en formato JSON. 

//Rutas
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);

//Listen

app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto de Mar del Plata");
})

//2) Servicio de Archivos estáticos
//Express nos permite tener archivos estáticos, es decir archivos que no cambian, como por ejemplo html, css, imagenes, videos, iconos, etc. 
//Estos recursos estan visibles para el cliente de forma directa: 

//Configuramos la carpeta estatica de esta forma: 
//app.use(express.static("./src/public"));

//Prefijo virtual: 
app.use("/static", express.static("./src/public"));

//Ventajas: 
// - Me permite organizarme mejor con las rutas. 
// - Me da una capa extra de seguridad. 

//Multer: middleware de terceros que me permite cargar archivos al servidor. 

//Instalamos: npm install multer

//Importamos: 
import multer from "multer";


//Para que se guarden las imagenes con el formato correcto, tenemos que crear un "storage": 

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "./src/public/img"); 
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); 
    }
})


//Creamos el middleware de carga: 

//const upload = multer({dest:"./src/public/img"});
const upload = multer({storage: storage}); 

//Creamos una ruta para subir imagenes: 

app.post("/imagenes", upload.array("imagen"), (req, res) => {
    res.send("Imagen cargada");
})