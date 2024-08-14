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
import multer from "multer";
const app = express(); 
const PUERTO = 8080;
import "./database.js";
import imagenRouter from "./routes/imagen.router.js";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static("./src/public"));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/img"); 
    }, 
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
app.use(multer({storage}).single("image"));


//Express-Handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars");
app.set("views", "./src/views"); 

//Rutas
app.use("/", imagenRouter);


app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})

