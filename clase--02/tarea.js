class ProductManager {
    static ultId = 0; 

    constructor() {
        this.products = []; 
    }

    addProduct(title, description, price, img, code, stock) {

        //Realizamos las validaciones y si las pasa creamos el objeto con el id autoincrementable

        if(!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios"); 
            return; 
        }

        //Validamos que el codigo sea unico. 

        if(this.products.some( item => item.code === code)) {
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

    getProductById() {

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

manager.addProduct("producto prueba", "el mejor producto", 200, "sin imagen", "abc123", 25);

//Chequeamos que se agrego: 
console.log(manager.getProducts())