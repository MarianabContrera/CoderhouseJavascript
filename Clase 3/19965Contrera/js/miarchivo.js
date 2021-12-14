
var dni = 0;

for (let i = 5; i > 0; i--) {
    
    let ingresarNombre = prompt("Ingresá tu nombre para participar de una rifa. Los primeros 5 estarán participando por un Smart TV!");
    let ingresarNumero = prompt("Ingresá tu DNI");
    if (ingresarNumero === dni ) {
      alert("el dni ingresado ya está registrado");
    } else {
      alert("Gracias! " + ingresarNombre + "Tu número es " + ingresarNumero + " Ya estás pasrticipando!");
    }

    dni = ingresarNumero;
  
  } 

  alert("Lo Sentimos mucho, ya no quedan números disponibles");
  