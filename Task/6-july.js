// JavaScript - 2: Understand Functions in JS.         😍 Y-2025
// Please don't copy paste answer from any where and don't see the solution from the internet.  Best of Luck 👍🏻
// Q1. Create a function that prints "Hello, World!". Function Name: sayHello *
    function sayHello(){
    console.log("Hello,World!")
}
sayHello()


// Q2. Write a function that takes a name as a parameter and prints "Hello, [name]" . Function Name - greet *
    function greet(Name){
        console.log(`Hello,${Name}`)
    }
    greet("anshika")


//  Q3. Write a function that returns the sum of two numbers. Function name - add *
    function add(num1,num2){
       return num1+num2;
    }
    let adding = add(1,1)
     console.log(adding)


//  Q4. Write a function that checks if a number is even. Function name - isEven *
        function isEven(x){
          let div = x%2;
          if (div==0){
            console.log("it's even")
          }else{console.log("try again")}
        }

        isEven(7)
// Q5. Write a function that returns the larger of two numbers. Function Name - max *
        function max(a,b){
           if  (a>b){
                console.log(a)  ;
            }else{
                 console.log(b) ;
            }
        }
        max(45,42)


//  Q6. Write a function that takes a number and returns "Positive", "Negative", or "Zero". Function Name: checkNumber *

    function checkNumber(value){
        if(value>0){
            console.log("positive")
        }else if(value<0){
            console.log("negative")
        }else{
            console.log("zero")
        }
    }

    // checkNumber(22)
    // checkNumber(-22)
    checkNumber(0)


//  Q7. Write a function that returns the factorial of a number. Function name - factorial *
        function factorial(n){
            
            let factorial = 1;
            for(let i=1; i<=n; i++){
            factorial = factorial*i;
            }
           
            console.log(factorial)
        }

        factorial(5)
        // 1 * 2 * 3 * 4 * 5 = 120


// Q8. Write a function that takes an array and returns the sum of all numbers. Function Name - sumArray *

//  function sumArray(array){
//         let total = 0;
//         // for(let num of array){
//         //         total+= num;
//         // }
        
//         for(let i = 0; i<array.length; i++){

//         }

//         return total;
//  }
//  let numBer = [1,1,1,30,40,50];
//  console.log(sumArray(numBer))


function sumOfArray(nums){  // parameters

    let total = 0;
    for(let i = 0; i<nums.length;i++){
        total = total + nums[i];
    }
    return total;
}
let arr = [10,20,30,40,50];
console.log(sumOfArray(arr)) // arguments


// Q9. Write a function that returns the number of vowels in a string. Function name: countVowels
      function countVowels(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        console.log('char:', char)
        if ("aeiou".includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello web"))

// or 

function getCountOfVowelsInString(prompt){
    let countNum = 0;
   
    for(let i=0; i<prompt.length; i++){
        let letter = prompt[i].toLowerCase();
        if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
            countNum++;
        }
        }
        console.log("vowels: ", countNum, prompt)
}
getCountOfVowelsInString("Ankita Patel")
// Example : given string is "Ankita"
// vowel count is : 3 *



// What is Js and how its work *
// Js is a most popular language in the world for a web development .It is a scripting language.