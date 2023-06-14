//ejercicio38

function esPalindromo(cadena) {
    // Eliminar espacios y convertir a minúsculas
    var cadenaSinEspacios = cadena.replace(/\s/g, "").toLowerCase();
    // Revertir la cadena
    var cadenaRevertida = cadenaSinEspacios.split("").reverse().join("");
  
    // Comparar la cadena original con la cadena revertida
    if (cadenaSinEspacios === cadenaRevertida) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplo de uso
  console.log(esPalindromo("La ruta nos aporto otro paso natural")); // Output: true
  console.log(esPalindromo("Hola mundo")); // Output: false
  console.log(esPalindromo("Anita lava la tina")); // Output: true
  