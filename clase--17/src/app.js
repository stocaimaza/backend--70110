/** CLASE 17 - MONGO AVANZADO 2  **/

//Temas de hoy: 
//1) Aggregations
//2) Paginacion

import mongoose from "mongoose";
import OrdenModel from "./models/ordenes.model.js";

const main = async () => {
    mongoose.connect("mongodb+srv://coderhouse70110:coderhouse@cluster0.pripd.mongodb.net/Pizzeria?retryWrites=true&w=majority&appName=Cluster0")

    //Ejercicio 1: Calculamos el total de pizzas vendidas por sabores pero solo en tamaño familiar. 

    // const resultado = await OrdenModel.aggregate([
    //     {
    //         $match: {
    //             tam: "familiar"
    //         }
    //     },
    //     {
    //         $group: {
    //             _id: "$nombre",
    //             total: {
    //                 $sum: "$cantidad"
    //             }
    //         }

    //     },
    //     //Ejercicio 2: 
    //     //Ordenamos: 
    //     {
    //         $sort: {
    //             total: 1
    //             //1: ascendente
    //             //-1: descendente
    //         }
    //     },
    //     // Usamos $group poder agrupar ahora todos nuestros resultados en un único campo.
    //     {
    //         $group: {
    //             _id: 1, 
    //             orders: {
    //                 //Si yo quiero que los resultados se guarden en un array puedo usar $push. 
    //                 $push: "$$ROOT"
    //                 //Root hace referencia al documento actual. 
    //             }
    //         }
    //     },
    //     // na vez que agrupamos los resultados, los guardaremos en una colección. 
    //     {
    //         $project: {
    //             _id: 0,
    //             orders: "$orders"
    //             //Aca le decimos que el campo orders va a ser igual a los resultados qeu guardamos en el paso anterior. 
    //         }
    //     }, 
    //     //Ultimo paso super importante, hacemos el merge siempre al final. 
    //     {
    //         $merge: {
    //             into: "reports"
    //         }
    //     }
    // ])

    // console.log(resultado);

    //Paginacion: 
    const resultado = await OrdenModel.paginate({}, {limit: 4, page: 2}); 
    console.log(resultado);
}

//main(); 

/////////////////////////////////////////////////////////////////////////
//LEVANTAMOS UN SERVIDOR CON MOTOR DE PLANTILLAS: 

import express from "express";
import {engine} from "express-handlebars"; 
const app = express();
const PUERTO = 8080;

//BD
mongoose.connect("mongodb+srv://coderhouse70110:coderhouse@cluster0.pripd.mongodb.net/Pizzeria?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectados a la BD"))

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

//Rutas: 
app.get("/pizzas", async (req, res) => {
    let page = req.query.page || 1; 
    let limit = 2; 

    //Recuperar las pizzas de la BD: 
    const pizzasListado = await OrdenModel.paginate({}, {limit, page}); 

    const pizzasResultadoFinal = pizzasListado.docs.map( pizza => {
        const { _id, ...rest} = pizza.toObject();
        return rest;
    })

    res.render("pizzas", {
        pizzas: pizzasResultadoFinal, 
        hasPrevPage: pizzasListado.hasPrevPage,
        hasNextPage: pizzasListado.hasNextPage, 
        prevPage: pizzasListado.prevPage, 
        nextPage: pizzasListado.nextPage, 
        currentPage: pizzasListado.page, 
        totalPages: pizzasListado.totalPages
    })
})

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})