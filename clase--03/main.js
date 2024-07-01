/** CLASE 3 - PROGRAMACION SINCRONICA Y ASINCRONICA **/

//Temas de hoy: 

//1) Enfoque sincrónico vs asincrónico
//2) Callback
//3) Promesas
//4) Async Await

/////////////////////////////////////////////////////

//Recordemos que la programacion sincrónica es un enfoque o estilo de programacion en el que las tareas se ejecutan secuencialmente en el orden en el que se escriben. 

console.log("Primero");
console.log("Segundo");
console.log("Tercero");

//Cada tarea es ejecutada en orden, y bloquea la ejecucion de la siguiente hasta que esta se complete. 

//EJEMPLO CON FUNCIONES: 

function a() {
    console.log("1");
    b();
}

function b() {
    console.log("2");
    c();
}

function c() {
    console.log("3");
}

a();

//PROGRAMACIÓN ASINCRÓNICA
//Es un enfoque o estilo de programación en que las tareas se ejecutan en segundo plano y no bloquean la ejecucion de la siguiente tarea. 
//Las tareas son independientes y no bloquean el flujo de la ejecucion del programa. 
//Ejemplo, estoy haciendo la peticion de info a una API, no voy a bloquear la app hasta que la API me de una respuesta. 

//Ejemplos: 

setTimeout(() => {
    console.log("Primer tareaaaaa");
}, 2000)


setTimeout(() => {
    console.log("Segunda tarea, ahh re loco");
}, 3000)

//CALLBACKS

// Que es una funcion callback? Esta es una funcion que pasamos como argumento a otra funcion. 

//Ojo, a no confundir con una "Funcion de Orden Superior". 

function suma(numeroA, numeroB, callback) {
    let resultado = numeroA + numeroB;
    callback(resultado);
}

//FUNCION CALLBACK:
function mostrarResultado(pepe) {
    console.log("El resultado de la suma es: " + pepe);
}

//INVOCAMOS A LAS FUNCIONES: 

suma(10, 5, mostrarResultado);

////////////////////////////////////////

//EJEMPLO FUNCION MAP MADE IN LA SALADA. 

//La funcion map es una funcion de orden superior que recibe un callback, y retorna un nuevo array con los elementos originales pero transformados. 

let numeros = [1, 2, 3, 4, 5];

let numerosDuplicados = numeros.map(numero => numero * 2);

console.log(numeros);
console.log(numerosDuplicados);

//¿Como hariamos esta funcion map?

function mapear(array, callback) {
    let arrayNuevo = [];

    for (let i = 0; i < array.length; i++) {
        arrayNuevo.push(callback(array[i]));
    }
    return arrayNuevo;
}

//Voy a crear la funcion callback: 

function duplicar(numero) {
    return numero * 2;
}

console.log("Nueva función MAP hecha en casa: " + mapear(numeros, duplicar));


//3) PROMESAS: 

//Las promesas son objetos que representan un hecho eventual a futuro. Las vamos a usar en operaciones asincrónicas que pueden resultar exitosas o fallidas. 

//LAS PROMESAS TIENEN 3 ESTADOS: 
//Pendiente: (pending) estado inicial de la promesa. La operacion todavia no se completo ni se rechazo. 
//Exitosa: (fullfilled) la operacion se completó correctamente. 
//Fallida: (rejected) la operacion asincronica fallo y se rechazo la promesa. 

//Ejemplo en codigo: 

const promesa = new Promise((resolve, rejected) => {
    //Cuerpo de la promesa, aca colocamos el codigo que queremos ejecutar. 

    //Resolve y Reject son funciones que nos provee la promesa para indicarle el estado de la misma. 

    let estado = false
    if (estado) {
        resolve("Exito en la promesa, me llego la camiseta");
    } else {
        rejected("No se cumple la promesa");
    }
})

console.log(promesa);

//Métodos THEN y CATCH: 
//Estos metodos nos permiten manejar el resultado de la promesa, los vamos a concatenar a la promesa: 

//THEN: lo vamos a utilizar cuando la promesa se resuelve exitosamente. 
//CATCH: lo vamos a usar cuando la promesa se rechace. 
//FINALLY: se va ejecutar siempre, se resuelva o se rechace la promesa. Es opcional y se agregó en ES8. 

promesa
    .then(() => console.log("La promesa es una maravillaaaa se resuelve todo y la vida nos sonrie"))
    .catch(() => console.log("Todo fracasa, quiero llorar una semana entera y ver netflix"))
    .finally(() => console.log("Proceso finalizado, no me importa si se cumple o no"))


// Practica con array de productos: 

const productos = [
    { id: 1, nombre: "Mesa", precio: 5000 },
    { id: 2, nombre: "Silla", precio: 1000 },
    { id: 3, nombre: "Cuadro", precio: 500 }
]


//Voy a crear una promesa que me devuelva un producto por su id: 

function buscarProductoPorId(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const producto = productos.find(producto => producto.id === id);
            if (producto) {
                res(producto);
            } else {
                rej("No existe el producto, vamos a morir!");
            }
        }, 2000)
    })
}

//Ahora llamamos a la funcion buscarProductoPorID: 

buscarProductoPorId(20)
    .then((producto) => console.log(producto))
    .catch((error) => console.log(error))


//4) ASYNC AWAIT: 

// async function buscarProductoPorIdAsync(id) {
//     const producto = await buscarProductoPorId(id);
//     console.log(producto); 
// }

// buscarProductoPorIdAsync(3);

//Generalmente el async y await lo usamos con el bloque try catch: 

//Ejemplo: 

async function buscarProductoPorIdAsync(id) {
    try {
        const producto = await buscarProductoPorId(id);
        console.log(producto);
    } catch (error) {
        console.log(error);
    }
}

buscarProductoPorIdAsync(3);

//Consultamos a una API: 

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await respuesta.json();
        console.log(usuarios);
    } catch (error) {
        console.log(error)
    }
}


obtenerUsuarios();

//Ustedes en los cursos pasados: 

fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json() )
    .then( usuarios => console.log(usuarios))
    .catch(error => console.log( "tenemos un error, vamos a morir: ", error))


