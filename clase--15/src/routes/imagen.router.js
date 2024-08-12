import { Router } from "express";
const router = Router();
//Necesito el Model de las imagenes: 
import ImagenModel from "../models/imagen.model.js";

//Rutas: 

router.get("/", (req, res) => {
    res.render("index"); 
})


export default router; 



