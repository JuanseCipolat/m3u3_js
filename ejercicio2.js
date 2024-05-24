function obtenerNumeroMayor() {
  var numeros = prompt("Ingresa una lista de números separados por comas:");
  var numerosarray = numeros.split(",");

  var mayor = parseFloat(numerosarray[0]);
  for (var i = 1; i < numerosarray.length; i++) {
    var numero = parseFloat(numerosarray[i]);
    if (numero > mayor) {
      mayor = numero;
    }
  }

  document.write("El número mayor es: " + mayor);
}
