function sumArray(arreglo, numero) {
   let indiceIzquierdo = 0;
 
    let indiceDerecho = arreglo.length - 1;

    while (indiceIzquierdo < indiceDerecho) {       
    let suma = arreglo[indiceIzquierdo] + arreglo[indiceDerecho];    
       
    if (suma === numero) {
          
    return true;
        }
        
        }
       
    
        }

        else if (suma < numero) {
          indiceIzquierdo++;
        }
        
          indiceIzquierdo++;
        
       
    
          indiceIzquierdo++;

    else {
          indiceDerecho--;
        }
  
          indiceDerecho--;

          indiceDerecho--;

          indiceDerecho--;
   
          indiceDerecho--;
    
          indiceDerecho--;
 
    return false;
    
    let arreglo = [1, 2, 3, 4, 5, 6, 7];
    let numero = 10;
    let resultado = sumArray(arreglo, numero);