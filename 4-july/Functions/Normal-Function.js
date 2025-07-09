// How to create normal or regular function: 

function pringLog(){
    console.log("This is printLog function...")
}

// Calling 
// pringLog();



// how to create parameterize function 

function sum(number1, number2){
   return number1+number2
}

let total =  sum(340,450);
console.log("total",total)


// TASK:
// Create a function. which take one parameter (number).
// inside function write a logic print table of given number by the user.

// 2 * 1 = 2

function table(no){
    for(let number = 1; number<=10; number++){
        console.log(no + " * " , number , "=", no*number)

    }
}

table(3)




// print table 

function printTable(value){
        for(let i=1; i<=20; i++){
            console.log(value , "*", i ,"=", value*i)
        }
}
printTable(5)

// function printab(n){
//     for(let i=1; i<=10; i++){
//         console.log(n*i)
//     }

// }
// printab(9)




// function pt(nu){
//         for(let no=1;no<=10;no++)
//             console.log(nu*no)
// }
// pt(8)





function add(no1,no2,no3,no4,no5){
    console.log(no1+no2+no3+no4+no5)
}
add(1,1,1,1,1)

// Task: 
// Create a function. which take 4 parameer
// Add all parameters value and divide by 2 and check it's even or odd
// if it's event the print msg: "Even ❤️" else print "Odd 😊"


// Note: How to find even or odd: 
// use modulo operator / reminder operator (% - return the remainder of a division opertions) to check number is even or odd
// if it's return 0 it's means number is even else odd


function evenOdd(num1,num2,num3,num4){
     let addnum = num1+num2+num3+num4;
    let reminder = addnum%2;
    if(reminder==0){
        return "even"
    }
    else {
        return "odd" 
    }

}

// let result = evenOdd(6,1,6,4)
// console.log(result)







function evenOdd1(num1,num2,num3,num4){ 
     let addnum = num1+num2+num3+num4;
    let reminder = addnum%2;
    if(reminder==0){
        return "even"
    }
    else {
        console.log("odd")
        // return "odd" 
    }

}

let result1 = evenOdd1(6,1,6,4)
if(result1){
    console.log("jjjjjjj:",result1)
}





function evenOdd2(num1,num2,num3,num4){
     let reminder = (num1+num2+num3+num4)%2;
    return  reminder == 0 ? "Even" : "Odd";
    
}




// create a function which take 4 parameter:
// first parameter take roll number (number)
// second parameter take name (string)
// third parameter take  hobbies (array)
// Fourth parameter take Object literal ({});
// Logic : fill all data inside an object and add some extra keys like : age,  and  return this object;

// when function returned the object you need to print the returned value;

function person(rollNumber,name,hobbies,object){
        object.rollNumber= rollNumber;
        object.name= name;
        object.hobbies= hobbies;
        object.age= 22;
        return object
}

let details= person(111,"aa",["xyz","cvb"],{})
console.log(details)




let str  = "adfskjakf";
let str2 = "";
let bool = true;
let boll2 = false;

let num = 0;
let num2 = 1;
let em1 = undefined;
let em2 = null;

if(em2){console.log("yes positive")}
else console.log("negative");