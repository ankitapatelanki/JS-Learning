// JavaScript - 8: Build Your Logical Thinking - 🔥 Y-2025
// Please don't copy paste answer from any where and don't see the solution from the internet.  Best of Luck 👍🏻
//   ⚠️ Warning: Logical Thinking Required 🔴  


// The questions below are designed to build your logical thinking skills.
// Use a copy, pen, and paper to write down the logic, debug the code, and solve the problems.

// 🕒 Time Suggestion:

// Spend 30 to 45 minutes on each question to fully understand the problem.

// If you feel a question is tough or you're unable to solve it, spend at least 1 hour:

// Write your logic

// Dry run your code

// Then execute it

// If you're still unable to find the correct answer, don’t worry — just share your logic or partial solution with me for review.

// Please avoid searching for solutions online. We will discuss each question in the next session. Are you ready?  

// ⏳ Keep practicing and don’t give up! are you ready?

// *
//  Yes
//  No
// 1. Reverse an Array: 
    let arr = [1,2,3,4,5];
        arr.reverse()
        console.log(arr)
    // output : [5,4,3,2,1];


// 2. Find all vowels in a string and replace them with their uppercase form.
    
   function getCountOfVowelsInString(vowelsCount){
    let countNum = 0;
    
    for(let i=0; i<vowelsIsInStr.length; i++){
        let letter = vowelsIsInStr[i].toUpperCase();
        if(letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"){
            countNum++;
        }
        }
        console.log("vowels: ", countNum, vowelsIsInStr.toUpperCase())
}
let vowelsIsInStr ="alien"
getCountOfVowelsInString()
    

// output: AlIEn

// *
// 3.  Check if a string contains any vowels. Return true or false accordingly.

// let str1 = "xerox";  // true  
// let str2 = "tpght";  // false

// complete the following function  

function isStringContainsVowels(str) {
        for(let i= 0; i<vowels.length ; i++){
         let vow = vowels[i].toLowerCase();
        if(vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u"){
               return true;}
        }
           return false;
}
// let vowels = "ybnm";
let vowels = "akash"
console.log(isStringContainsVowels(vowels))
// *
// 4. Print Even Numbers

// Print only even numbers from the array:  
function Evennum(num){
    for(let i = 0; i<num.length; i++){
        if(num[i] % 2 ==0){
        console.log("Evennum", num[i])
    }}  }
    let num = [1, 4, 7, 10, 13, 16];
Evennum(num)

// 5. Square of Each Element


// Create a new array that stores the square of each element using .map():  
// let data = [14, 8, 29, 6, 19];
  function SquareNumber(SquareNum){
    for(let i =0 ; i<SquareNum.length; i++){
        console.log('SquareNumber',SquareNum[i]*SquareNum[i])
    }}  
    let SquareNum = [14, 8, 29, 6, 19];
SquareNumber(SquareNum)
// *
// 6. Reverse the Array (Without Using .reverse())  
 
// Print elements of the array in reverse order:  
// let nums = [1, 2, 3, 4, 5];
let reverseNum = [1, 2, 3, 4, 5];
function reverseArr(Arr){
    let reverseArr1 =[];
    for(let num of reverseNum){
        if(num !== reverseNum){
            reverseArr1 = num +reverseArr1;
        }
    } console.log('reverseArr:',reverseArr1)
}
reverseArr()
// output: [5,4,3,2,1]
// *
// 7.  Count Even & Odd Numbers

// Count how many even and odd numbers are there in the array:  

// let nums = [10, 13, 16, 19, 20];
function EvenAndOddnum(checkNumber){
    let EvenAndOddCountnum=0
    for(let i = 0; i<EvenAndOddNumsOfArr.length; i++){
        if(EvenAndOddNumsOfArr[i] % 2 ==0){
            EvenAndOddCountnum++;
        console.log("Evennum",EvenAndOddCountnum, EvenAndOddNumsOfArr[i])
    }else(EvenAndOddCountnum[i] % 2!==0)
         console.log("oddnum",EvenAndOddCountnum, EvenAndOddNumsOfArr[i])
  
    }
}  
    let EvenAndOddNumsOfArr = [1, 4, 7, 10, 13, 16];
EvenAndOddnum()
// output: even - 3, odd-2
// *
// 8.  Filter Positive Numbers
// Create a new array of only positive numbers: 
 
// let arr = [-3, 4, -2, 7, -1, 9];
// output: [4,7,9]

// function positiveNum(positiveNum1){
//         let positiveArr2=[];
//         for(let i=0; i<positiveArr.length;i++){
//             if(positiveArr[i]>0){
//                 positiveArr2=positiveArr2.push()positiveArr[i];
//             }
//         }
    
// }
// let positiveArr = [-3, 4, -2, 7, -1, 9];

// positiveNum(positiveArr2)
// *
// 9. Remove Duplicates  

// Remove duplicates from the array using a loop -
// let arr = [1, 2, 2, 3, 4, 4, 5];
// output: [1,2,3,4,5]
// let reverseNum1 = [1, 2, 3, 4, 5];
// function reverseArr(Arr){
//     let reverseArr1 =[];
//     for(num of reverseNum){
//         if(num != reverseNum){
//             reverseArr1++;
//         }  } 
// console.log(reverseArr1)}
// reverseArr()
//  let arr1 = [1, 2, 2, 3, 4, 4, 5];
//     let arr2 = arr1;
//      if(arr1[i] !==arr2[i])  {
//     console.log(arr2)
// }
// *
// 10.  Does Solving These Logical Questions Improve Your Thinking?

// *
//  Yes, solving such logical questions definitely improves your problem-solving and logical thinking skills
//  No, solving such logical questions does not improve your problem-solving and logical thinking skills.