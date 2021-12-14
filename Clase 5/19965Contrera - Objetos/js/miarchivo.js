/// Crear un objeto VEHICULO a partir de una funcion contructora
/// y asignarle propiedades como peso, altura, cantidad de ruedas, velocidad, etc
/// y luego que impriman alguna por consola


class Persona{
    constructor(nombre, correo, habitacionReservada) {
        this.nombre = nombre;
        this.correo = correo;
        this.habitacionReservada = habitacionReservada;
    }
    hablar(){
        console.log("Hola! Soy "+ this.nombre + ". Tengo reservada la habitación " + this.habitacionReservada);
    }
}
const persona1 = new Persona("Gabriela", "123@gmail.com", "Individual");
const persona2 = new Persona("Julieta","456@gmail", "Doble");
const persona3 = new Persona("Osvaldo","789@gmail", "Familiar");
persona2.hablar();
