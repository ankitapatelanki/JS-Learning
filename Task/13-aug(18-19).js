// JavaScript - 18: Logic Building Assignment  🤞🏻🔥 (Level 2)

// Q1. Write the output: let x = 0; for(let i=1; i<=3; i++){ x += i; } console.log(x);

// 3
// 6
// 0
// 5

// Answer: 6
// (1 + 2 + 3 = 6)


// Q2. What will console.log([1,2,3].map(n => n * 2)) output?

// [2,4,6]
// 2,4,6
// [1,4,9]
// [3,6,9]

// console.log([1,2,3].map(n => n * 2))
// Answer: [2,4,6]
// (Each element is doubled)


// Q3. Which code correctly checks if a number is even?

// if(num % 2 == 0){}
// if(num / 2){}
// if(num % 2){}
// if(num == 2){}

// Answer: if(num % 2 == 0){}
// (Checks for remainder of 0 when divided by 2)

// Q4. Output? let arr = [10,20,30]; arr.pop(); console.log(arr.length);

// 2
// 3
// 1
// 0

// let arr = [10,20,30];  
// arr.pop();  
// console.log(arr.length);
// Answer: 2
// (pop() removes the last element, so array becomes [10, 20])



// Q5. Which code finds the largest number in an array?

// Math.max(arr)
// Math.max(...arr)
// max(arr)
// arr.max()

// Answer: Math.max(...arr)
// (... spreads the array into individual arguments)



// Q6. Output? let str = 'Hello'; console.log(str[1]);

// H
// E
// e
// l


// let str = 'Hello';  
// console.log(str[1]);
// Answer: e
// (Index 1 is the second character)


// Q7. What will console.log(Boolean(0)) print?

// true
// false
// 0
// undefined


// console.log(Boolean(0))
// Answer: false
// (0 is falsy in JavaScript)

// Q8. Which loop is best for iterating through object properties?

// for
// for in
// for of
// while


// Answer: for in
// (for...in is used to iterate over enumerable properties of an object)

// Q9. Output? console.log([1,2,3].includes(2));

// true
// false
// undefined
// error


// console.log([1,2,3].includes(2));
// Answer: true
// (Array includes the number 2)






// JavaScript - 19: Logic Building Assignment  🤞🏻🔥 (Level 3)

// Q1. Output? let sum = 0; for(let i=1; i<=5; i++){ if(i%2===0) sum+=i; } console.log(sum);

// 6
// 8
// 12
// 10

// let sum = 0;  
// for(let i=1; i<=5; i++){  
//   if(i%2===0) sum+=i;  
// }  
// console.log(sum);
// Answer: 6
// (Even numbers from 1 to 5: 2 and 4 → 2 + 4 = 6)

// Q2. Output? let arr = [1,2,3]; arr[5] = 10; console.log(arr.length);

// 3
// 4
// 6
// 5

// let arr = [1,2,3];  
// arr[5] = 10;  
// console.log(arr.length);
// Answer: 6
// (Index 5 means the array has length 6; empty slots at positions 3 and 4)

// Q3. Which code reverses a string 'hello'?

// str.reverse()
// str.split('').reverse().join('')
// reverse(str)
// str[::-1]

// Answer: str.split('').reverse().join('')
// (This splits the string into array, reverses it, and joins back into a string)


// Q4. Output? let obj = {a:1, b:2}; for(let key in obj){ console.log(key); }

// a b
// 1 2
// undefined
// Error

// let obj = {a:1, b:2};  
// for(let key in obj){  
//   console.log(key);  
// }
// Answer: a b
// (for...in loops over keys in an object)

// Q5. Which loop is best for iterating values in an array?

// for of
// for in
// while
// do while

// Answer: for of
// (for...of iterates over values; for...in iterates over keys/indexes)

// Q6. Output? let nums = [1,2,3]; console.log(nums.reduce((a,b)=>a+b,0));

// 6
// 123
// Error
// NaN

// let nums = [1,2,3];  
// console.log(nums.reduce((a,b)=>a+b,0));
// Answer: 6
// (1 + 2 + 3 = 6)

// Start: a = 0 (initial value), b = 1 (first array element) → a + b = 1

// Next: a = 1, b = 2 → a + b = 3

// Next: a = 3, b = 3 → a + b = 6

// Final result: 6

// Q7. Which code removes duplicates from an array arr?

// [...new Set(arr)]    set ek data structure h jo unique value leta h ye value repeat nhi krta
// arr.unique()
// removeDuplicates(arr)
// Array.removeDuplicates(arr)

// Answer: [...new Set(arr)]
// (Set only keeps unique values, and ... spreads it back into an array)

// Q8. Output? let n=3; let fact=1; for(let i=1;i<=n;i++){fact*=i;} console.log(fact);

// 6
// 3
// 9
// 1

// let n = 3;  
// let fact = 1;  
// for(let i=1; i<=n; i++){  
//   fact *= i;  
// }  
// console.log(fact);
// Answer: 6
// (Factorial of 3 = 1×2×3 = 6)


// Q9. Output? let data = [10,20,30]; for(let x of data){ console.log(x*2); }

// 20 40 60
// 10 20 30
// 5 10 15
// Error

// let data = [10,20,30];  
// for(let x of data){  
//   console.log(x*2);  
// }
// Answer: 20 40 60
// (Each element is doubled and printed)