const fs = require("fs").promises; 

class CartManager {
    constructor(path) {
        this.path = path; 
        this.carts = []; 
        this.ultId = 0; 

        //Cargar los carritos almacenados en el archivo: 
        this.cargarCarritos(); 
    }

    //Crear dos metodos auxiliares para cargar y leer archivos. 

    async cargarCarritos() {
        try {
            const data = await fs.readFile(this.path, "utf-8"); 
            this.carts = JSON.parse(data); 

            if(this.carts.length > 0) {
                //Verifico que exista un elemento creado. 
                this.ultId = Math.max(...this.carts.map(cart => cart.id)); 
                //Utilizo el método map para crear un nuevo array que solo tenga los id del carrito y con Math.max obtengo el mayor. 
            }

        } catch (error) {
            console.log("Error al cargar los carritos desde el archivo", error);
            //Si no existe el archivo, lo voy a crear. 
            await this.guardarCarritos(); 
        }
    }

    async guardarCarritos() {
        await fs.writeFile(this.path, JSON.stringify(this.carts, null, 2)); 
    }

    //Primer consigna crear el carrito: 

    async crearCarrito(){
        const nuevoCarrito = {
            id: ++this.ultId,
            products: []
        }

        this.carts.push(nuevoCarrito); 

        //Guardamos el array en el archivo: 
        await this.guardarCarritos(); 
        return nuevoCarrito; 
    }

    //Retorne un carrito por id:

    async getCarritoById(carritoId) {
        try {
            const carrito = this.carts.find(c => c.id === carritoId); 

            if( !carrito ) {
                throw new Error("No existe un carrito con ese id"); 
            }

            return carrito; 
        } catch (error) {
            console.log("Error al obtener el carrito por id"); 
            throw error; 
        }
    }

    //Agregar productos al carrito: 

    async agregarProductosAlCarrito(carritoId, productoId, quantity = 1) {
        const carrito = await this.getCarritoById(carritoId); 
        const existeProducto = carrito.products.find(p => p.product === productoId);

        if(existeProducto) {
            existeProducto.quantity += quantity; 
        } else {
            carrito.products.push({product: productoId, quantity});
        }

        await this.guardarCarritos();
        return carrito; 
    }

}

module.exports = CartManager; 