// ===================>> How to find length of any object?

let person = {
    name: "Ankita Gupta",
    age : 23,
    gender:"F",
    husbandName: "Sky Gupta",
    pincode:10037
}

// Object.keys(): we will pass object inside Object.kyes() and it will return an arry which contains all keys of an object.

let keysOfArray = Object.keys(person);
console.log("keysOfArray: ", keysOfArray) //[ 'name', 'age', 'gender', 'husbandName', 'pincode' ]

let valueOfArray = Object.values(person);
console.log("valueOfArray: ", valueOfArray) //[ 'Ankita Gupta', 23, 'F', 'Sky Gupta', 10037 ]

// How to find size of an Object - 
let keysOfArr = Object.keys(person);
console.log(keysOfArr.length) // 5


