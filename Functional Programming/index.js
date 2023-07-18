// function sum(nums) {
//     const initial = 0;
//     const output = nums.reduce((prev, current) => {
//         console.log(prev);
//         return prev + current
//     }, initial);

//     return output;
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// const totalSum = sum(numbers);

const students = [
    {name : 'A', age: 25},
    {name : 'B', age: 15},
    {name : 'C', age: 55},
    {name : 'D', age: 12},
    {name : 'E', age: 14},
]

const output = students.filter(students => students.age > 12);
console.log(output);