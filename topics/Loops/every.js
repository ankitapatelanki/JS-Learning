// ================================>> 🔥 every() 🔥 <<==========================
// Note : Every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function.


// English: The every function checks if all elements in the array pass the test implemented by the provided function. It returns true if all elements pass, otherwise false. It does not modify the original array.
// hinglish: Every function check karta hai ki array ke sabhi elements diye gaye function ke test mein pass hote hain ya nahi. Agar sabhi elements pass hote hain to yeh true return karta hai, warna false. Yeh original array ko modify nahi karta.





//  is a higher order function. which take a function as an argument and iterate all elements of an array and check given condition. if all element match this condition then every() will return true else it return false;

// Example of every function with an array
let arr1 = [20, 30, 50, 90];
let bool1 = arr1.every((element) => element % 2 === 0);
console.log(bool1); // true

// Example of every function with an array where not all elements pass the test
let arr2 = [20, 30, 50, 91];
let bool2 = arr2.every((element) => element % 2 === 0);
console.log(bool2); // false

let arr3 = [21, 31, 51, 91];
let bool3 = arr3.every((element) => element % 2 !== 0);
console.log(bool3); // true
