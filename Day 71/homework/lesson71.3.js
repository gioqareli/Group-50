// შექმენით სია, ამ სიაში შეინახეთ String-ტიპის მონაცემები და for-ციკლის გამოყენებით ახალ სიაში დაამატეთ ძველი სიიდან ყოველი სიტყვის პირველი ასო

let str = ["Giorgi" , "Saba" , "Qeti"]

let list = []

for(let i = 0 ; i < str.length ; i++){
    list.push(str[i][0])
}

console.log(list)