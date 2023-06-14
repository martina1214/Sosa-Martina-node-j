//ejercicio39

class Ficha {
    constructor(nombre) {
      this.nombre = nombre;
      this.sesiones = [];
      this.numsesiones = 0;
    }
  
    anotar(kilometros) {
      this.sesiones.push(kilometros);
      this.numsesiones++;
    }
  
    media() {
      if (this.numsesiones === 0) {
        return 0;
      }
      var suma = this.sesiones.reduce((total, sesion) => total + sesion);
      return suma / this.numsesiones;
    }
  }
  
  // Ejemplo de uso
  var fichaPersona = new Ficha("Juan");
  fichaPersona.anotar(8);
  fichaPersona.anotar(10);
  fichaPersona.anotar(6);
  console.log(fichaPersona.media()); // Output: 8
  