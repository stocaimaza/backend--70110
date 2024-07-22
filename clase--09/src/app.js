/** CLASE 9 - MOTORES DE PLANTILLAS **/

//Temas de hoy: 
//1) ¿Que son los motores de plantillas?
//2) Express-Handlebars, instalacion y uso. 
//3) Condicionales y ciclos
//4) Creamos el router para las vistas
//5) Agregamos JS y CSS a nuestras vistas 
//6) Vemos algun ejercicio de la pre entrega

//Motores de plantillas: son herramientas que nos permite generar html dinamico. 

//Instalamos: npm install express-handlebars

import express from "express";
import exphbs from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
const app = express(); 
const PUERTO = 8080; 

//Middleware 
app.use(express.json());
app.use(express.static("./src/public"));

//Configuramos Express-Handlebars

app.engine("handlebars", exphbs.engine());
//Aca configuramos el motor de plantillas, le digo a experess que cuando encuentre un archivo con la extension .handlebars, lo renderice utilizando este motor. 

app.set("view engine", "handlebars"); 
//Por ultimo, le decimos en donde se encuentran estos archivos con la extensión "handlebars"
app.set("views", "./src/views"); 

//Tus rutas
app.use("/", viewsRouter);


app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})