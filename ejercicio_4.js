const prompt = require("prompt-sync")();
var num1=prompt("ingrese un numero")

if (num1%5==0){
    console.log ("es divisible por 5")
}
else{
    console.log ("no es divisible por 5")
}