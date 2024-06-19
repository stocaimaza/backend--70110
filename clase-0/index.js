/** CLASE 0 - JAVASCRIPT  **/

//DATOS 

//TIPO PRIMITIVOS: 

//1.1 Tipo Number

1561551
1561.12

//Datos numericos que pueden ser enteros o decimales. A los decimales los llamamos tambien "punto flotante". Este tipo de dato esta destinado para operaciones matematicas. 

//1.2 Tipo String

// "Esto es un string"
// 'Esto es otro string'
// `backsticks que las podemos generar con alt + 96`

//Los strings son cadenas de texto. Se pueden escribir con comillas dobles o simples. 

//1.3 Tipo Boolean: 

true
false

//Son valores que pueden ser verdaderos o falsos. Los usamos generalmente para tomar decisiones junto a bucles y condicionales. 

//1.4 Tipo undefined: 

undefined

//Es un valor que se le asigna a una variable cuando no se le ha asignado ningun valor. 

//1.5 Tipo null 

null

//Es un valor que se le asigna a una variable cuando no queremos que tenga ningun valor. Es la ausencia intencional de un valor. 

//VARIABLES: 

//una variable es un espacio de memoria que almacena informacion importante para la aplicacion y como su nombre lo indica puede modificarse en el tiempo. 

//DECLARANDO UNA VARIABLE
let alumno; 

//POR FAVOR NO USEN "VAR"!


//ASIGNAMOS UN VALOR: 

alumno = "Coky Argento"; 

console.log(alumno);

//¿Y si quieren saber que tipo de dato tiene almacenado una variable? 

console.log(typeof alumno);

//INICIALIZAR UNA VARIABLE: 

let profesor = "Tinki Winki"; 

console.log(profesor);

//CONSTANTES: 
//Las constantes son variables que no pueden cambiar su valor. Se declaran con la palabra reservada "const" y una vez que se le asigna un valor no se le puede asignar otro. 

const nacimiento = 1997; 
//nacimiento = 1987;

console.log(nacimiento);

//TIPO OBJETO: aca tenemos objetos, arrays, funciones.. etc. 

//2.1 Tipo Object: 

let cliente = {
    nombre: "Juan", 
    apellido: "Perez", 
    edad: 30
}

console.log(cliente);

//¿Como acceder a sus propiedades individuales? 
console.log(cliente.apellido);

console.log(cliente["nombre"]);

//2.2 Tipo Array: 
//Colecciones de datos. Pueden ser de cualquier tipo de dato. 

let unArray = [1, 2, 3, 4, 5]; 

console.log(unArray);
//Voy a identificar a cada elemento interno con un indice. Empezando desde el 0. 

console.log(unArray[2]);

console.log(unArray.length);
//Me retorna el numero de elementos que tiene un array. 

let mixto = [true, false, 100, "holis", null];

console.log(mixto);

