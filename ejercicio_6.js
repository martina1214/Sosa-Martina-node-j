const prompt = require("prompt-sync")();
var lado1=prompt("ingrese longitud lado 1")
var lado2=prompt("ingrese longitud lado 2")
var lado3=prompt("ingrese longitud lado 3")
var suma1Y2
var ladoLargo

if (lado1<lado2){
    if (lado1<lado3){
        ladoLargo=lado1
    }
    else{
    ladoLargo=lado3
    }
}
if(lado2<lado3){
    ladoLargo=lado2
}
else{
    ladoLargo=lado3
}

suma1Y2=lado1+lado2
if suma1Y2 > lado3