// Let's understand pass by value and pass by refrence

// Pass by value -
// Pass by value: For primitive types (like numbers, strings), when you copy or pass them, a new copy is made. Changing one does not affect the other.
// Hinglish:
// Pass by value: Agar aap number, string, ya boolean ko copy karte ho, toh ek naya copy banta hai. Ek ko change karne se dusre pe koi effect nahi hota.
// in the case of primitive datatype pass by value is possible.


// Example:
// let a = 10;
// let b = 30;
// let c = {};
// let d = [];
// let e = true
// let f = undefined;
// let g = "hey"

// console.log(typeof a, typeof c , typeof d, typeof e, typeof f, typeof g);

let a = 10;
let b = a;
console.log(a,b)
a = 30;
console.log(a,b)
b = 50;
console.log(a,b)
a = 100;
console.log(a,b)

let str = "hello"
let str2 = str;
str = "world"

console.log(str, str2)


// pass by refrence - in case of non-primitive datatype like array [], ojbects {}; 

// Pass by reference: For objects and arrays, when you copy or pass them, both variables point to the same data. Changing one will affect the other.
// Hinglish:
// Pass by reference: Agar aap object ya array ko copy karte ho, toh dono same data ko point karte hain. Ek ko change karoge toh dusra bhi change ho jayega.



let obj1 = {
    name : "Siya"
}
let obj2 = obj1;

console.log(obj1, obj2)

//lastName
obj1["lastName"] = "dummy"
obj2.age = 23;

console.log(obj1, obj2)


let arr1 = [10,20,30];
let arr2 = arr1;

arr1.push(80)
console.log(arr1,arr2)






// ========================>> Deep copy <<=========================
// Mutltiple way to achieve 

// 1. JSON.parse(Json.stringify())

let per1 = {
    name: 'RS',
    address:{
        pincode:'33344'
    }
}

let per2 = JSON.parse(JSON.stringify(per1))
per2.address.pincode = "444444"
per1.name = "sfasfasdf"
console.log(per1,per2)