let num =  number(prompt("Enter Number:") )

let operation = prompt("Choice number beetwen 1,4")

 one = num %2 == 0
 two = num %2 == 1
 three = num*2
 four = num / 3

if(operation == one){
    console.log(one)
}
elseif(operation == two){
    console.log(two)
}
elseif(operation == three){
    console.log(three)
}
elseif(operation == four){
    console.log(four)
}
