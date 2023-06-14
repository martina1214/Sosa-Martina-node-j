const prompt = require("prompt-sync")();
var palabra1=prompt("ingrese una primer palabra")
var palabra2=prompt("ingrese una primer palabra")
var iguales

if (palabra1==palabra2) {
    console.log("las palabras son iguales")
    iguales=true
}
else{
    console.log("las palabras no son iguales")
    iguales=false
}
numeroCaracteres1 = palabra1. length;
numeroCaracteres2 = palabra2. length;
if (numeroCaracteres1==numeroCaracteres2) {
    console.log("TIENEN la misma cantidad de letras")
    cantLetras=true
}
else{
    console.log("NO tienen la misma cantidad de letras")
    cantLetras=false
}