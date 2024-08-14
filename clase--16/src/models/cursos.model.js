import mongoose from "mongoose";

const cursosSchema = new mongoose.Schema({
    dias: [], 
    nombre: {
        type: String, 
        index: true
    }, 
    horario: String, 
    numeroComision: String
})

const CursoModel = mongoose.model("cursos", cursosSchema); 

export default CursoModel;