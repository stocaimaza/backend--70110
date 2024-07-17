import { Router } from "express";
const router = Router(); 

//Array para almacenar mascotas: 
const pets = []; 

//Rutas para mascotas

router.get("/", (req, res) => {
    res.send(pets); 
})

router.post("/", (req, res) => {
    const nuevaMascota = req.body; 

    pets.push(nuevaMascota); 
    res.send({status: "success", message: "Mascota creada correctamente"}); 
})

export default router; 