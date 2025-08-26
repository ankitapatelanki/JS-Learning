// ================================>> 🔥 some() 🔥 <<==========================
// Note = some() is a higher order function. which take a function as an argument and iterate all elements of an array and check given condition. if single element match this condition then some() will return true else it return false;


// English: The some function checks if at least one element in the array passes the test implemented by the provided function. It returns true if at least one element passes, otherwise false. It does not modify the original array.
// Hinglish: Some function check karta hai ki array ke kisi bhi element ne diye gaye function ke test mein pass kiya hai ya nahi. Agar kisi bhi element ne pass kiya hai to yeh true return karta hai, warna false. Yeh original array ko modify nahi karta.

// Example of some function with an array
let arr1 = [20, 30, 50, 90];            
let bool1 = arr1.some((element) => element % 2 === 0);
console.log(bool1); // true

let arr = [20,30,50,99];
let bool = arr.some((element)=> element===0)
console.log(bool)  //true
