function toTime(segundos) { 
     
    let horas = Math.floor(segundos / 3600); 
    let minutos = Math.floor((segundos - (horas * 3600)) / 60);
    let resultado = horas + " hora(s) y " + minutos + " minuto(s)";
      
      return resultado;
    }

    let segundos = 7265;
let resultado = toTime(segundos);