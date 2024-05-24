function determinarMedioTransporte() {
  var distancia = parseInt(prompt("Ingrese la distancia en metros:"));

  var medioTransporte = "";

  if (distancia >= 0 && distancia <= 1000) {
    medioTransporte = "pie";
  } else if (distancia > 1000 && distancia <= 10000) {
    medioTransporte = "bicicleta";
  } else if (distancia > 10000 && distancia <= 30000) {
    medioTransporte = "colectivo";
  } else if (distancia > 30000 && distancia <= 100000) {
    medioTransporte = "auto";
  } else if (distancia > 100000) {
    medioTransporte = "avión";
  } 

  document.write("El medio de transporte apropiado es: " + medioTransporte);
}
