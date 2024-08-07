//Importamos Mongoose: 
import mongoose from "mongoose";

//Definimos el "schema".
//El "schema" es un objeto que nos permite definir la forma de los documentos. Configuramos el nombre de los campos y los tipos de datos que almacenaran. 

const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String, 
    edad: Number
})

//Definimos el Model: 
const ClientesModel = mongoose.model("clientes", clienteSchema); 

export default ClientesModel; 