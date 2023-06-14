const prompt = require("prompt-sync")();
var num1=prompt("ingrese un numero ")
var num2=prompt("ingrese otro numero ")

if (num1!=num2){
    if (num1>num2){
        console.log(num1," es mayor")
    }
    if (num1<num2){
        console.log(num2," es mayor")
    }
}
else {
    console.log("los numeros son iguales")
}