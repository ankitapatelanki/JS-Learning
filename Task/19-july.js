// 1. What is pass by value? *


// 2. What is pass by reference? *
// 3. Is JavaScript pass by value or reference?  
// Ans: 
// JavaScript is pass by value.
// But for objects and arrays, the value is a reference, so they act like pass by reference.  (Notebook)

// Understand ?
// *
//  Yes
//  No
// 4. What will be the output?  

// function changeValue(x) {
//   x = x + 5;
// }
// let a = 10;
// changeValue(a);
// console.log(a);

//  10
//  15
//  5
//  none of the above
// 5. What will be the output?  

// function modifyArray(arr) {
//   arr.push(100);
// }
// let myArr = [1, 2, 3];
// modifyArray(myArr);
// console.log(myArr);
// *
// 6. What will be the output?

function updateObj(obj) {
  obj.name = "Updated";
}
let person = { name: "Original" };
updateObj(person);
console.log(person.name);
// // *
// 7. What will be the output?

// function replaceArray(arr) {
//   arr = [9, 9, 9];
// }
// let nums = [1, 2, 3];
// replaceArray(nums);
// console.log(nums);
// // *
// 8.What will be the output?

function test(num, obj) {
  num += 5;
  obj.status = "updated";
}

let a = 10;
let b = { status: "new" };

test(a, b);
console.log(a);       //   10 (unchanged)
console.log(b.status); //  "updated"
// *
// 9. What is Javascript? *
    //  JavaScript is a programming language and it is a synchronous and single-threaded
    
    //  let me explain what is synchronous and single-threaded

    // *synchronous - line by line code execution 
    // *single-threaded - when one line is completed then second line of the code will be executed.

    // JavaScript is known as a scripting language. There are two type of scripting language  :-
    // 1- client side.
    // 2- Server side development.

    // JavaScript use both side client side and Server side development .It is an interpreted language which means it does'nt need a compiler to run the browser or runtime environment it interprets it directly.

    // Earlier, the js was mainly used for buliding client side applications (like adding interactivity to web pages)
    // But with the help of evolution of frameworks like Node.js, Express.js , now it is widely used server side development.

    // JavaScript can be build websites , games and mobile applications also.
// 10. What is the use of spread operator (...)? 