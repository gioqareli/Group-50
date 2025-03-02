// Splice მეთოდის გამოყენებით ჩაანაცვლეთ სიაში ყველა უარყოფითი რიცხვი 0 - ით


let numbers = [10, -5, 23, -8, 42, -3, 7];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1, 0);  // 
    }
}
console.log(numbers)