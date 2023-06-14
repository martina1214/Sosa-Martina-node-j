const prompt = require("prompt-sync")();
var edad=prompt("ingrese una edad ")

if (edad<0){
    console.log("edad invalida")
}
else{
    if (edad<13){
        console.log("Es un niño")
    }
    else{
        if (edad<17){
            console.log("es un adolecente")
        }
        else{
            if (edad<110){
                console.log("es un adulto")
            }
            else{
                console.log("edad invalida")
            }
        }
    }
}


//if (edad<13 && edad>17){
 //   console.log("Es un adolecente")
//}
//if (edad<17 && edad>110){
 //   console.log("es un adulto")
//}
//else{
//    console.log("edad invalida")
//}