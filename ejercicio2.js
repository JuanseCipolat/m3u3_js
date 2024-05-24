function obtenerNumeroMayor() {
  var numeros = [1, 4, 6, 7, 23, 454, 777, 233, 343, 100];
  var mayor = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }

  document.write("El número mayor es: " + mayor);
  console.log("El número mayor es: " + mayor);
}
