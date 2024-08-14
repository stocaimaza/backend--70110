import { Router } from "express";
const router = Router();
import {promises as fs} from "fs"; 
//Necesito el Model de las imagenes: 
import ImagenModel from "../models/imagen.model.js";

//Home donde estan todos los post: 

router.get("/", async (req, res) => {
    
    const imagenes = await ImagenModel.find().lean(); 
    //.lean()

    //Otra forma de arreglarlo: 
    // const nuevoArray = imagenes.map( imagen => {
    //     return {
    //         id: imagen._id,
    //         title: imagen.title,
    //         description: imagen.description,
    //         filename: imagen.filename, 
    //         path: imagen.path
    //     }
    // })
    
    res.render("index", {imagenes}); 
})

//Ruta para acceder al formulario de carga: 

router.get("/upload", (req, res) => {
    res.render("upload"); 
})

//Ruta upload, para subir imagenes con multer

router.post("/upload", async (req, res) => {
    try {
        const imagen = new ImagenModel(); 
        imagen.title = req.body.title; 
        imagen.description = req.body.description; 
        imagen.filename = req.file.filename;
        imagen.path = "/img/" + req.file.filename; 

        //Guardamos en la base de datos: 
        await imagen.save(); 

        res.redirect("/"); 
    } catch (error) {
        res.status(500).send({message: "Error en el servidor al cargar una imagen"}); 
    }
})

//Ruta para eliminar una imagen: 

router.get("/image/:id/delete", async (req, res) => {
    //Recuperamos del parametro dinamico el id de la imagen.
    const {id} = req.params; 

    //Borramos el documento en mongodb de la imagen
    const imagen = await ImagenModel.findByIdAndDelete(id); 

    //Borro la imagen fisica de mi proyecto
    await fs.unlink("./src/public" + imagen.path);

    //Me voy a home para ver los cambios actualizados. 
    res.redirect("/");
})

export default router; 



