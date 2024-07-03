/** CLASE 4 - NPM Y NODE JS **/

//Módulos: archivo de js que contiene variables y funciones que resuelven un mismo problema o tienen al misma finalidad. 

//MODULOS ESCRITOS POR NOSOTROS: 

//Puedo conectar modulos de dos formas: CommonJS y ESModules

//Importamos con CommonJS: 
//const saludos = require("./saludos.js"); 

// saludos.temprano(); 
// saludos.tarde(); 
// saludos.noche(); 

//Importamos con ES Modules: 

import { temprano, tarde, noche } from "./saludos.js";

temprano(); 
tarde(); 
noche(); 

//MODULOS NATIVOS: 
//Son modulos que ya vienen con la instalacion de Node JS y que contiene un conjunto de funciones que nos permiten resolver una tarea en particular. 

//Algunos de los mas usados: 

//fs: para trabajar con un sistema de archivos. 
//http: para crear un servidor web. 
//path: para trabajar con las rutas de archivos. 
//crypto: para encriptar datos. 
//timers: para operaciones asincronicas. 
//console: para mostrar mensajes en la consola. 

//MODULOS DE TERCEROS: 

//dependencia: es un paquete o modulo externo a mi proyecto que necesitamos para funcionar correctamente. 

//La forma de instalar dependencias es con el siguiente comando: npm install nombreDependencia

//Para borrar el comando es el siguiente: npm uninstall nombreDependencia

//Para instalar una version especifica: npm install dependencia@1.0.0

//Para instalar la ultima: npm install dependencia@latest

//Para revisar dependencias desactualizadas: npm outdated

//Para instalar una dependencia global: npm install depedencia -g

//Para instalar dependencia de desarrollo: npm install dependencia -D
