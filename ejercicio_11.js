const prompt = require("prompt-sync")();
var num1
var num2
var num3

function operadoresLogicos(){
    num1=prompt("ingrese el primer numero ")
    num2=prompt("ingrese el segundo numero ")
    num3=prompt("ingrese el tercer numero ")

    if (num1<num2 && num1<num3 && num1>0){
        console.log(num1 ,"es el mayor y es positivo")
    }
}

operadoresLogicos()