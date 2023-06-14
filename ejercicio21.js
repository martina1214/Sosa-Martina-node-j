function abbrevName(nombreCompleto) {
    
    let palabras = nombreCompleto.split(" ");
    let iniciales = palabras[0][0] + "." + palabras[1][0];

    return iniciales.toUpperCase();
  }

  let nombreCompleto = "John Doe";
let iniciales = abbrevName(nombreCompleto);