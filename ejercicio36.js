//ejercicio36
function juegoDeApuestas(numeroApostado = 1, montoApostado = 20) {
    var dinero = 50;
  
    console.log("Bienvenido al juego de apuestas");
    console.log("Dinero disponible para apostar: $" + dinero);
  
    while (dinero > 0 && dinero < 200) {
      console.log("------------------");
      console.log("Nuevo turno de juego");
      console.log("------------------");
  
      // Generar el valor del dado de forma aleatoria
      var dado = Math.floor(Math.random() * 6) + 1;
      console.log("Número obtenido en el dado: " + dado);
  
      if (dado === numeroApostado) {
        var ganancia = montoApostado * 2;
        dinero += ganancia;
        console.log("¡Has acertado el número! Ganaste $" + ganancia);
      } else {
        dinero -= montoApostado;
        console.log("No has acertado el número. Has perdido $" + montoApostado);
        console.log("Dinero restante: $" + dinero);
      }
  
      if (dinero === 0) {
        console.log("Has perdido el juego. Te has quedado sin dinero.");
      } else if (dinero >= 200) {
        console.log("¡Has ganado el juego! Has llegado a $" + dinero + " o más.");
      } else {
        var numeroNuevo = prompt("Ingrese un número para apostar (por defecto es 1):");
        numeroApostado = numeroNuevo ? parseInt(numeroNuevo) : 1;
  
        var montoNuevo = prompt("Ingrese la cantidad que desea apostar (por defecto es 20):");
        montoApostado = montoNuevo ? parseInt(montoNuevo) : 20;
      }
    }
  }
  
  //juegoDeApuestas();
  