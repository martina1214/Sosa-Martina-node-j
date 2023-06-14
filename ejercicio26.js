function totalDeArticulos(productos)
     
    const valoresTotales = productos.reduce((acumulador, producto) => {
        
       
    const { precio, cantidad } = producto;
        
       
    const valorTotal = precio * cantidad;
        
       
    return acumulador + valorTotal;
      }, 
     
    0);
    const resultadosPorSeccion = productos.reduce((acumulador, producto) => {
    const { seccion, precio, cantidad } = producto;
    const valorTotal = precio * cantidad;
        
       
    if (!acumulador[seccion]) {
          acumulador[seccion] = {
            seccion,
            valorTotal,
          };
        } 
          acumulador[seccion] = {
            seccion,
            valorTotal,
          };
       
    
          acumulador[seccion] = {
            seccion,
            valorTotal,
          };
    
          acumulador[seccion] = {
            seccion,
            valorTotal,
         
    
          acumulador[seccion] = {
            seccion,
            valorTotal,
    
          acumulador[seccion] = {
            seccion,
           
    
          acumulador[seccion] = {
            seccion,
    
          acumulador[seccion] = {
           
    
          acumulador[seccion] = {
    
          acumulador[seccion] =
    
         
    else {
          acumulador[seccion].
          acumulador[
    
          acumulador
    
          acum
    
         
    valorTotal += valorTotal;
        }
        
        }
       
    
        }
      
     
    return Object.values(resultadosPorSeccion);
          }