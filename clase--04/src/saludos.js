const temprano = () => {
    console.log("Buenos dias");
}

const tarde = () => {
    console.log("Buenas tardes");
}

const noche = () => {
    console.log("Buenas noches");
}

//De esta forma lo exportamos con CommonJS

// module.exports = {
//     temprano,
//     tarde,
//     noche
// }

//Exportamos con ES Modules: 

export {temprano, tarde, noche }