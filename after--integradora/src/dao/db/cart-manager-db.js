const CartModel = require("../models/cart.model.js");

class CartManager {

    async crearCarrito() {
        try {
            const nuevoCarrito = new CartModel({ products: [] });
            await nuevoCarrito.save();
            return nuevoCarrito;
        } catch (error) {
            console.log("Error al crear un carrito");
            return null;
        }
    }

    //Retorne un carrito por id:

    async getCarritoById(carritoId) {
        try {
            const carrito = await CartModel.findById(carritoId);
            if (!carrito) {
                console.log("No existe ese carrito que buscas");
                return null;
            }
            return carrito;
        } catch (error) {
            console.log("Error al obtener el carrito por id");
            throw error;
        }
    }

    //Agregar productos al carrito: 

    async agregarProductosAlCarrito(carritoId, productoId, quantity = 1) {
        try {
            const carrito = await this.getCarritoById(carritoId);
            const existeProducto = carrito.products.find(item => item.product.toString() === productoId);

            if (existeProducto) {
                existeProducto.quantity += quantity;
            } else {
                carrito.products.push({ product: productoId, quantity });
            }

            //Vamos a marcar la propiedad "products" como modificada antes de guardar: 
            carrito.markModified("products");
            await carrito.save();
            return carrito;
        } catch (error) {
            console.log("Error al agregar producto");
            throw error;
        }
    }

}

module.exports = CartManager; 