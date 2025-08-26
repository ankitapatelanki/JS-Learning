// 1. How to add a property inside an object?

let person = {
    name:"Ankita",
}

// console.log("Before : ",person)
// How to add a key inside an object using dot notation ?

person.gender = "Female";
person.age = 23;

// console.log("after : ", person)

// ### How to add a key inside an object using Bracket notation ? 
 
person["hobby"] = ['cricket', 'reading books']


delete person.hobby;

let dynamicKey = "name"
// console.log("person age: ", person.gender)
 
// how to acceess key inside an object dynamically
// console.log(person[dynamicKey])

// console.log("per:", person)

person.name = "Anki"
console.log(person)


