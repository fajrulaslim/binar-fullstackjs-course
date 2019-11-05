// Function
// console.log("Belajar Function di Javascript");

// // example 1 / Declaration
// function pertambahan(num1, num2){
//     console.log(num1 + num2);
// }
// pertambahan(5, 2);

// // example 2 / Expression
// let pengurangan = function(num1, num2){
//     console.log(num1 - num2);
// }
// pengurangan(10,4);

// // Example 3 / Arrow function
// let perkalian = (num1, num2) => {
//     console.log(num1 * num2);
// }
// perkalian(3, 5);

// let perpangkatan = (num1, num2) => {
//     console.log(num1 ** num2);
// }
// perpangkatan(5, 2);

//--------
// Looping

// // For ... Loop
// for(let i=0; i<5; i++){
//     console.log(`Nilainya adalah ${i}`);
// }

// // For ... In
// let names = ['Andi', 'Tono', 'Tini', 'Budi'];
// for (x in names){
//     console.log(`index: ${x}, name: ${names[x]}`);
// }

// // For ... Of
// let fruits = ['Banana', 'Mango', 'Apple', 'Orange'];
// for(i of fruits){
//     console.log(`My name is ${i}`);
// }

// // While
// let num = 1;
// while (num < 10){
//     console.log(`${num}. Hello World`);
//     num++;
// }

// .forEach
let ages = [11, 23, 45, 12, 34, 32];
ages.forEach((item, index, array) =>{
    console.log(`item: ${item}, index: ${index}, array: ${array}`);
});

// .map
let array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

let numbers = [1,2,3,1,2,3,5,7];
let newNumber = numbers.map((num) => {
    return num * 3;
})
console.log(newNumber);