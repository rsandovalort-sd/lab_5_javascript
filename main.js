//Ejercicio 1
import {PI, IVA, DIAS_SEMANA} from "./constantes.js";
import { areaCirculo, precioConIva, sumar, restar, multiplicar, calcularTotal, aplicarImpuestos, aplicarDescuento, aplicarDescuentoPorRol} from "./operaciones-matematicas.js";

console.log("\n---Constantes---")
console.log("El tercer día de la semana es: ",DIAS_SEMANA[2])
console.log("El área del círculo es: ",areaCirculo(5))
console.log("El precio con IVA del producto que cuesta 100 es: ",precioConIva(100))

//EJERCICIO 2
console.log("\n---Operaciones matemáticas---")
console.log("La suma de los números es: ",sumar(5,4))
console.log("La resta de los números es: ",restar(5,4))
console.log("La multiplicación de los números es: ",multiplicar(5,4))

//Ejercicio 3
const producto1 = calcularTotal(1000, 2);
const producto2 = calcularTotal(500, 1);  
const producto3 = calcularTotal(800, 1);  
const total = producto1 + producto2 + producto3;

console.log("\n---Cálculo de impuestos---")

console.log("Total sin impuestos:", total);

const totalConImpuestos = aplicarImpuestos(total);
console.log("Total con impuestos:",totalConImpuestos);
const totalFinal = aplicarDescuento(totalConImpuestos)
console.log("Resultado final a pagar:", totalFinal)


//Ejercicio 4
import { ROLES } from './usuariosConstantes.js';
import { crearUsuario, esAdmin } from './usuarios.js';

const usuario1 = crearUsuario("Daniel", ROLES.ADMIN);
const usuario2 = crearUsuario("Ricardo", ROLES.CLIENTE);

console.log("\n--- Información de Usuarios ---");
console.log("Usuario 1:", usuario1);
console.log("¿Pedro es admin?", esAdmin(usuario1));

console.log("Usuario 2:", usuario2);
console.log("¿Carlos es admin?", esAdmin(usuario2));

//Ejercicio 5
console.log("\n---Cuentas del admin---")

const adminSubtotal = calcularTotal(25, 4);
console.log("El subtotal del admin es: ", adminSubtotal);

const adminImpuestos = aplicarImpuestos(adminSubtotal);
console.log("El subtotal del admin con impuestos es: ", adminImpuestos);

const adminValorTotal = aplicarDescuentoPorRol(adminImpuestos, "admin");
console.log("El total a pagar del admin es: ", adminValorTotal);

console.log("\n---Cuentas del cliente---")

const clienteSubtotal = calcularTotal(50, 3);
console.log("El subtotal del admin es: ", clienteSubtotal);

const clienteImpuestos = aplicarImpuestos(clienteSubtotal);
console.log("El subtotal del admin con impuestos es: ", clienteImpuestos);

const clienteValorTotal = aplicarDescuentoPorRol(clienteImpuestos, "cliente");
console.log("El total a pagar del admin es: ", clienteValorTotal);