const prompt = require("prompt-sync")();
var año=prompt("ingrese un año ")

if (año%4==0){
    console.log("El año ingresado es bisiesto")
}
else{
    console.log("El año ingresado no es bisiesto")
}