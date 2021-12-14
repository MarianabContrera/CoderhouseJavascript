/*Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, muestre por consola o alert() el resultado según los valores ingresados y las condiciones cumplidas.*/



let usuario = prompt('Hola! Qué cantidad de helado va a llevar?');
let descuento = '1kg';

if (usuario === '1kg') {
   alert("Tenes un descuento del 25%!")
}




const codigoDescuento = 'CYBERMONDAY';

let usuario = prompt('Escriba el código de descuento que le enviamos por mail.');
    if (usuario !== codigoDescuento){
        console.log('El código ingresado es incorrecto');
    } else {
        console.log('Perfecto! Tenés 20% de descuento en tu compra');
    }
