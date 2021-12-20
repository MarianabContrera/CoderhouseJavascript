 // JQUERY ejemplo 1 ENTREGA CLASE 12 PRUEBA 1

let boton = document.getElementById("btnd");
boton.addEventListener("click", function(){
  console.log("Event from Js native")
})

let dbl = 0;
let click = 0;

function pintar () {
  $('#one-click').html(`clicks (${click})`)
}

$('#btnd').on('click', () => {
  click++;
  pintar();
});


// JQUERY ejemplo 2 ENTREGA CLASE 12 PRUEBA 2

const habitaciones = [
  {id: 1, nombre: "Individual", precio: 1000},
  {id: 2, nombre: "Doble", precio: 1500},
  {id: 3, nombre: "Familiar", precio: 2000}

]

for (const habitacion of habitaciones) {
  $('#reservacion2').append(`
  <div>
    <h4>${habitacion.nombre}</h4>
    <b>${habitacion.precio}</b>
    <button id= "btn${habitacion.id}">Reservar</button>
  </div>
  <hr>
  `)

  $(`#btn${habitacion.id}`).on('click', () => {
    console.log(`Su reserva de la habitacion ${habitacion.nombre} ha sido confirmada`)
  })
}




// RESERVAS 

let reservar =  [ 
  {tipo: "individual", precio: 1000},
  {tipo: "doble", precio: 1500},
  {tipo: "familiar", precio: 2000},
];

function guardarReserva() {
  let reservaString = JSON.stringify(reservar)
  localStorage.setItem('Reservar', reservaString)
}

function obtenerReserva() {
  let reservaString = localStorage.getItem('carrito')
  let reserva = JSON.parse(reservaString);
  console.log(reserva)

  return reserva;
  }

  guardarReserva();



//FORMULARIO DE CONTACTO

// variable 

const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const texto = document.querySelector('#texto');

eventListeners();
function eventListeners(){
  nombre.addEventListener('blur', validarFormulario);
  email.addEventListener('blur', validarFormulario);
  texto.addEventListener('blur', validarFormulario);

   //enviar email
  formulario.addEventListener('submit', enviarEmail);
}

//funciones

function validarFormulario(e){

    if (e.target.value.length > 0) {

      const error = document.querySelector('p.error');
      if(error) {
        error.remove();
      }

      e.target.style.borderBottomColor = 'green';

  } else {
    e.target.style.borderBottomColor = 'red';
    e.target.classList.add('error');
    mostrarError('Todos los campos son obligatorios');
  }

  if (e.target.type === 'email') {
    //email regex
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    
    if (er.test(e.target.value)) {
      console.log('Email válido')
    } else {
      console.log('Email no válido');

      mostrarError('Email no válido');
    }
  }

}

function mostrarError (mensaje) {
  const mensajeError= document.createElement('p');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('p-3','mt-5', 'error');

  const errores = document.querySelectorAll('error');
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);

  }

}

// Enviar email 
function enviarEmail(e) {
  e.preventDefault();

  let mensajesEnviados = JSON.parse(localStorage.getItem("Mensajes"))
    if(mensajesEnviados) {
      mensajesEnviados.push(
      { nombre: nombre.value,email: email.value, texto: texto.value} 
      ) 
      localStorage.setItem("Mensajes", JSON.stringify(mensajesEnviados))
    } else {
      let mensajesNoEnviados = []
      mensajesNoEnviados.push(
        { nombre: nombre.value,email: email.value, texto: texto.value} 
      )
      localStorage.setItem("Mensajes", JSON.stringify(mensajesNoEnviados))
    }

 console.log(nombre.value);

  //Mostrar Spinner
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';

   //ocultar Spinner
   setTimeout( () => {
     spinner.style.display = 'none';

     //mensaje confirmacion
    const parrafo = document.createElement('p');
    parrafo.textContent = 'Mensaje enviado!';
    parrafo.classList.add('text-center', 'my-5', 'p-2', 'bg-green-500', 'text-white');

    formulario.appendChild(parrafo);

    setTimeout(() => {
        parrafo.remove(); // Resetear mensaje enviado

        resetearFormulario();
    }, 5000);

   }, 3000);
}

//Resetear formulario
function resetearFormulario () {
  formulario.reset();
}
