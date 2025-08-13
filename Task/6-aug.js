// JavaScript - 9: Understand Functions in JS.         😍 Y-2025
// Please don't copy paste answer from any where and don't see the solution from the internet.  Best of Luck 👍🏻
// Q1. Create a function that prints "Hello, World!". Function Name: sayHello *
function sayHello(){
    console.log("Hello,World!")
}
sayHello()
// Q2. Write a function that takes a name as a parameter and prints "Hello, [name]" . Function Name - greet *
    function greet(name){
        console.log(`Hello, ${name}`)
    }
    greet("[Anshika]")
//  Q3. Write a function that returns the sum of two numbers. Function name - add *
 function add(num1,num2){
    return num1+num2;
 }
console.log(add(5,5)) // 10
//  console.log(sum)
//  Q4. Write a function that checks if a number is even. Function name - isEven *
 function isEven(a){
    let even = a%2;
    if(even == 0){
        console.log("Even")
    }else{console.log("Odd")}
 }
 isEven(21)
// Q5. Write a function that returns the larger of two numbers. Function Name - max *
function max(x,y){
    if(x>y){
        console.log(x)
    }else{
        console.log(y)
    }
}
max(1,2)
//  Q6. Write a function that takes a number and returns "Positive", "Negative", or "Zero". Function Name: checkNumber *
function checkNumber(number){
    if(number > 0){
        console.log("+tive")
    }else if (number < 0){
        console.log("-gative")
    }else{
        console.log("Zero")
    }
}
checkNumber(0) // 0
checkNumber(55) // +tive
checkNumber(-57) // -gative
//  Q7. Write a function that returns the factorial of a number. Function name - factorial 

function factorial(fac){
    let factorial = 1;
    for(let i = 1 ; i<=fac ; i++){
      factorial=  factorial * i}
    return factorial;
}
console.log("factorial:",factorial(4))


// Q8. Write a function that takes an array and returns the sum of all numbers. Function Name - sumArray *
function sumArray(arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum = sum +arr[i];
    }
    return sum;
}
let arr = [5,1,10,50]
console.log("sumArray:",sumArray(arr))
// Q9. Write a function that returns the number of vowels in a string. Function name: countVowels

// Example : given string is "Ankita"
// vowel count is : (3 *)
function countVowels(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        let vowel = str[i].toLowerCase();
        if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'){
           count++;
        }
    }
    return count++;
}
let str = "Anshika jii";
console.log("vowelCount:",(countVowels(str))) // 5
// What is Js and how its work *
// JavaScript is a most popular programming language in the world for web development. it is synchronous and single-threaded. let me expalin what is synchronous and single-threaded language.
// synchronous means : line by line code execution
// single threaded means : when one line completed then second line of the code will be executed.
// it is also known as a scripting language.there are a 2 types of scripiting language .
// 1. client side 
// 2. Server side development .

// JavaScript use both side client and server side development.it is an interpreted language which means it does'nt need a compiler to run the browser or runtime environment interprets it directly.
//  Earlier the JavaScriptwas mainly used for building client side application like (adding interactivity to web pages)but with the help of evolution of framework like Node.js, Express.js  . now it is widely used for server side development also.

//  JavaScript can be  build games,website and mobile applications also..






// extra question practice 
// Q1. Write a function that takes an array and returns the largest number. Function Name - maxInArray *
function maxInArray(arr1){
    let max = arr1[0];
    for(let i = 1; i < arr1.length; i++){
        if(arr1[i] > max){
            max = arr1[i];
        }
    }
    return max;
}   
let arr1 = [1, 2, 3, 4, 5];
console.log("maxInArray:", maxInArray(arr1)) // 5





promise is an object which tells whether a asynchronous
