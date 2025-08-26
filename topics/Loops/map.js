// =========================== 🔥 Map 🔥 =============================

// - > har ek element ko iterate krga, if condition doesn't meet
// then set undefined in the place of element but return same size of array;




// English: The map function goes through each element of an array, applies a function to it, and returns a new array of the same size with the changed values.

// Hinglish: Map function array ke har element par ek function lagata hai aur naya array banata hai, jismein sabhi values update ho jaati hain. Naya array ka size same hi rehta hai.


let arr = [20,60,80,100];
let newArr = arr.map((element) => {
        return element/2;
    }) 
    console.log(newArr)
    
    // ex2
    let arr1 = [120,140,160,180,200];
     let newArr1 = arr1.map((element) => element/2)
    console.log(newArr1)

// map -> ek higher order function (A higher-order function is defined as a function that either takes one or more functions as arguments (often called callback functions) or returns a function as its result, or both  hin








