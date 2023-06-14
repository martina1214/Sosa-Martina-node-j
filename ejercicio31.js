function esPrimo(num) {
        if (num <= 1) {
        return false;
      }
      let divisor = 2;
      
    while (divisor < num) {
        
    if (num % divisor === 0) {
         
    return false;
        }
        divisor++;
      }
      
        }
        divisor++;
        divisor++;
      
    return true;
    