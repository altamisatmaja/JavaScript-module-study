// const numbers = [45, 4, 9, 13];

// let text = "";

// numbers.forEach(myFunction);

// function myFunction(value, index, array){
//     console.log(txt = value);
// }

// const numbers1 = [45, 4, 9, 13];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array){
//     return value * 2;

// }

// console.log(numbers2);

// const number3 = numbers1.push(myFunction);

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array){
//     return value > 18;
// }
// console.log(over18);

// every() = memerikasa apakah semua nilai array lulus tes?
// some() = memeriksa apakah beberapa nilai array lebih besar dari 18

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array){
//     return value > 18;
// }

// console.log(allOver18);
// console.log(someOver18);

// const fruits = ["Apple", "Orange", "Pineapple", "Mango"];
// let position = fruits.indexOf("Appdle");

// console.log(position);

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array){
//     return value > 18;
// }

// console.log(first);

// // nilai elemen pertama yang lebih besar dari 18


// regex

// regex singkatan dari ekspresi regular
// saat mencari data dalam teks, dapat menggunakan pola pencarian untuk menjelaskan apa yang dicari 

// RegEx dapat berupa karakter tunggal, atau pola yang lebih rumit 

// sintaks RegEx 

// /mySkill/I // ekspresi reguler

// 'mySkill' adalah pola yang digunakan dalam pencarian 

// i adalah string method

// let text = 'Visit MySkill, MySKill, and My Skill';
// // let n = text.search(/myskill/i);
// let n = text.match(/myskill/m);
// console.log(n)

// regEx modiefiers
// modifiers 'i' digunaakn untuk sensitifitas
// modifies 'g' digunakan untuk mencari keseluruhan dan apabila menemukan 1 maka akan berhenti
// modifiers 'm' digunakan untuk menemukan lebih dari 1 

// let pattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// let text = "Password1!";

// console.log(pattern.test(text));