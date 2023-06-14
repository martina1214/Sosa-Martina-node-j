var incremento=0
divisible=0

for (var i=0 ; i<100 ; i++){
    incremento=incremento+1
    divisible=incremento
    if (divisible%5===0 && divisible%3===0)
        console.log("FizzBuzz")
    else if (divisible%3===0){
        console.log("Fizz")
    }
    else if (divisible%5===0){
        console.log("Buzz")
    }
    
    else{
        console.log(incremento)
            
        }
    }