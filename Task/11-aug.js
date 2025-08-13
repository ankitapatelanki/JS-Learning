// Q1. Write a for loop to print numbers from 1 to 10.
     for(let i=1 ; i<=10; i++){
         console.log("print no.1-10",i)
    }
// Q2. Write a for loop to print all even numbers from 2 to 20.
        for (let i=2 ; i<=20 ; i+=2){
            console.log("print even no. 2-20",i)
        }
// Q3. Write a for loop that calculates the sum of numbers from 1 to 100.
        let sum = 0;
        for(let i=1; i<=100; i++){
            sum= sum+i;
        }console.log(sum)
// Q4. Given an array const fruits = ["apple", "banana", "cherry"], use a for loop to print each fruit with its index.
        const fruits=["apple", "banana", "cherry"]
        for (let i=0; i<fruits.length; i++){
            console.log(fruits[i],[i])
        }
// Q5. Write a for...in loop to print all keys of an object const person = {name: "John", age: 25, city: "Delhi"}.
        const person = {name: "John", age: 25, city: "Delhi"}
        for(key in person){
            console.log("key",key)
        }
// Q6. Using the same object, print all values using for...in.
        const person1 = {name: "John", age: 25, city: "Delhi"}
        for(key in person){
            console.log("values",person1[key])
        }
// Q7. Given a nested object, use for...in to print all keys (including keys inside nested objects).
       let person2 = {
        name: "John",
        age: 25,
        add:{
        city: "Delhi"
        }
    }
    for(key in person2){
        console.log(key)
    }
// Q8. Write a for...of loop to print each number in const numbers = [10, 20, 30, 40].
        const numbers = [10, 20, 30, 40]
        for(num of numbers){
            console.log(num)
        }
// Q9. Write a for...of loop to print each character of the string "JavaScript".
        let string="JavaScript"
        for(str of string){
            console.log(str)
        }
// Q10. Write a for...of loop to calculate the total marks in const marks = [85, 90, 78, 92].
            const marks = [85, 90, 78, 92]
            let total=0;
            for(mark of marks){
                total=total+mark
            }
            console.log(total)
// Q11. Combine for...in and for...of to print all key-value pairs of an object where each value is an array.
            let obj={
            fruits: ["apple", "banana", "cherry"],
            veg: ["tomato","potato","onion"],
            }
            for(key in obj) {
                 for (value of obj[key]) {
                  console.log(key,':',value)
            }
            }
                // let keysOfArray = Object.keys(obj)
                 
// Q12. Write a loop that breaks when it encounters number 50 in an array and skips number 30.
        let array=[10,20,30,40,50]
        for(num of array){
            if(num == 30){
                continue;
            }else if(num==array.length){
                break;
            }
                console.log(num)
        }