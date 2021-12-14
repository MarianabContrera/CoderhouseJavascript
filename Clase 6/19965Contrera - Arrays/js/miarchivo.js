/*
Incorporar al menos un Array en tu proyecto.
Utilizar algunos de los métodos o propiedades vistos en la clase.

*/


const huespedes = [
    {id: 1, nombre: "Gabriela", habitacion: "individual", dias:15},
    {id: 2, nombre: "julieta", habitacion: "doble", dias: 7},
    {id: 3, nombre: "Osvaldo", habitacion: "familiar", dias:10},
    {id: 4, nombre: "Juan", habitacion: "doble", dias:5}
]

const buscarhabitacion = huespedes.find((huesped) => {
    return huesped.nombre == "Gabriela"
})
console.log(buscarhabitacion)


const dias = huespedes.filter((p) => p.dias <= 7 )
console.log(dias)




