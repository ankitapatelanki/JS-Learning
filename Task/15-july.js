// JavaScript - 3: Understand Object {} in deep -  😍 Y-2025
// Please don't copy paste answer from any where and don't see the solution from the internet.  Best of Luck 👍🏻

 
// * Indicates required question*****


// 1. Create a simple object for a car with properties: brand, model, and year. Print each property.  
    let car = {
        brand : "toyota",
        model : "fortuner",
        year  : 2004,
    }
    console.log(car)    //{ brand: 'toyota', model: 'fortuner', year: 2004 }




// 2. Add a new property color to the car object and print the updated object.  
// *
car.color = "black";
console.log("add color : " , car)    //add color :  { brand: 'toyota', model: 'fortuner', year: 2004, color: 'black' }



// 3. Delete the year property from the object.  
delete car.year
console.log("delete year :" , car)          //delete year : { brand: 'toyota', model: 'fortuner', color: 'black' }



// 4. Check if the model key exists in the object.  
        if("model" in car){
            console.log("model key exists.")
        }else {
            console.log("model key does not exists." )
        }



// 5. Loop over all keys and print key-value pairs from an object.  
        // let keyOfCar = Object.keys(car)
        // console.log("keyOfCar :" , keyOfCar)
        let valueOfCar = Object.values(car)
        console.log("valuesOfCar :" , valueOfCar)
       




// 6. How to find object length?
         let keyOfCar = Object.keys(car)
         console.log("lengthOfCar : ", keyOfCar.length)         //lengthOfCar :  3







// 7. Write a function that takes an object and returns the number of properties in it.  
        function countOfProperties(car){
                return Object.keys(car).length
        }
       console.log("countOfProperties : ",countOfProperties(car))   //countOfProperties :  3






// 8. Create an object student with name, marks, and a method getGrade() that returns "Pass" if marks ≥ 40 else "Fail".   (Goal: Object with method  )
        let student = {
            name : "ram",
            marks : 55,
            getGrade : function getGrade(){         
                return this.marks>=40  ? "Pass" : "Fail"     
            }
              
        }
        console.log(student.getGrade()) //Pass





// 9. Merge two objects into one. If both have the same key, second object's value should overwrite the first.  
// Example: 
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 5, c: 10 };
let merged = { ...obj1, ...obj2}  
console.log(merged); // { a: 1, b: 5, c: 10 }
// *












// 10. What is Javascript and how is it work?
// *javaScript is the most popular language in the world for web development . It is also known as scripting language.
// There are two type of scripting language 
// 1-Client side.
// 2-Server-side.

// Javascript can be use for both side . It is an interpreted language which means it doesn't need a compiler to run - the browser or runtime enviroment intreprets it directly.

// Earlier,Javascript was mainly use for building Client side application (like adding interactivity to web page) But with the help of evolution of framework (like node.js and Express.js) it is now widely used server side development as well .

// It can be used to build websites , games and even mobile applications.