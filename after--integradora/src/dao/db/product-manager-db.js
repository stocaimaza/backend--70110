const ProductModel = require("../models/product.model.js"); 

class ProductManager {
    async addProduct({ title, description, price, img, code, stock, category, thumbnails }) {
        try {
            if (!title || !description || !price || !img || !code || !stock || !category) {
                console.log("Todos los campos son obligatorios");
                return;
            }
    
           //Aca tenemos que cambiar la validacion: 

           const existeProducto = await ProductModel.findOne({code: code}); 
           if(existeProducto) {
                console.log("El codigo debe unico, rata de dos patas! "); 
                return; 
           }
    
            
            const nuevoProducto = new ProductModel({
                title,
                description,
                price,
                img,
                code,
                stock,
                category, 
                status: true, 
                thumbnails: thumbnails || []
            })
    
            await nuevoProducto.save(); 
            
        } catch (error) {
            console.log("Error al agregar un producto: ", error); 
            return null; 
        }
        
    }

    async getProducts() {
        try {
            const arrayProductos = await ProductModel.find(); 
            return arrayProductos;
        } catch (error) {
            console.log("Error al obtener los productos", error); 
        }

    }

    async getProductById(id) {
        try {
            const producto = await ProductModel.findById(id); 
            if(!producto) {
                console.log("producto no encontrado"); 
                return null;
            }
            return producto; 
        } catch (error) {
            console.log("Error al buscar por id", error); 
        }
    }

    async updateProduct(id, productoActualizado) {
        try {
            const updateado = await ProductModel.findByIdAndUpdate(id, productoActualizado); 

            if(!updateado) {
                console.log("No se encuentra el producto, ingresa datos correctos"); 
                return null; 
            }

            return updateado; 
        } catch (error) {
            console.log("Tenemos un error al actualizar productos", error); 
        }
    }

    async deleteProduct(id) {
        try {
            const deleteado = await ProductModel.findByIdAndDelete(id); 

            if(!deleteado) {
                console.log("No se encuentra el producto, ingresa datos correctos"); 
                return null; 
            }

            //return deleteado; 
            console.log("Producto eliminado correctamente"); 
            
        } catch (error) {
            console.log("Tenemos un error al eliminar productos"); 
        }
    }

}

module.exports = ProductManager; 