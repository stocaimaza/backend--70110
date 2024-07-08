/** CLASE 5 - MANEJO DE ARCHIVOS  **/

//Temas de hoy: 

//1) File System
//2) Manejo de archivos de forma sincrónica
//3) Manejo de archivos con callbacks
//4) Manejo de archivos con promesas
//5) Manejo de datos complejos
//6) Presentamos una tarea para el hogar

// FileSystem: es un manejador de archivos que ya viene incorporado con Node JS. 
// Me permite realizar operaciones de Crear, Leer, Actualizar y Borrar registros (CRUD)

// 1 pasito: 

const fs = require("fs");

//console.log(fs);

//a) TRABAJAMOS DE FORMA SINCRONICA: 

const ejemploSin = "./ejemplo-sin.txt";

//Crear un archivo: 

fs.writeFileSync(ejemploSin, "Hola, estamos trabajando en un ejemplo sincronico con 2 grados");

//Leer un archivo: 
// let contenido = fs.readFileSync("./firulais.txt", "utf-8")
// console.log(contenido);

//Primero podemos verificar que el archivo existe: 

// if(fs.existsSync(ejemploSin)) {
//     let respuesta = fs.readFileSync(ejemploSin, "utf-8"); 
//     console.log(respuesta);
// } else {
//     console.log("No existe el archivo, escribi bien o moriremos!");
// }

//Actualizar mi archivo: 

fs.writeFileSync(ejemploSin, "Hola, estamos actualizando el archivo");
//Para actualizar simplemente puedo pisar la informacion. 

//Tambien puedo agregar mas contenido al final: 

fs.appendFileSync(ejemploSin, " y esto lo agregamos al final");

//Eliminar el archivo: 

fs.unlinkSync(ejemploSin);


//2) MANEJO DE ARCHIVOS CON CALLBACKS: 

const ejemploCall = "./ejemplo-call.txt";

fs.writeFile(ejemploCall, "Nuevo archivo, ejemplo con callbacks ahora", (error) => {
    //El tercer parametro es el callback que pregunta si tenemos un error:
    if (error) return console.log("No pudimos crear el archivo");

    //Leemos el archivo: 
    fs.readFile(ejemploCall, "utf-8", (error, contenido) => {
        //Aca el cb tiene dos parametros, uno el error, segundo el contenido.
        if (error) return console.log("No podemos leer el archivo, tenemos un error", error);
        //console.log(contenido);

        //Agregamos más contenido: 
        fs.appendFile(ejemploCall, " mas contenido agregado", (error) => {
            if (error) return console.log("No pudimos agregar mas contenido");

            //Eliminamos

            fs.unlink(ejemploCall, (error) => {
                if (error) return console.log("No podemos eliminar el archivo deseado");
            })
        })
    })
})

//3) MANEJANDO ARCHIVOS CON PROMESAS: 

const ejemploPro = "./ejemplo-pro.txt"; 

const operacionesAsincronicas = async () => {

    //Crear un archivo: 
    await fs.promises.writeFile(ejemploPro, "Nuevo Archivo!! Siiiiiii!!!");

    //Leer un archivo: 
    let respuesta = await fs.promises.readFile(ejemploPro, "utf-8");
    console.log(respuesta); 

    //Agregar contenido adicional: 
    await fs.promises.appendFile(ejemploPro, " agregamos este texto adicional"); 

    //vaaaamooo a re leeer: 
    respuesta = await fs.promises.readFile(ejemploPro, "utf-8"); 
    console.log(respuesta);

    //Lo eliminamos: 
    await fs.promises.unlink(ejemploPro);

}

//operacionesAsincronicas(); 

//5) MANEJO DE DATOS COMPLEJOS: 

const arrayPersonas = [
    {nombre: "TinkiWinki", apellido: "Teletubbie", edad: 50}, 
    {nombre: "Dipsi", apellido: "Teletubbie", edad: 55}, 
    {nombre: "Lala", apellido: "Teletubbie", edad: 48}, 
    {nombre: "Po", apellido: "Teletubbie", edad: 59}, 
    {nombre: "Bebe Sol", apellido: "Teletubbie", edad: 33}
]

const archivoTele = "./tele.json"; 

//1 - Guardar el array en el archivo: 

const guardarArchivo = async () => {
    await fs.promises.writeFile(archivoTele, JSON.stringify(arrayPersonas, null, 2));
}

guardarArchivo(); 

//2 - Leer el archivo. 

const leerArchivo = async () => {
    let respuesta = await fs.promises.readFile(archivoTele, "utf-8"); 
    const arrayNuevo = JSON.parse(respuesta);
    console.log(arrayNuevo);
}

leerArchivo();