//Desarrollar un servidor express que, en su archivo app.js importe al archivo de productManager.

const express = require("express"); 
const app = express(); 
const PUERTO = 8080;

const ProductManager = require("./managers/product-manager.js"); 
const manager = new ProductManager("./src/data/productos.json");

//Middleware: 
app.use(express.json()); 
//Le decimos al servidor que vamos a trabajar con JSON. 

//Rutas

//Listar todos los productos: 

app.get("/products", async (req, res) => {
    const arrayProductos = await manager.getProducts(); 
    res.send(arrayProductos); 
})

//Buscar producto por id: 

app.get("/products/:pid", async (req, res) => {
    let id = req.params.pid; 
    try {
        const producto = await manager.getProductById(parseInt(id)); 

        if(!producto) {
            res.send("Producto no encontrado"); 
        } else {
            res.send(producto); 
        }
    } catch (error) {
        res.send("Error al buscar ese id en los productos"); 
    }
})


app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`); 
})