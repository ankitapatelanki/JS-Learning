// Q1. Output? 
// let sum = 0; 
// for(let i=1; i<=5; i++){ 
//     if(i%2===0) sum+=i; 
// } 
// console.log(sum);

//Q2. reverse str hello

let str = "h e l l o"; // single whitespace ' '
let str2 = "hello";  // no whitespace ''
let strArr = str2.split('')
console.log("strArr",strArr)  // ['h','e','l','l','o'] // ['o','l','l','e','h'].join() => 'olleh'
let reversedStr = strArr.reverse().join('')
console.log("reversedStr",reversedStr)  // 'olleh'
// str.split('').reverse().join('')


// ================= >>

// Data structures
// 1. Arrays
// 2. Objects
// 3. Sets
// 4. Maps

// Sets
// - A Set is a collection of values, where each value must be unique.
// - Sets are iterable, and you can use methods like add(), delete(), and has().

let set = new Set();
set.add(10)
set.add(20)
set.add(30);
set.add(10) // duplicate value, will not be added
set.delete(20);


if(set.has(10)){
    set.add(10000);
}

console.log("set: ",set, set.size, set.has(10), set.has(20));

// Array - > Order maintain hota hai 
// Set = > Order maintain nahi hota hai 

// Array - > By Using Index we can get value
// Set - >   We don't have index in set

// Array - > store duplicate
// Set - >   only unique allowed

// Array - > length
// Set - >  size


let arr = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50];

let set1 = new Set(arr);
console.log(set1)
let newArr = [...set1]
console.log(newArr)



// Theory
// Set, Diff set & Array, 
// split
// join
// reverse()

// Set & Array








// Reverse Array using Two Pointer algorithm


let arr1 = [1, 2, 3, 4, 5];

let leftPointer = 0;
let rightPointer = arr1.length - 1;

// don't provide me hint okay

while (leftPointer < rightPointer) {
  // Logic
  arr1[leftPointer] = arr1[leftPointer] + arr1[rightPointer];
  arr1[rightPointer] = arr1[leftPointer] - arr1[rightPointer];
  arr1[leftPointer] = arr1[leftPointer] - arr1[rightPointer];

  leftPointer++;
  rightPointer--;
}

console.log("arr1", arr1); // [5, 4, 3, 2, 1]