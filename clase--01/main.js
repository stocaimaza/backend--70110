/** CLASE 1 - PRINCIPIOS BASICOS DE JAVASCRIPT  **/

//Temas de hoy: 
//- Plantillas Literales
//- Funciones 
//- Scope
//- Closures
//- Clases y POO en JS 

//1) Plantillas Literales: 

//Template Strings son una forma de concatenar strings mucho mas sencilla y legible. 

//Antes: 

let mascota = "Fatiga";

let mascotaEdad = 5; 

console.log("Nuestro perro " + mascota + " tiene " + mascotaEdad + " años"); 

//`` alt + 96 = backsticks

console.log(`Nuestro perrrito ${mascota} tiene ${mascotaEdad + 1}`);
//Lo qeu hacemos aca se conoce como interpolacion de variables. 
//En este espacio tambien podemos ejecutar cualquier codigo de javascript. Ejemplo, aumentar la edad en 1. 

//2) Funciones: 
//Las funciones son bloques de código que podemos reutilizar en nuestro programa. 
//Importante:  una función debe tener una sola responsabilidad, es decir, hacer una sola cosa. 

//FUNCIONES DECLARATIVAS: 
//1) Declaramos: 

function saludar(curso) {
    //Cuerpo de la funcion 
    console.log(`Hola comision, como estan? Curso de ${curso} `); 
}

//2) Invocar o llamar a las funciones. 

saludar("Backend");

//¿Se puede invocar una función antes de su declaracion? 
//Si se puede. Solo cuando trabajamos con una funcion declarativa. 
//Esto se puede hacer gracias al "hoisting" (elevacion), que es un proceso interno que realiza el lenguaje durante la lectura del codigo, en donde "eleva" las declaraciones de las funciones. (Ojota! Solo las declarativas!). 

//FUNCIONES EXPRESIVAS: 
//Estas se definen utilizando una expresión. Y las trabajamos asignandolas a variables. 

let nuevoSaludo = function(curso) {
    console.log(`El mejor curso de Coder es : ${curso}`)
}

nuevoSaludo("Backend");

//Función flecha: => son una forma mas corta de escribir funciones expresivas. 

let ultimoSaludo = curso => console.log(`La mejor comision es la de ${curso}`);

ultimoSaludo("backendo"); 

//3) SCOPE: 
//El scope es el alcance que tiene las variables dentro de nuestro programa. 
//En JS tenemos dos tipos de scope: 
//GLOBAL: las variables declaradas en este scope pueden ser accedidas desde cualquier parte del programa. 
//LOCAL: las variables declaradas en este scope solo pueden ser accedidas desde el bloque en el que fueron declaradas. 

let global = 2024;

function saludito() {
    console.log("Hola, estamos en el año: " + global); 
    let curso = "Backend"; 
    console.log("Curso de: " + curso); 
}

saludito(); 

//console.log(curso); 

//4) CLAUSULAS: 
//Los cierres o clausulas en JS es un concepto que se refiere a la capacidad de una función anidada de acceder a las variables de su función padre, incluso cuando la función padre y termino su ejecucion. 

function padre() {
    let deuda = 1500000; 
    function anidada() {
        console.log(deuda); 
    }
    return anidada; 
}

let clausula = padre(); 
clausula(); 

//5) CLASES: 
//Las clases son moldes que nos permiten crear objetos con caracteristicas similares. 

//Vamos a armar la clase persona: 

class Persona {
    //Podemos implementar una función constructora, que se ejecutara cuando creamos un objeto de esta clase. 
    constructor(nombre, edad) {
        this.nombre = nombre; 
        this.edad = edad; 
        //La palabra reservada "this" hace referencia al objeto que se esta creando. 
        //Cada vez que creamos un objeto a partir de una clase decimos que estamos creando una instancia de esa clase. 
    }

    //Podemos agregar métodos: 
    saludar() {
        console.log("Hola, soy " + this.nombre); 
    }

    despedir() {
        console.log("Chau, soy " + this.nombre);
    }

    //Las clases pueden tener métodos y variables estaticas. 
    //Estos le pertenecen a la clase y se pueden invocar sin necesidad de generar una instancia. 

    static planeta = "Tierra"; 

    static especie() {
        console.log("Soy un ser humano"); 
    }
}

let coky = new Persona("Coky", 17); 

console.log(coky);

coky.saludar(); 
coky.despedir(); 

//Si yo quiero invocar una variable o método estatico, recuerden que lo puedo hacer directamente desde el nombre de la clase: 

console.log(Persona.planeta); 
Persona.especie();


//Vamos a heredar de la clase Persona propiedades y métodos, en la clase Estudiante. 

class Estudiante extends Persona { 
    //Si quiero que promedio sea una variable privada, tengo que agregarle el # ants del nombre: 
    #promedio; 
    constructor(nombre, edad, carrera, promedio) {
        super(nombre, edad); 
        this.carrera = carrera; 
        this.#promedio = promedio; 
    }

    get getPromedio() {
        return this.#promedio;
    }

}

let paola = new Estudiante("Paola", 20, "Ingenieria en Sistemas", 10); 
console.log(paola);

paola.saludar(); 
paola.despedir();
console.log(paola.promedio); 
//De esta forma no puedo acceder a la variable privada


//Pero si lo puedo hacer a traves del metodo get: 
console.log(paola.getPromedio);


//Ejemplo desafio: 

class ProductManager {
    constructor() {
        this.productos = [];
    }
    //Metodos: 

    addProduct({producto}) {
        //Recibis un producto por parametro y lo agregas al array "productos". 
        //Peroooo revisa que todos los campos esten completos y que el code no este repetido. 

        // if( !title || !description || !price ) {
        //     console.log("Error, todos los campos son obligatoios");
        //     return; 
        // }

        //Aca pueden usar el metodo some, para validar si el codigo ya existe. 

        


    }
}