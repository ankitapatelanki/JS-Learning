//  JavaScript - 10: RE- Pass by value and pass by reference -  😍 Y-2025
// Please don't copy paste answer from any where and don't see the solution from the internet.  Best of Luck 👍🏻

// 1. What is pass by value? *
    // For primitive data types like(Number,string , boolean)when you copy or pass them ,a new copy is made . Changing one does not affect the other

// 2. What is pass by reference? *
// Ans: for non-primitive data types like(array and object) when you copy or pass them both varibles point to the same refrence.changing one will affect the other. 
// 

// 3. Is JavaScript pass by value or reference?  
// JavaScript is pass by value.
// But for objects and arrays, the value is a reference, so they act like pass by reference.  (Notebook)


// Understand ?
// *
//  Yes
//  No

// 4. What will be the output?  

function changeValue(x) {
  x = x + 5;
}
let a = 10;
changeValue(a);
console.log(a);
// *
//  10
//  15
//  5
//  none of the above
// ans: 10


// 5. What will be the output?  

function modifyArray(arr) {
  arr.push(100);
}
let myArr = [1, 2, 3];
modifyArray(myArr);
console.log(myArr);
// output:[1,2,3,100]
// 6. What will be the output?

function updateObj(obj) {
  obj.name = "Updated";
}
let person = { name: "Original" };
updateObj(person);
console.log(person.name);
// output: Updated
// 7. What will be the output?

function replaceArray(arr) {
  arr = [9, 9, 9];
}
let nums = [1, 2, 3];
replaceArray(nums);
console.log(nums);
// *output: [9,9,9]
// 8.What will be the output?

function test(num, obj) {
  num += 5;
  obj.status = "updated";
}

let a2 = 10 ;
let b = { status: "new" }; 

test(a2, b);
console.log(a2);       //   10 (unchanged)
console.log(b.status); //  "updated"
// *
// 9. What is Javascript? *
javaScript is a most popular language in the world .it is a synchrounus and single threaded language.
let me expalin what is synchrounus and single threaded language.
synchronous means line by line code execution & single threaded means when onle line is completed then second line of the code will be executed. 
it is also khown as a scripting language.there are 2 type of scripting languages. 
1.client side 
2.server side
JavaScript use both side client side and server side .it is an interpreted language it means does'nt need a compiler to run  time environment it interprets it directly.
 Earlier the JavaScript was mainly used for Biulding client side application like adding interactivity to web pages . but with the help of evolution of framework like Node.js , express .js now it is widely used for server side development also.
 javaScript can also build games,mobile applications and websites also.

 or 

// JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is widely used for web development to create interactive and dynamic web pages. JavaScript can manipulate HTML and CSS, allowing developers to build responsive user interfaces. It is also used on the server-side with environments like Node.js. JavaScript supports object-oriented, imperative, and functional programming styles. 
// It is an essential part of web technologies, alongside HTML and CSS, and is supported by all modern web browsers. JavaScript can also be used for mobile app development, game development, and more.
// 10. What is the use of spread operator (...)? *
    the spread operator (...) unpack the element of an array or object .it can be used to create a shallow copy of an object or array,it also used to merge multiple objects or arrays in one object or array.  
