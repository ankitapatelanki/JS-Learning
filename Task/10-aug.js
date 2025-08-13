Q1. Which loop is used to iterate over the values of an iterable object in JavaScript?
Answer: for...of
Explanation: for...of iterates over values of an iterable like arrays, strings, etc.

Q2. Which loop iterates over the keys of an object?
Answer: for...in
Explanation: for...in loops over the enumerable property keys (names) of an object.

Q3. Output of: for (let i = 0; i < 3; i++) { console.log(i); }
Answer: 0 1 2
Explanation: Standard loop starts from 0, runs while i < 3.

Q4. What will for (let key in ['a','b']) iterate over?
Answer: Indexes 0 and 1
Explanation: for...in gives keys (indexes) when used on arrays.

Q5. Which loop is best to iterate through an array's values directly?
Answer: for...of
Explanation: for...of gives direct access to values, ideal for arrays.

Q6. What will this code output?

javascript
Copy
Edit
let arr = ['x','y'];
for (let value of arr) {
  console.log(value);
}
Answer: x y
Explanation: for...of yields 'x' then 'y'.

Q7. Which loop is not recommended for iterating arrays when order matters?
Answer: for...in
Explanation: for...in is not guaranteed to maintain array order.

Q8. What will for (let ch of 'JS') print?
Answer: J S
Explanation: A string is iterable; for...of yields 'J' then 'S'.

Q9. Which loop requires a counter variable manually updated?
Answer: for
Explanation: You must initialize and update the counter yourself in a for loop.

Q10. Output of:

javascript
Copy
Edit
let obj = {a:1,b:2};
for (let key in obj) {
  console.log(key);
}
Answer: a b
Explanation: for...in gives the keys: 'a', then 'b'.












// 10-aug Second task 

Q1. What does JavaScript primarily run on?
Answer: User's browser
Explain: JavaScript runs on the client-side, in the user's browser, enabling dynamic web pages.

Q2. Which of the following is used to store multiple values in one variable?
Answer: Array
Explain: Arrays store multiple values in a single variable, indexed by position.

Q3. What is the correct syntax to declare a variable in ES6?
Answer: Both let and const.
Explain: ES6 introduced let and const for variable declarations (scoped and block-level).

Q4. Which symbol is used for single-line comments in JavaScript?
Answer: // comment
/* */ is for multi-line comments.

Q5. Which data type represents true or false values?
Answer: Boolean
Explain: Booleans represent logical values: true or false.

Q6. What will typeof null return in JavaScript?
Answer: object
Explain: This is a known JavaScript quirk. typeof null returns "object" due to legacy reasons.

Q7. Which function is used to print messages to the console?
Answer: console.log()
Explain: console.log() is used for printing to the browser's console.

Q8. What does NaN stand for?
Answer: Not a Number
Explain: NaN indicates a value that is not a legal number, like parsing letters into numbers.

Q9. Which operator is used to assign a value to a variable?
Answer: =
Explain: = is the assignment operator.
== and === are for comparisons.

Q10. What is the correct file extension for JavaScript files?
Answer: .js
Explain: JavaScript files use the .js extension.