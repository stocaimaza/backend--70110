/** CLASE 14 - MONGOOSE **/

//Temas de hoy: 

//1) Clientes de base de datos
//2) MongoDB Atlas
//3) DBaaS (database as a service)
//4) Configurar e instalacion de Mongoose
//5) CRUD en nuestra app. 

//Instalamos nodemon y express. 

//Instalamos mongoose: npm i mongoose


import express from "express"; 
const app = express(); 
const PUERTO = 8080;
import clientesRouter from "./routes/clientes.router.js"; 

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas

app.use("/clientes", clientesRouter); 

//Listen

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`); 
})

//Pasos para conectar la base de datos: 
//1) Importamos mongoose a la app
import mongoose from "mongoose";
//2) Usamos el metodo connect 
//3) Le pasamos nuestra URI

mongoose.connect("mongodb+srv://coderhouse70110:coderhouse@cluster0.pripd.mongodb.net/Clinica?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Nos conectamos a la BD correctamente"))
    .catch((error) => console.log("Tenemos un error, vamos a re morir:", error))