/** CLASE 6 - SERVIDORES WEB **/

//Temas de hoy:

//1) ¿Que es un servidor? 
//2) Protocolo HTTP
//3) Modulo Nativo HTTP
//4) Express JS
//5) Objeto Request
//6) Tarea para el hogar

//1) Servidor: software o hardware que almacena y administra recursos. Pueden ser imagenes, archivos, sitios web, videos, datos, juegos. 
//Su funcion es responder a las peticiones de los clientes. Es importante aclarar que un servidor puede responder a multiples clientes al mismo tiempo. 
//A esta relacion se la conoce como modelo cliente-servidor. 

//cliente = pedidos = request
//servidor = respuesta = response


//¿Bajo que protocolo se comunican? 

//2) HTTP: significa "Hypertext Transfer Protocol" o "Protocolo de Transferencia de Hipertexto". Es un protocolo de comunicacion, es decir, un conjunto de reglas que definen como se comunican dos o mas dispositivos. 

//3) Modulo Nativo HTTP: es un modulo qe viene por defecto con Node JS. Nos permite crear un servidor web y enviar informacion a traves del protocolo HTTP. 

//Primer paso: vamos a importar el modulo

//const http = require("http"); 

//Segundo paso: voy a crear el servidor web. Para eso vamos a utilizar el metodo createServer() del modulo HTTP. Este metodo recibe como parametro una funcion callback que va a ser ejecutada cada vez que se realice una peticion al servidor. Esta funcion callback recibe dos parametros: request y response

// const server = http.createServer( (request, response)=> {
//     response.end("Tengo hambre");
// })

//Tercer paso: vamos a poner a escuchar a nuestro servidor en un puerto. 

const PUERTO = 8080; 

// server.listen(PUERTO, () => {
//     console.log(`Escuchando en el puerto: ${PUERTO}`);
// })

//Nodemon: me permite reiniciar automaticamente el servidor frente a cualquier cambio en el codigo. 
//Lo pueden instalar de forma local como depedencia de desarrollo: npm install  nodemon -D


//4) Express JS: es un framework minimalista de Node JS que nos permite crear servidores web de una manera mucho más sencilla. 

//instalamos: npm install express

//Importamos el modulo: 

const express = require("express"); 
//import express from "express"; 

//Creamos una aplicacion de express
const app = express(); 

//Crear nuestra ruta

app.get("/saludo", (req, res) => {
    res.send("Mi primer servidor con Express, ya lo agrego a Linkedin");
})

//A la raiz de la app

app.get("/", (req, res) => {
    res.send("Olis, estamos en el home");
})

//Tienda

app.get("/tienda", (req, res) => {
    res.send("SECCION TIENDA");
})

//Contacto

app.get("/contacto", (req, res) => {
    res.send("SECCION CONTACTO");
})


//Dejamos a nuestro servidor escuchando

app.listen(8080, () => {
    console.log("Servidor escuchando");
})

//5) Objeto Request: es un objeto que representa la peticion que realiza el cliente al servidor. Este objeto contiene informacion sobre la peticion que se realizo, por ejemplo: la url, el metodo, los paremtros y las querys. 

//Array de productos: 

const misProductos = [
    {id: 1, nombre: "Fideos", precio: 150},
    {id: 2, nombre: "Arroz", precio: 250},
    {id: 3, nombre: "Pan", precio: 350},
    {id: 4, nombre: "Leche", precio: 450},
    {id: 5, nombre: "Galletitas", precio: 550},
    {id: 6, nombre: "Vino", precio: 650}
]

// Podemos colocar una linea de codigo que nos ayuda a entender el formato JSON: 

app.use(express.json()); 

//Ruta productos: 

app.get("/productos", (req, res) => {
    res.json(misProductos);
})

//req.params: esta propiedad contiene los parametros de la ruta. 

//Vamos a pedir un producto por id: 

app.get("/productos/:id", (req, res) => {
    //Me voy a guardar el parametro: 
    let id = req.params.id; //Todo lo que viene de params es un String

    //Una vez que tengo el id puedo buscarlo en mi array:
    let productoBuscado = misProductos.find( producto => producto.id == id); 

    //Si no lo encuentro tiro amenaza de muerte
    if( !productoBuscado ) {
        res.send("Alto ahii rufian, me pasaste un id incorrecto!!! muejejejejejee");
    //Si lo encontro lo envio al cliente
    } else {
        res.json(productoBuscado);
    }
})

//req.query = se refiere a las multiples consultas que se pueden hacer a determinado endpoint. Simplemente para hacerlo funcionar tenemos que colocarle el simbolo de ?. 

app.get("/clientes", (req, res) => {
    //let nombre = req.query.nombre; 
    //let apellido = req.query.apellido; 

    //Otra forma de hacerlo:
    let {nombre, apellido}  = req.query;

    res.send(`Bienvenido ${nombre} - ${apellido}`);
})