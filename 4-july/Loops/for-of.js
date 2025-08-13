// ================================>> 🔥 for-of() 🔥 <<==========================
// Iterate over the values of an iterable object.
// It allows you to access each element directly
// Hinglish: for of loop ka istemal iterable object ke values ko iterate karne ke liye hota hai.
// Ye aapko har element ko seedha access karne ki suvidha deta hai

// Example of for-of loop with an array:
let arr1 = [10, 20, 30, 40, 50];
for (let value of arr1) {
    console.log(value);
}
// Output: 10
//         20
//         30
//         40
//         50


// Example of for-of loop with a string:
let str1 = "Ankita Patel";
for (let char of str1) {
    console.log(char);
}
// Output: A
    //         n
    //         k
    //         i
    //         t
    //         a

    //         P
    //         a
    //         t
    //         e
    //         l


let arr = [20,30,50,99];

for(ele of arr){
// console.log(ele);

} 


let str = "Ankita Patel"; 

let newStr = ""; //"AnkitaPatel"
for(char of str){
   if(char!=" ")
    newStr = newStr+char
}
console.log(newStr)

// Print string in reverse order: // letaP atiknA
let reverseStr = "";
for(char of str){
    if(char!=" ")
    reverseStr = char+reverseStr
}
console.log(reverseStr)


// Print String --------

let str2 = "mad"

function checkPalindrome(name){
    let reverseStr2 = "";
    for(char of str2){
        reverseStr2 = char+reverseStr2
    }
    // console.log(reverseStr2)
     if (str2==reverseStr2){
            console.log(true)
        }else{
            console.log(false)
        }
}
checkPalindrome()