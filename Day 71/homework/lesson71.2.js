// for-ციკლის გამოყენებით იპოვეთ სიაში ყველაზე დიდი და ყველაზე პატარა რიცხვები

let mylist = [10 , -20 , 30 , -40 , 50]

let max = mylist[0]
let min = mylist[0]

for(let i = 1 ; i < mylist.length ; i++) {
    if (mylist[i] > max) {
        max = mylist[i];  
    }
    if (mylist[i] < min) {
        min = mylist[i];  
    }
}
console.log(max)
console.log(min)