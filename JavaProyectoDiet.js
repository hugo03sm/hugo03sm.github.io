//función de las necesidades de glúcidos
function calcularnecesidadescho() {
    var tiempo = parseFloat(document.getElementById("Tiempo").value);
    var intensidad = document.getElementById("Intensidad").value;
    var peso = parseFloat(document.getElementById("Peso").value);

    //Variable para calcular las necesidaes de glucidos
    var necesidadescho;

    if (tiempo < 1.25 && intensidad === "baja") {
        necesidadescho = 0;
     } else if (tiempo < 1.25 && intensidad === "alta") {
        necesidadescho = 0.8 * peso ;
     } else if (tiempo <= 2.5 && tiempo >= 1.25 && intensidad === "alta" || intensidad === "baja" ) {
        necesidadescho = 0.8 * peso ;
     } else if ( tiempo >=  2.5 && intensidad === "alta" || intensidad === "baja" ) {  
        necesidadescho =  1.1 * peso ;
      } else {
         necesidadescho = "Por favor, introduzca un numero válido"
      }
    
 //Esto muestra el resultado en la pagina HTML 
 if (necesidadescho === 0) {
   document.getElementById("Resultado").innerHTML = "No necesitas aporte de CHO :P";
} else if (!isNaN(necesidadescho)) {
   document.getElementById("Resultado").innerHTML = "Necesitas " + necesidadescho.toFixed(2) + " g/h de CHO (^_^)";
} else {
   document.getElementById("Resultado").innerHTML = "Por favor, introduzca un número válido";
}

   if(necesidadescho === 0) {
      document.getElementById("Totalcho").innerHTML = " " ;
   } else {document.getElementById("totalcho").innerHTML = "En total tienes que echar " + (necesidadescho*tiempo).toFixed(2) + " g de Hidratos de carbono"
   }

if (necesidadescho === 0) {
      document.getElementById("Disolucion").innerHTML = " Debes beber aproximadamente 0,6 L de agua " ; 
   } else {
      document.getElementById("disolucion").innerHTML = "Deberías beber " + (necesidadescho * 0.0125*tiempo).toFixed(2) + "L de agua";
   }

if (necesidadescho === 0) {
   document.getElementById("Cucharadas").innerHTML = " ";
} else {
   document.getElementById("Cucharadas").innerHTML = "Tienes que echar " + ((necesidadescho*tiempo)/40).toFixed(2) + " cucharadas del Almacenamiento 1";
}

// Hay que ajustar las sales aún
//if (tiempo < 2 ) {
  // document.getElementById("Sales").innerHTML = "Debes tomar " + (0.6*necesidadescho * 0.011).toFixed(2) + " g de sales";
//} else {document.getElementById("Sales").innerHTML = "Debes tomar " + (0.01*necesidadescho*0.011).toFixed(2) + " g de sales";
//}
}
// cambiar tiempo  a hexagesimal
