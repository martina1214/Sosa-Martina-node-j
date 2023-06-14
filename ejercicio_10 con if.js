const prompt = require("prompt-sync")();
var color=prompt("ingrese un color: ")

if (color=="azul" || color=="Azul" ){
    console.log("Treduccion: Blue")
}
if (color=="rojo" ){
    console.log("Treduccion: Red")
}
if (color=="verde"){
    console.log("Treduccion: Green")
}
if (color=="naranja"){
    console.log("Treduccion: Orange")
}
if (color=="amarillo"){
    console.log("Treduccion: Yellow")
}
else{
    console.log("Color not found")
}
