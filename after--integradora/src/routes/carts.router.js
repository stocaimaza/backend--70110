const express = require("express"); 
const router = express.Router(); 
const CartManager = require("../dao/db/cart-manager-db.js"); 
const cartManager = new CartManager(); 

//1) Ruta post que cree un carrillo nuevo.

router.post("/", async (req, res) => {
    try {
        const nuevoCarrito = await cartManager.crearCarrito(); 
        res.json(nuevoCarrito);
    } catch (error) {
        res.status(500).send("Error del servidor, vamos a re morir de antrax");
    }
})


//2) Listamos los productos de determinado carrito: 

router.get("/:cid", async (req, res) => {
    let carritoId = req.params.cid;

    try {
        const carrito = await cartManager.getCarritoById(carritoId); 
        res.json(carrito.products); 
    } catch (error) {
        res.status(500).send("Error al obtener los productos del carrito, rata de dos patas!"); 
    }
})


//3) Agregar productos al carrito
router.post("/:cid/product/:pid", async (req, res) => {
    let carritoId = req.params.cid;
    let productoId = req.params.pid; 
    let quantity = req.body.quantity || 1; 

    try {
        const actualizado = await cartManager.agregarProductosAlCarrito(carritoId, productoId, quantity); 
        res.json(actualizado.products); 
    } catch (error) {
        res.status(500).send("Error al agregar un producto, moriremos");
    }
})



module.exports = router; 