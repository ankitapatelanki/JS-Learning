// Arrow Function : 
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:

let myFun = ()=>{

}

console.log("myFun", myFun)

let myFun2 = function(){

}

console.log("myFun2", myFun2)




function test(){}
let myFun3 = test;
console.log(
    "myFun3", myFun3
)


// add function;

let add = (num1 , num2)=> num1+num2;

let sum1 = add(44,44)
console.log(sum1)