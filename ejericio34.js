//ejericio37

function determinarTipoCadena(cadena) {
    var esMayuscula = /^[A-Z]+$/.test(cadena);
    var esMinuscula = /^[a-z]+$/.test(cadena);
  
    if (esMayuscula && !esMinuscula) {
      return "Mayúsculas";
    } else if (!esMayuscula && esMinuscula) {
      return "Minúsculas";
    } else {
      return "Mayúsculas y minúsculas";
    }
  }
  
  // Ejemplos de uso
  console.log(determinarTipoCadena("HELLO")); // Output: Mayúsculas
  console.log(determinarTipoCadena("hello")); // Output: Minúsculas
  console.log(determinarTipoCadena("Hello")); // Output: Mayúsculas y minúsculas
  console.log(determinarTipoCadena("1234")); // Output: Mayúsculas y minúsculas
  