import { Router } from "express";
const router = Router();

//Array para almacenar usuarios: 
const users = [];

//middleware a nivel de ruta: 
function autorizarUsuarios(req, res, next) {
    //Validamos que el usuario es correcto. 
    next();
}

//Rutas para usuarios: 

router.get("/", autorizarUsuarios, (req, res) => {
    res.send(users);
})

router.post("/", (req, res) => {
    const nuevoUsuarios = req.body;

    users.push(nuevoUsuarios);
    res.send({ status: "success", message: "Usuario creado correctamente" });
})


//Ejemplo a nivel de router: 

router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});


export default router; 