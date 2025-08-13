// ====================>> What is rest parameter in js <<===============================

// Jab hum destructuring ka use karte hain, to jitni values humein leni hoti hain, unhe hum variable name dekar le lete hain. Baaki bachi hui values ko hum "rest parameter" kehte hain. In values ko lene ke liye hum rest parameter ka use karte hain.



// English: The rest parameter in JavaScript lets you collect all the remaining values into a single array. It’s useful when you don’t know how many values you’ll get.

// Hinglish: Rest parameter ka use hota hai bachi hui saari values ko ek array mein lene ke liye. Jab humein nahi pata kitni values aayengi, tab yeh kaam aata ha
// Example:
function sum(...numbers) {
    console.log("2",numbers); // numbers is an array of all arguments passed
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
let numBer = [1, 1, 1, 30, 40, 50];
console.log(sum("1",...numBer)); // 123
// or
console.log(sum(1, 1, 1, 30, 40, 50)); // 123



