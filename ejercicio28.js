function contarBalancesPositivos(balances) {
    let count = 0;
      
    for (let i = 0; i < balances.length; i++) {
    if (balances[i] > 0) {
          count++;
        }
      }
          count++;
        }
          count++;
          count++;
          count++;   
    return count;

    const balancesUltimoSemestre = [100, -50, 250, -100, 50, -200];
const cantidadBalancesPositivos = contarBalancesPositivos(balancesUltimoSemestre);
console.log(cantidadBalancesPositivos);



