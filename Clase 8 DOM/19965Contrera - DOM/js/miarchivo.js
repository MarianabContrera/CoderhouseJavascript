

/*Parte 1: Crear elementos manipulando el DOM a partir de la informaciòn de tus objetos.

const habitaciones = [{ id: 1,  tipo: "Individual", precio: 1000 },
                  {  id: 2,  tipo: "Doble", precio: 1500 },
                  {  id: 3,  tipo: "Familiar"  , precio: 2000}, 
                ]

for (const habitacion of habitaciones) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${habitacion.id}</h3>
                            <p>  Producto: ${habitacion.tipo}</p>
                            <b> $ ${habitacion.precio}</b>`;
    document.body.appendChild(contenedor);
}*/


/* Parte 2:Modificar etiquetas existentes en función del resultado de operaciones. */

const locacion = document.querySelector('h1');
console.log(locacion);

console.log(locacion.innerHTML);
 
document.querySelector('h2').textContent = 'ALAGOAS';

