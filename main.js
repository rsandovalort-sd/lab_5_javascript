//Ejercicio 1
import {PI, IVA, DIAS_SEMANA} from "./constantes.js";
import { areaCirculo, precioConIva, sumar, restar, multiplicar} from "./operaciones-matematicas.js";


console.log(DIAS_SEMANA[2])
console.log(areaCirculo(5))
console.log(precioConIva(100))

//EJERCICIO 2

console.log(sumar(5,4))
console.log(restar(5,4))
console.log(multiplicar(5,4))

//para el 4to ejercicio
import { ROLES } from './lab_5_javascript/usuariosConstantes.js';
import { crearUsuario, esAdmin } from './lab_5_javascript/usuarios.js';

// Crear usuarios
const usuario1 = crearUsuario("Daniel", ROLES.ADMIN);
const usuario2 = crearUsuario("Ricardo", ROLES.CLIENTE);

// Mostrar información
console.log("\n--- Información de Usuarios ---");
console.log("Usuario 1:", usuario1);
console.log("¿Pedro es admin?", esAdmin(usuario1));

console.log("Usuario 2:", usuario2);
console.log("¿Carlos es admin?", esAdmin(usuario2));
