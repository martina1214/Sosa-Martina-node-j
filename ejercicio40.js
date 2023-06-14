//ejercicio40

class Conductor {
    constructor(nombre, licencia) {
      this.nombre = nombre;
      this.licencia = licencia;
    }
  }
  
  class Colectivo {
    constructor(capacidad, conductor) {
      this.capacidad = capacidad;
      this.pasajeros = 0;
      this.conductor = conductor;
    }
  
    subir(pasajeros) {
      if (this.pasajeros + pasajeros <= this.capacidad) {
        this.pasajeros += pasajeros;
      } else {
        var pasajerosMaximos = this.capacidad - this.pasajeros;
        this.pasajeros += pasajerosMaximos;
        console.log("No se pueden subir más pasajeros. Solo se subieron " + pasajerosMaximos);
      }
    }
  
    bajar(pasajeros) {
      if (pasajeros <= this.pasajeros) {
        this.pasajeros -= pasajeros;
      } else {
        console.log("No se pueden bajar más pasajeros de los que hay. Se bajaron " + this.pasajeros);
        this.pasajeros = 0;
      }
    }
  }
  
  // Ejemplo de uso
  var conductorJose = new Conductor("José", 1234);
  var colectivoLinea1 = new Colectivo(40, conductorJose);
  
  console.log(colectivoLinea1.pasajeros); // Output: 0
  
  colectivoLinea1.subir(25);
  console.log(colectivoLinea1.pasajeros); // Output: 25
  
  colectivoLinea1.subir(35);
  console.log(colectivoLinea1.pasajeros); // Output: 40
  
  colectivoLinea1.bajar(45);
  console.log(colectivoLinea1.pasajeros); // Output: 0
  
  colectivoLinea1.subir(35);
  console.log(colectivoLinea1.pasajeros); // Output: 35
  
  colectivoLinea1.bajar(40);
  console.log(colectivoLinea1.pasajeros); // Output: 0
  