import { Router } from "express";
const router = Router(); 

//Array de Productos: 

const arrayProductos = [
    {nombre: "Fideos", descripcion: "Los mas ricos", precio: 100 },
    {nombre: "Arroz", descripcion: "Marolio", precio: 200 },
    {nombre: "Aceite", descripcion: "Cocinero", precio: 100000 }
]

//Rutas

router.get("/", (req, res) => {

    const usuario = {
        nombre: "Tinki", 
        apellido: "Winki",
        mayorEdad: false
    }

    res.render("index", {titulo: "TuTiendaOnline", usuario});
})

router.get("/tienda", (req, res) => {
    res.render("tienda", {arrayProductos});
})

router.get("/contacto", (req, res) => {
    res.render("contacto");
})



export default router;