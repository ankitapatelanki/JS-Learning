// JavaScript - 6: -  📌 Deep & Shallow Copy 🔥 Y-2025
// 1. What is a shallow copy? How can you create one in JavaScript? *
    // A shallow copy create a new object and copies the values of the orginal objects first-level/top-level properties . If there is any nested object in it then only the reference is copied not the actual object.
    // // EX:
    //  let person = {
    //  name: "Alice",
    //  address: {
    //  city: "Delhi",
    //  pin: 110001
    //         }
    //     };
    //    
    //     let person1 = person 
    //     console.log(person1 , person)

// 2. Write code to create a shallow copy of the following object:  

// let person = {
//   name: "Alice",
//   address: {
//     city: "Delhi",
//     pin: 110001
//   }
// };
//     let person2 = {...person}
//         person.name = "anie"

//         console.log(person,person2)
// output:{ name: 'anie', address: { city: 'Delhi', pin: 110001 } } { name: 'Alice', address: { city: 'Delhi', pin: 1
// 10001 } }



// 3. Using the above object(question 2) , modify the city in the copied object. Does it affect the original? Why? 

//   let person = {
//      name: "Alice",
//      address: {
//      city: "Delhi",
//      pin: 110001
//             }
//         };
//         person.address.city = "NewDelhi"
//         let person1 = person 
//         console.log(person1 , person)

// bcz city is a nested object .

// 4. List at least 3 different ways to create a shallow copy of an object or array.   *

//  1- Using Spread operator(...)
        let fruits = {
            color:"red",
            prize:30,
            qty:"1dozen",
        }
        let fruits2 = {...fruits}
            fruits2.name = "banana"
        console.log(fruits,fruits2)

//  2- using object.assign()
        let obj ={1:"I",2:"II",3:"III"}
        let obj2 = {1:"one",2:"two",3:"three"}
        result = Object.assign(obj)
        console.log(obj2,result)
// 3- using array.slice()
        let arr = ["a,b,c"]
        let arr2 = arr.slice()
        console.log(arr2)

// 5. What is a deep copy, and how is it different from a shallow copy?   *
        // Deep copy helps us to change nested object. It will not affect our original object. It will only update nested object. Rest of the object will remain same.
        // But shallow copy does not do this. Shallow copy can only update top level values and cannot update/change nested object.

// 6. Explain why a deep copy is necessary when working with nested objects.   *
        // Because shallow copy does not do this. Shallow copy can only update top level values and cannot update/change nested object. If we want to change nested object then we will need deep copy.

// 7. Given the following function, what will be the output and why?  

function modify(obj) {
  obj.value = 20;
}

let num = { value: 10 };
modify(num);
console.log("modify",num.value);
output:10


// 8.  What it does: JSON.parse(JSON.stringify(original))?
// Ans:
// It converts the object to a JSON string and then parses it back to create a new object — effectively cloning the structure and values. 

// 📌 Note this down in your notebook. If you didn’t understand it, please also mark it as a doubt question. We will discuss it in the next session.  

 
// 9.  Write code to perform a deep copy using JSON.parse(JSON.stringify(obj)). *
    let object = {
        name:"rohan",
        gender:"male",
        address:{
            city: "Delhi",
             pin: 110001
        }
    }
    let object2 = JSON.parse(JSON.stringify(object))
    object.address.city= "NewDelhi"
    console.log(object,object2)

// 10. What are the limitations of this method? 
// JSON.parse(JSON.stringify(obj)) 

// 📌 Note this down in your notebook. If you didn’t understand it, please also mark it as a doubt question. We will discuss it in the next session.  

// Link : Drive Link
// {
// ❌ Limitations of JSON.parse(JSON.stringify(obj)) :
// ⚠️ Limitation 🔍 Explanation
// 1. Loss of Functions- Functions cannot be stringified by JSON.stringify , so any method

// or function in the object will be lost.

// 2. Undefined values are ignored- Properties with undefined values will be removed.

// 3. Symbol properties are ignored- Symbol keys are not included in JSON.

// 4. Cannot handle circular references- If the object has circular references, it throws an error ( TypeError:
// Converting circular structure to JSON ).

// 5. Date becomes string - Date objects are converted to strings, and you lose the original Date type.

// 6. Special object types are lost- Types like Map , Set , RegExp , Error , BigInt , etc., are not
// handled properly — they get converted to plain objects or lost.

// 7. Prototype chain is lost - The copied object becomes a plain object ( {} ), not retaining the prototype of the original.}