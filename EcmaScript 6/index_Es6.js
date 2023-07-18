// // EcmaScript6 atau ES6 
// // spesifikasi edisi ke 6 yang dikeluarkan pada tahun 2015 

// // Arrow Function

// const increment = x => x + 1;
// console.log(increment(2));

// // Nornal Function 

// const increment1 = function (X) {
//     return x + 1;
// }

// // Variasi Penulisan Arrow Function 
// // Tergantung pada penggunaannya arrow function dapat ditulis dengan berbagai macam cara: 
// // 1. Fungsi tanpa argumen 
// // 2. Fungsi yang hanya memiliki satu argumen 
// // 3. Fungsi yang memiliki lebih dari satu argument 
// // 4. Fungsi yang lebih kompleks dan harus ditulis dengan format yang lebih dari satu baris 


// // Tanpa argumen 
// const logSomething = () => console.log('Something');
// logSomething();

// // Satu argumen 
// const apa_yak = n => n * 2;
// console.log(apa_yak(3));

// // Lebih dari satu argumen
// const double = (a, b) => a ** b;
// console.log(double(4, 5));

// // const double = function (a, b) {
// //     return a * b;
// // };

// const isCheckAge = (n) => {if (n <= 17) {return false} return true; };
// console.log(isCheckAge(`Umur kamu itu ${19}`));


// // spread syntax
// //  digunakan untuk mempermudah untuk mengekspan atau mempersingkat
// // dituliskan dengan tiga tanda titik ... 

// // contoh spread syntax 
// let numbers = [3, 4];
// let tambahan_numbers = [1, 2, ...numbers, 5, 6]
// console.log(tambahan_numbers);

// // array untuk function
// function coba(a, b, c ){
//     return a + b + c;
// }

// const angka = [2, 5, 76];
// console.log(coba(...angka));

// // spread syntax dalam object
const object = {
    huruf_pertama : "Altamis",
    huruf_kedua : "Atmaja"
};

const object2 = {
    tanggal_lahir : "16 Agustus 2023"
};

const object3 = {
    ...object, ...object2
}

console.log(object3);

// for of loop 

// variable dapat dideklarasikan dengan const, let, atau var 
// iterables adalah semua tipe data yang dapat dioperasikan pada perulangan 

const numbers = [1, 2, 3]

for (const number of numbers) {
    console.log(number);
}

// for in 
// digunakan pada object 

const obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    console.log(`${key} => ${obj[key]}`)
}

// digunakan pada array 

const array = ['1', '2', '3']

for (const index in array) {
    console.log(`${index} => ${array[index]}`)
}