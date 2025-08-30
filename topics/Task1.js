
// Remove space from every element and give me an array which contains correct string formate;
let arr = ["   ramji", "radhe", "ankit   ", "    pinki   "];

// let arr1 = arr.trim();
// console.log(arr1)


// arr[0]= arr[0].trim()
// arr[1]=arr[1].trim()
// arr[2]=arr[2].trim()
// arr[3]=arr[3].trim()
// console.log(arr)

let newArr2 = arr
console.log(newArr2.trim)







//create an object with some properties like: 
// name = "john",
// age = 20;
// address = {
//    street number: 787,
//    pincode: 7878878,
//    dist: "xyz"
// }
// DEf: Object is the collection of key value pairs; where each key and value is seperated by colon;
let person = {
name : "john",
age : 20,
address : {
   streetNumber: 787,
   pincode: 7878878,
   dist: "xyz"
} 
}

delete person.address.pincode;
console.log(person)

person.address["pin code"] = 2345;
console.log(person)

person.age = 25;
console.log(person);

console.log(person.address.streetNumber)

console.log(`Street number is ${person.address.streetNumber}, dist: ${person.address.dist}`)


// Do some changes in the preson object which you created;
// remove pincode key in the person object;
// add new key in person object inside address -> pin_code = 2345;
// update person age 20 -> 25
// print person dist and streetnumber in below given format:
// Example: "Street number is 787, dist: xyz"

