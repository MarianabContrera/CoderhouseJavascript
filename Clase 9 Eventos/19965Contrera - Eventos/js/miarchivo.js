

/* Eventos para el formulario*/

let miFormulario = document.getElementById('formulario');
miFormulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target;
    console.log(formulario.children)

    nombre = formulario.children[0].value
    email= formulario.children[1].value

    alert(`Hola ${nombre} confirmanos si este es tu email ${email}`)

  }
  
  
