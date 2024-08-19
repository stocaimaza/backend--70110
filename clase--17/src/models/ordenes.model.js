import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"; 

const schema = new mongoose.Schema({
    nombre: String, 
    tam: String,
    precio: Number, 
    cantidad: Number
})

schema.plugin(mongoosePaginate);

const OrdenModel = mongoose.model("ordenes", schema); 

export default OrdenModel;