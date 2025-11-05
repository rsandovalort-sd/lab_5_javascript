
import { ROLES } from './usuariosConstantes.js';

export function crearUsuario(nombre, rol) {

  if (rol !== ROLES.ADMIN && rol !== ROLES.CLIENTE) {
    throw new Error(`Rol inválido: ${rol}. Debe ser "admin" o "cliente".`);
  }

  return {
    nombre,
    rol,
    fechaRegistro: new Date().toLocaleDateString() 
  };
}

export function esAdmin(usuario) {
  return usuario.rol === ROLES.ADMIN;
}
