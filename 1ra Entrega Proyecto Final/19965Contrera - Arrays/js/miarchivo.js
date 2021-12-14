/*
Incorporar al menos un Array en tu proyecto.
Utilizar algunos de los métodos o propiedades vistos en la clase.

*/

let dias = prompt("Cuantos días querés reservar?");
let tipo = prompt("Habitacion individual, doble o familiar?");
let resultado = 0;
let doble = 1200;
let familiar = 1500;

class Habitacion {
  constructor(tipo, precio, cantidad) {
    this.tipo = tipo;
    this.precio = precio;
    this.cantidad = cantidad;
    this.disponible = true;
  }
}
let individual = new Habitacion("individual", 100, 1)
let habitaciones = [individual]
function multiplicar(diasParam, tipoParam) {
  let habitacion = habitaciones.find(hab => hab.tipo == tipoParam)
  return diasParam * habitacion.precio
}
multiplicar(dias, tipo);
console.log("El precio total es de ");