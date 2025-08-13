// what is destructuring assignment ?
// it is used to "unpack the values" Destructuring assignment syntax is a javascript expression that makes it possible to "unpack values" from an array or properties from object, into distinict variables;
// Hinglish: Destructuring ka use hota hai values ko "unpack" karne ke liye. Matlab, array ya object se values nikal ke alag-alag variables mein rakh sakte hain easily.



// English: Destructuring assignment lets you easily take out values from arrays or objects and put them into separate variables.

// Hinglish: Destructuring ka matlab hai array ya object se values nikal ke alag-alag variables mein rakhna, easily.


// Example:
let arr = [10,20,30,40,50];
let [a,b,c,d,e] = arr; // destructuring assignment
console.log(a,b,c,d,e) // 10 20 30 40 50
// or
let [x,y,z] = arr; // destructuring assignment
console.log(x,y,z) // 10 20 30
// or
let [first, second, ...rest] = arr; // destructuring assignment
console.log(first, second, rest) // 10 20 [30, 40, 50]
