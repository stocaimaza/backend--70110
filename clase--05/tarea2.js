const fs = require("fs").promises;

class ProductManager {
    static ultId = 0;

    constructor(path) {
        this.products = [];
        this.path = path;
    }

    async addProduct(title, description, price, img, code, stock) {

        //Realizamos las validaciones y si las pasa creamos el objeto con el id autoincrementable

        if (!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        //Validamos que el codigo sea unico. 

        if (this.products.some(item => item.code === code)) {
            console.log("El codigo debe ser unico o todos moriremos");
            return;
        }

        //Creamos el nuevo objeto: 
        const nuevoProducto = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        //Lo agrego al array: 
        this.products.push(nuevoProducto);

        //Ultimo pasito, lo metemos a un archivo: 

        await fs.writeFile(this.path, JSON.stringify(this.products, null, 2))

    }

    

    async getProducts() {
        try {
            const nuevoArray = await this.leerArchivo(); 
            return nuevoArray;
        } catch (error) {
            console.log("Tenemos un error");
            throw error; 
        }
    }
        

    async leerArchivo() {
        const respuesta = await fs.readFile(this.path, "utf-8");
        const arrayProductos = await JSON.parse(respuesta);
        return arrayProductos;
    }
    

    getProductById(id) {
        const productoBuscado = this.products.find(item => item.id === id);

        if (!productoBuscado) {
            console.log("Not Found!, maldita rata de dos patas!");
        } else {
            console.log(productoBuscado);
        }
    }
}

///TESTEAMOS: 
//Se creará una instancia de la clase “ProductManager”

const manager = new ProductManager("./productos.json");

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

//Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

//manager.addProduct("Arroz", "Marolio", 200, "sin imagen", "abc123", 25);

// const testearMostrarProductos = async () => {
//     await 
// }

const testearMostrarProductos = async () => {
    let array = await manager.getProducts(); 
    console.log(array);
}

testearMostrarProductos(); 


