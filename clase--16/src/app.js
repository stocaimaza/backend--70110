/** CLASE 16 - MONGO AVANZADO 1  **/

//1) Teoria de la indexacion
//2) Manejo de populations en MongoDB
//3) PRE

//Teoria de la indexacion: 

//Es una tecnica o proceso que se realiza para tener una respuesta a las consultas mucho mas rapido. 

//Esto nos permitira tener una referencia previa al momento de buscar un documento, con el fin de evitar recorrer toda la coleccion, documento por documento, hasta encontrar dicho valor. 

//Esta referencia puede ser una propiedad del documento, y se conoce como indice. 


//mongodb+srv://coderhouse70110:<password>@cluster0.pripd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//////////////////////////////////////////////////////////////////////////////////

// import mongoose from "mongoose";
// import UserModel from "./models/usuario.model.js";

// const main = async () => {
//     await mongoose.connect("mongodb+srv://coderhouse70110:coderhouse@cluster0.pripd.mongodb.net/Coder?retryWrites=true&w=majority&appName=Cluster0")

//     const respuesta = await UserModel.find({edad: {$lt: 19}}).explain("executionStats"); 
//     console.log(respuesta);
// }

// main(); 

//Resultados de la consulta: 
//nReturned: 25000,
//executionTimeMillis: 59

//Consultemos por Carlos: 
//nReturned: 111
//executionTimeMillis: 27

//Si aplicamos el indice a "nombre", verificamos cuando demora ahora en buscar a "Carlos": 

//nReturned: 111,
//executionTimeMillis: 2,

//Buscamos por edad: menores de 19 añitos. 

//nReturned: 384,
//executionTimeMillis: 23,

//Ahora si aplicamos el index en edad. 
//nReturned: 384,
//executionTimeMillis: 2,

//2) Manejo de Populations en MongoDB. 

//Populate es una funcion de Mongoose que nos permite relacionar documentos de diferentes colecciones. 

////////////////////////////////////////////////////////////////////////

//Ejercicio con Cursos y Alumnos aplicando Populations: 

import mongoose from "mongoose";
import AlumnoModel from "./models/alumnos.model.js";
import CursoModel from "./models/cursos.model.js";

const main = async () => {
    await mongoose.connect("mongodb+srv://coderhouse70110:coderhouse@cluster0.pripd.mongodb.net/Coder?retryWrites=true&w=majority&appName=Cluster0"); 

    //Busco un alumno y un curso: 
    const estudiante = await AlumnoModel.findById("66bcbbf70bc20c41d9ea8b44"); 
    const cursoBackend = await CursoModel.findById("66bcbbd30bc20c41d9ea8b40");

    //console.log(estudiante);
    //console.log(cursoBackend);

    //Ahora ingreso el curso a alumno: 

    //estudiante.cursos.push(cursoBackend); 

    //Actualizo el documento: 
    //await AlumnoModel.findByIdAndUpdate("66bcbbf70bc20c41d9ea8b44", estudiante);

    //Ahora siiiiiiiiii yo puedo ver el alumno con sus cursos: 

    const alumnoConCursos = await AlumnoModel.findById("66bcbbf70bc20c41d9ea8b44")
    //.populate("cursos");

    console.log(alumnoConCursos); 
    //console.log(JSON.stringify(alumnoConCursos, null, 2)); 
}

main(); 

