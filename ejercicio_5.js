const prompt = require("prompt-sync")();
var farenheit=prompt("ingrese temperatura en farenheit")
var celcius

celcius=(farenheit - 32) * 5/9 
console.log("la temperatura celcius es: ",celcius)
