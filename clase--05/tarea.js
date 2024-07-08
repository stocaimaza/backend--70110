class ProductManager {
    static ultId = 0;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {

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
    }

    getProducts() {
        return this.products;
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

const manager = new ProductManager();

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

console.log(manager.getProducts());

//Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

manager.addProduct("Arroz", "Marolio", 200, "sin imagen", "abc123", 25);
manager.addProduct("Fideos", "Marolio", 200, "sin imagen", "abc124", 25);
manager.addProduct("Aceite", "Marolio", 200, "sin imagen", "abc125", 50);

//Chequeamos que se agrego: 
console.log(manager.getProducts())

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

console.log("--Verificamos por ID: --"); 

manager.getProductById(100);