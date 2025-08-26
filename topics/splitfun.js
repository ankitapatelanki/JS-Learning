//Q2. reverse str hello

let str = "h e l l o"; // single whitespace ' '
let str2 = "hello";  // no whitespace ''
let strArr = str2.split('')
console.log("strArr",strArr)  // ['h','e','l','l','o'] // ['o','l','l','e','h'].join() => 'olleh'
let reversedStr = strArr.reverse().join('')
console.log("reversedStr",reversedStr)  // 'olleh'
// str.split('').reverse().join('')





// Theory
// Set, Diff set & Array, 
// 1. split() = The .split() method takes one big string and cuts it into smaller pieces, then puts those pieces into an array (a list). 

// 🔸 Examples:
// 1. Split by a space:
// let sentence = "Hello world!";
// let words = sentence.split(" ");
// console.log(words); // ["Hello", "world!"]

// 2. Split by a comma:
// let csv = "apple,banana,orange";
// let fruits = csv.split(",");
// console.log(fruits); // ["apple", "banana", "orange"]

// 3. Split each character:
// let word = "hello";
// let chars = word.split("");
// console.log(chars); // ["h", "e", "l", "l", "o"]

// 4. With a limit:
// let data = "a-b-c-d-e";
// let limited = data.split("-", 3);
// console.log(limited); // ["a", "b", "c"]




// reverse()
// join

// Set & Array






