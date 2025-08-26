// filter:
// English: The filter function creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
// Hinglish: Filter function ek naya array banata hai jismein sirf un elements ko rakha jaata hai jo diye gaye function ke test mein pass hote hain. Ye original array ko modify nahi karta.

// Example of filter function with an array
let arr = [20,55,99,90];

let filteredEle = arr.filter((element)=>{
    if(element%2==0){
        return element;
    }
})

console.log(filteredEle)


// let newArr = arr.filter((element,index)=>{
//    if(element == 60){
//     return index;
//    }
// })