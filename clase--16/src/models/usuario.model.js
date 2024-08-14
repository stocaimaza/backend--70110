import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String
        
    }, 
    apellido: String, 
    email: {
        type: String, 
        unique: true, 
        required: true
    }, 
    edad: {
        type: Number,
        index: true
    }
})

const UserModel = mongoose.model("usuarios", userSchema);

export default UserModel; 