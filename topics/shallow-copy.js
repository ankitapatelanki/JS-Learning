// Learning about shallow copy and deep copy


// Let's talk about shallow copy -
// Here if we are perform any changes in obj1 or obj2 then both object will be modified;
// if we will change student2 infomation then student1 remain same.
// or if we will change student1 infomation then student2 remain same.


//Note - "A shallow copy creates a new object and copies the values of the original object's first-level properties/ top-level properties. if any of those properties are  (nested)objects, only the reference is copied, not the actual object.
// hinglish - "Shallow copy ek naya object banata hai aur original object ke first-level properties ki values ko copy karta hai. Agar un properties mein koi nested object hai, to sirf uska reference copy hota hai, actual object nahi."

// How to achieve shallow copy- 


// ====================>> Shallow Copy in JavaScript <<===============================
// There are 4 common ways to achieve a shallow copy in JavaScript
// 1. Using the spread operator (...)
// 2. Using Object.assign()
// 3. Using Array.slice() (for arrays only)
// 4. Using Array.from() (for arrays only)
// 5. Using concat() (for arrays only)



//1. using spread operator - (...) three dot [unpack the elements] (work with object and array)
//  How to achieve;
let student1 = {
    name:'Rohan',
    lastName: 'Rajawat',
    rollNumber: 2210,
    schoolName: "xyz",
    address: {
        pincode:2333
    },
    schoolName1: "xyz",
}
let student2 = student1;
console.log(student1,student2)

student2 = {...student1};
student2.age = 50
student1.age = 30

student2.address.pincode = 4444
console.log(student1,student2)
// Ex== 2
let arr = [10,20,30];
let arr2= [...arr];
arr.push(40);
console.log(arr,arr2)




//2. Object.assign()- work with object and array 
let obj = {
    date: "ssfdjslfd",
    day: "Wed",

}
const original1 = { name: 'Sky', age: 25 };
const copy1 = Object.assign({...obj}, original1);  

copy1.age = 30
console.log("rrr: ",original1,copy1)
// Example with array
const originalArray = [1, 2, 3];
const copyArray = Object.assign([], originalArray);
copyArray.push(4);
console.log("Array Copy: ", originalArray, copyArray);

//3. Using Array.slice() (for arrays only)
const original2 = [100, 2, 3];
const copy2 = original2.slice();
copy2.push(400);
console.log("Array Slice Copy: ", original2, copy2);


//4. Using Array.from() (for arrays only)
const original3 = [101, 202, 303];
const copy = Array.from(original3);
copy.push
console.log("Array From Copy: ", original3, copy);

//5. Using concat() (for arrays only)
const arr5 = [11, 22, 33];

const copy5 = [].concat(arr5);
arr5.push(44);
console.log("=>>>> ",arr5, copy5)




// shallow copy se only first level properties ko hi copy krke new object mai daal skte hai.
const original = { name: 'Sky', details: { city: 'Delhi' } };
const shallowCopy = { ...original };

shallowCopy.details.city = 'Mumbai';

console.log(original.details.city); // Output: 'Mumbai'
//  Because details is a nested object, both original and shallowCopy share the same reference to it.



// ====================>> Deep Copy in JavaScript <<===============================
// English: Deep copy is a process of creating a new object that is a copy of an existing object, including all nested objects. This means that changes made to the copied object do not affect the original object.
// Hinglish: Deep copy ek aisa process hai jisme ek naya object banaya jata hai jo existing object ka copy hota hai, saare nested objects ke sath. Iska matlab hai ki agar aap copied object mein changes karte hain, to original object par koi asar nahi padta.


// How to achieve deep copy -
// 1. Using JSON.parse() and JSON.stringify()
// 2. Using structuredClone() (available in modern browsers)
// example:--------------------

// 1. Using JSON.parse() and JSON.stringify()
let originalObj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: 10001
    }
};
let deepCopyObj = JSON.parse(JSON.stringify(originalObj));
deepCopyObj.address.city = 'Los Angeles';
console.log(originalObj,deepCopyObj); // Output: { name: 'John', age: 30, address: { city: 'New York', zip: 10001 } } { name: 'John', age: 30, address: { city: 'Los Angeles', zip: 10001 } }

// 2. Using structuredClone() (available in modern browsers)
let originalObj2 = {
    name: 'Alice',
    age: 25,
    hobbies: ['reading', 'traveling'],
    address: {
        city: 'San Francisco',
        zip: 94105
    }
};
let deepCopyObj2 = structuredClone(originalObj2);

deepCopyObj2.hobbies.push('cooking');
console.log(originalObj2.hobbies,deepCopyObj2.hobbies,"originalObj2",originalObj2,deepCopyObj2); 
// Output: ['reading', 'traveling'] ['reading', 'traveling', 'cooking'] originalObj2 { name: 'Alice', age: 25, hobbies: [ 'reading', 'traveling' ], address: { city: 'San Francisco', zip: 94105 } } deepCopyObj2 { name: 'Alice', age: 25, hobbies: [ 'reading', 'traveling', 'cooking' ], address: { city: 'San Francisco', zip: 94105 } }
