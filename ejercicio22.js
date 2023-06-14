function moveZeros(arreglo) {
    let numeros = []; o
      
     
    let ceros = []; 
    for (let i = 0; i < arreglo.length; i++) {
        
       
    if (arreglo[i] !== 0) {
          numeros.
         
    push(arreglo[i]);
        } else {
          ceros.
         
    push(arreglo[i]);
        }
      }
    
      
        }
    return numeros.concat(ceros);
    
    let arreglo = [1, 0, 3, 0, 5, 0, 7];
let resultado = moveZeros(arreglo);
    