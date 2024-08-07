import { Router } from "express";
const router = Router(); 

//Muy importante! me importo el model: 
import ClientesModel from "../models/clientes.model.js";

//1) Obtener el listado de todos los clientes: 

router.get("/", async (req, res) => {
   try {
        const listadoClientes = await ClientesModel.find(); 
        res.send(listadoClientes); 
   } catch (error) {
        res.status(500).send("Error interno del servidor al recibir el listado de clientes"); 
   }
})

//2) Subimos un nuevo cliente por Postman: 

router.post("/", async (req, res) => {
    const nuevoCliente = req.body; 

    try {
        const nuevoDocumento = new ClientesModel(nuevoCliente); 
        await nuevoDocumento.save();
        res.send("Cliente creado exitosamente");
    } catch (error) {
        res.status(500).send("Error al crear un cliente"); 
    }
})

//3) Actualizamos un cliente por su ID: 

router.put("/:id", async (req, res) => {
    let idBuscado = req.params.id; 
    let nuevosDatos = req.body; 

    try {
        const user = await ClientesModel.findByIdAndUpdate(idBuscado, nuevosDatos); 

        if(!user) {
            return res.status(404).send("Cliente no encontrado"); 
        }

        res.status(201).send("User actualizado correctamente"); 
    } catch (error) {
        res.status(500).send("Error al actualizar un user"); 
    }
})

//4) Eliminamos un cliente: 

router.delete("/:id", async (req, res) => {
    let idBuscado = req.params.id; 

    try {
        const user = await ClientesModel.findByIdAndDelete(idBuscado);
        if(!user) {
            return res.status(404).send("Cliente no encontrado"); 
        }
        res.status(200).send("Cliente eliminado"); 
    } catch (error) {
        res.status(500).send("Error del servidor al eliminar un cliente");
    }
})



export default router; 