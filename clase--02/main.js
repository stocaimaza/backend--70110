/** CLASE 2 - NUEVAS FUNCIONALIDADES DE ECMASCRIPT **/

//Repasamos herramientas de ES6: 

//DESESTRUCTURACIÓN:  

const pelicula = {
    titulo: "El Padrino", 
    director: "Francis Ford Coppolo", 
    genero: "Drama", 
    lanzamiento: 1972
}

//Antes de ES6: 

let titulo = pelicula.titulo; 
console.log(titulo);

let {titulo:tituloPeli,  director, genero, lanzamiento } = pelicula; 
console.log(tituloPeli); 

genero = "Terror"; 
console.log("La variable genero dice: " + genero); 

console.log(pelicula);

//Con Arrays: 

let numeros = [1, 2, 3, 4, 5];

//Antes de ES6: 

let uno = numeros[0]; 
let dos = numeros[1]; 
console.log(uno, dos);

//Con la llegada de ES6: 

let [, , indiceDos, indiceTres, indiceCuatro] = numeros; 

//console.log(indiceCero);
//console.log(indiceUno);
console.log(indiceDos); 
console.log(indiceTres);

//Valores por defecto: 
//Nos permite asignar valores a los parametros de una funcion. 

function saludar(nombre = "Alumno") {
    console.log(`Hola ${nombre}`);
}

saludar(); 
saludar("Samuel"); 

//Trabajo por módulos: 

import productosMarolio from "./datos.js";

console.log(productosMarolio);

//ES7: esta version fue lanzada en el año 2016 y tiene dos grandes cambios: 
// - Operador de exponenciación: **
// - Includes: Permite saber si hay algun elemento dentro de un array o string. 

//Antes de ES7:  

let base = 4; 
let exponente = 3; 

let resultado = Math.pow(base, exponente); 
console.log(resultado); 

//Ahora con ES7: 

let resultado2 = base ** exponente; 
console.log(resultado2);

//INCLUDES:

const losSimpsons = ["Homero", "Marge", "Bart", "Lisa", "Maggie"]; 

//Antes de ES7: 

console.log(losSimpsons.indexOf("Abuelo") > -1 ); 

//Ahora con ES7: 

console.log(losSimpsons.includes("Abuelo")); 

let frase = "Hola, soy pepe argento"; 

console.log(frase.includes("coky")); 

//ES8: llega en el año 2017. 
//Mejoras:
// - Async y Await (lo vemos la clase que viene)
// - Object.entries Object.values Object.keys

///Object.values: devuelve un array con los valores que tienen las propiedades de un objeto. 

const empleado = {
    nombre: "Pepe", 
    apellido: "Argento", 
    edad: 45, 
    puesto: "Vendedor de Zapatos"
}

const resultadoEmpleadoValues = Object.values(empleado); 
console.log(resultadoEmpleadoValues); 

///Object.keys: devuelve un array con las keys de un objeto

const resultadoEmpleadoKeys = Object.keys(empleado); 
console.log(resultadoEmpleadoKeys); 

//Object.entries: Devuelve un array de arrays, donde cada sub-array contiene la clave y valor del objeto. 

const resultadoEmpleadoEntries = Object.entries(empleado);
console.log(resultadoEmpleadoEntries); 

//Variables y metodos estaticos: 
// Estan asociados a la clase y para poder utilizarlos no se require de una instancia. 

class Contador {
    static cantidad = 0; 

    constructor() {
        Contador.cantidad++; 
    }

    static obtenerCantidad() {
        return Contador.cantidad; 
    }
}

const contador1 = new Contador(); 
const contador2 = new Contador(); 
const contador3 = new Contador(); 
const contador4 = new Contador(); 
console.log(Contador.obtenerCantidad()); 

//ES9: llega a nuestra vida en el año 2018. 
//Finally llega en esta version, lo vemos la proxima clase

//Operador Spread: Operador de propagacion. 
//Nos permite desparramar los elementos de un objeto/array de forma individual en otro contexto. Este contexto puede ser un array, un objeto o una funcion. 

let arrayNombres = ["tinkiwinki", "dipsi", "lala", "po", "bebe sol"]; 

console.log(...arrayNombres);
//Es lo mismo a realizar esto: 

console.log(arrayNombres[0], arrayNombres[1], arrayNombres[2], arrayNombres[3], arrayNombres[4]); 

//Algunos usos comunes: 

//- COPIA DE OBJETOS: 

const coky = {
    nombre: "Coky",
    apellido: "Argento",
    edad: 17
}

const coky2 = {...coky}; 
//De esta forma no copiamos objetos en JS. 
coky.edad = 35; 

console.log(coky);
console.log(coky2); 

// - Concatenar Arrays: 

let numeritos = [1, 2, 3, 4, 5]; 
let numeritos2 = [6, 7, 8, 9, 10];

let arrayConcatenado = [...numeritos, ...numeritos2]; 
console.log(arrayConcatenado);

//ES10: Version que llega a nuestras vidas en el año 2019: 
// Método trim: me permite elimianar los espacios en blanco de un string. 
// Flat: nos permite aplanar una array. 

//FLAT: Nos permite convertir un array multidimensional en un array de una sola dimension. 

let arrayMulti = [1, 2, 3, [4, 5, 6, [ 7, 8, 9 ]]]; 

console.log(arrayMulti.flat(2)); 

//Trim: 

let fraseConEspacios = "   Hola, soy Tinki Winki     "; 

console.log(fraseConEspacios.trimStart()); //"Hola, soy Tinki Winki    "

//Y si lo quieren hacer con el final: 

console.log(fraseConEspacios.trimEnd()); 

//ES11: lanzada en el año 2020. 
// Nullish: nos permite establecer un valor por defecto cuando tener un null o undefined. 

let cliente = undefined; 
console.log(cliente ?? "Invitado");

// Acceso condicional a un objeto: nos permite acceder a las propiedades de un objecto sin necesidad de validar si el objeto existe o no. 

let alumno = null;

console.log(alumno?.nombre); 

alert("Hola, esto funciona?");




