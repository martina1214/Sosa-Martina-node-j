function sumArray(arreglo, numero) {
    let indiceIzquierdo = 0;
    let indiceDerecho = arreglo.length - 1;
  
    while (indiceIzquierdo < indiceDerecho) {
      let suma = arreglo[indiceIzquierdo] + arreglo[indiceDerecho];
  
      if (suma === numero) {
        return true;
      }
      
      else if (suma < numero) {
        indiceIzquierdo++;
      }

      else {
        indiceDerecho--;
      }
    }
    return false;
  }
  