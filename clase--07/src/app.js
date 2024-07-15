/** CLASE 7 - Express Avanzado **/

//Temas de hoy: 

//1) Codigos de estado
//2) ¿Que es una API?
//3) API Rest
//4) Metodos de las peticiones 
//5) Postman 
//6) Practicamos

//cliente = pedido = request
//servidor = respuesta = response 


//Codigos de estado: cada vez que hacemos una peticion al servidor, este no solo me responde con informacion, tambien nos debe informar el "estado de la peticion". 
//Los codigos de estado son numeritos de 3 cifras que nos indican el resultado de la peticion. 

//Estos se organizan en 5 categorias: 

//Los que comienzan con 1xx: son respuestas informativas. 
//Los que comienzan con 2xx: respuestas exitosas, indica que la peticion fue recibida, entendida y aceptada exitosamente. 
//Los que comienzan con 3xx: redirecciones. 
//Los que comienzan con 4xx: errores del cliente, indican que hubo un error por parte del cliente al realizar la peticion. 
//Los que comienzan con 5xx: errores del servidor, indican que hubo un error por parte del servidor. 


//2) ¿Que es una API? 
//API es el acrónimo de Application Programming Interface o "Interfaz de programacion de aplicaciones". 
//Es un conjunto de definiciones y reglas que permiten que dos equipos puedan integrarse para trabajar juntos. (Recuerden la imagen del restaurante o el ejemplo del contrato de alquiler). 

//Rest permite definir la estructura que deben tener los datos para poder transferirse: 

//Los dos mas importantes: 
//JSON: JavaScript Object Notation: formato de texto secillo para el intercambio de datos. 
//XML: extensible Markup Language: es un lenguaje de marcado creado para el almacenamiento e intercambio de informacion. 

//Api Rest: Un modelo completo para tener perfectamente estipulados los protocolos, las reglas, e incluso la estructura de la informacion, con el fin de poder hacer un sistema de comunicaion completo entre las computadoras. 

///////////////////////////////////////////////////////////////////////

//Practicamos los diferentes métodos: 

import express from "express"; 
const app = express();
const PUERTO = 8080; 

//Middleware: 
app.use(express.json()); 
//Me permite que el servidor interprete el formato JSON. 

//Fuente de datos: 

const clientes = [
    {id: "1", nombre: "Pepe", apellido: "Argento"},
    {id: "2", nombre: "Moni", apellido: "Argento"},
    {id: "3", nombre: "Paola", apellido: "Argento"},
    {id: "4", nombre: "Coky", apellido: "Argento"}
]

//Metodo GET, me permite obtener registros: 

app.get("/clientes", (req, res) => {
    res.send(clientes); 
})

//Metodo GET, recupero un cliente por id: 

app.get("/clientes/:id", (req, res) => {
    let id = req.params.id; 
    let clienteBuscado = clientes.find( cliente => cliente.id === id); 

    if(clienteBuscado) {
        return res.send(clienteBuscado); 
    } else {
        return res.send("No se encuentra el cliente con el ID proporcionado"); 
    }
})

//Metodo POST, me permite enviar registros

app.post("/clientes", (req, res) => {
    const clienteNuevo = req.body; 
    //Recupero el dato que me envia el cliente desde un formulario. Todo esto viaja en el objeto request, propiedad body. 

    clientes.push(clienteNuevo);
    //Agrego el nuevo cliente al array. 

    console.log(clientes); 

    res.send({status: "success", message: "Cliente creado"}); 
})


//Metodo PUT, me permite actualizar un registro. 

app.put("/clientes/:id", (req, res) => {
    const { id } = req.params; 
    const { nombre, apellido } = req.body; 

    //Tengo que buscar el indice que corresponde a este ID: 
    let clienteIndex = clientes.findIndex(cliente => cliente.id === id); 

    if (clienteIndex !== -1) {
        //Si el cliente existe, actualizo sus datos: 
        clientes[clienteIndex].nombre = nombre; 
        clientes[clienteIndex].apellido = apellido; 

        res.send({status: "success", message: "cliente actualizado"});
    } else {
        res.status(404).send({status: "error", message: "Cliente no encontrado"}); 
    }
})

//Metodo DELETE, eliminamos a TinkiWinki: 


app.delete("/clientes/:id", (req, res) => {
    const { id } = req.params; 
    
    //Tengo que buscar el indice que corresponde a este ID: 
    let clienteIndex = clientes.findIndex(cliente => cliente.id === id); 

    if (clienteIndex !== -1) {
        //Si el cliente existe, lo elimino del array:
        clientes.splice(clienteIndex, 1);
        console.log(clientes);

        res.send({status: "success", message: "cliente eliminado"});
    } else {
        res.status(404).send({status: "error", message: "Cliente no encontrado"}); 
    }
})




app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`); 
})

