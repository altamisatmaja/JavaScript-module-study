// date objects
// date format 
// get date 
// set date 

// menampilkan zona waktu berdasarkan waktu browser
// Sund 24 jul 2022

// 4 cara untuk membuat objek tanggal baru:

// new Date();
// new Date(year, month, date, minutes, second, ms)
// new Date(ms);
// new Date(date string);

// const d = new Date(2018, 15, 24, 33, 30, 0);
// const c = new Date(2018, 15, 99, 33, 30, 0);
// const a = new Date();

// console.log(d)
// console.log(c)
// console.log(a)

// const cd = new Date("October 13, 2014 11:13:00");
// console.log(cd);

// date method 

// mengatur waktu 

// js akan menampilkan dalam format string yang lengkap

// method toUTCString() utuk menjadikan date menjadi UTC atau standar tampilan tanggal
const e = new Date();
console.log(e.toUTCString())

// method toDateString() digunakan untuk mengonversi tanggal ke format yang lebih mudah di baca
const z = new Date();
console.log(z.toDateString())

// method toISOString() mengoversi objek Date menjadi string, menggunakan format standar ISO
const x = new Date();
console.log(x.toISOString())

// date format 

const p = new Date();
console.log(p.getUTCFullYear())

const q = new Date('2023/08/16');
const b = new Date('16/08/2023');
console.log(q);
console.log(b); // tidak bisa karena salah dalam format


// get date 

// get method ini banyak banget 

const days = new Date(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
console.log(days.getDay());

// set date 
const l = new Date()
l.setMinutes(59, 49, 24);
console.log(l);