//Ejercicio 1
import {PI, IVA, DESCUENTO} from "./constantes.js";

export function areaCirculo(radio){
    return (radio**2)*PI;
}
export function precioConIva(precio){
    return precio + (precio*IVA);
}

//EJERCICIO 2
export function sumar(a,b){
    return a+b;
}
export function restar(a,b){
    return a-b;
}
export function multiplicar(a,b){
    return a*b;
}

//Ejercicio 3
export function calcularTotal(precio, cantidad) {
    return precio * cantidad;
    
}
export function aplicarImpuestos(total) {
    return total + total * IVA;
}
export function aplicarDescuento(total) { 
    return total - total * DESCUENTO;
}


//Ejercicio 5
export function aplicarDescuentoPorRol(total, usuario){
    if (usuario === "admin"){
        return total - (total*(DESCUENTO*2));
    }else{
        return  total - (total*DESCUENTO)
    }
}















