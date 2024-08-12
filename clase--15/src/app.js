/** PRACTICA INTEGRADORA 1 **/

//Temas de repaso: 
//Clases
//Express
//Router y Multer
//Express-Handlebars
//MongoDB y Mongoose

//instalamos: npm i express express-handlebars mongoose multer 

////////////////////////////////////////////////////////////////////////

import express from "express";
import { engine } from "express-handlebars";
const app = express(); 
const PUERTO = 8080;
import "./database.js";
import imagenRouter from "./routes/imagen.router.js";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static("./src/public"));

//Express-Handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars");
app.set("views", "./src/views"); 

//Rutas
app.use("/", imagenRouter);


app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})

