// 1. What would be the result of this?
// let str1 = "Hello";
// let str2 = "World";
// let result = str1 + str2;
// console.log(result);    //output:HelloWorld

// *
// 2. What would be the result of 3+2+"7"?
// let result = 3 + 2 + "7";
// console.log(result);
// please also explain your output why?
  //output: 57      3 and 2 will be added because this is a number and  "7" this is a string so it will be concatenate .



// 3. Are JavaScript and Java related? ( Please note this down ✍🏻 in your notebook. We will discuss their differences in the next session. ) *

// JavaScript and Java are completely different languages.They are not related to each other.


// 4. What does this code log?
// const arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length);
// Please also explain the output ?
// 8  because length count starts from zero index.



// 5. What are "truthy" and "falsy" values in JavaScript *
    //  Boolean is defined in two types
    //  * False
    //  * True
    
    //  1- False - False values are defined as follows:-
    //            * False
    //            * -0
    //            * ""
    //            * Zero
    //            * Undefined
    //            * Null
    
    // 2- True - All values are true except False values.
    //            * [ ]
    //            * { }
    //            * "Ram"
    //            * 424

// 6. How to delete property-specific values?
// let data={Course: "DSA", Duration:30};
// delete data.Course; 

// Ex:-
// let data={Name: "Ankita" , LastName: "Patel" , Course: "DSA", Duration:30};
// let's remove the lastName
// delete data.LastName; 
// console.log(data)
// output:{ Name:'Ankita',Course:'DSA',Duration: 30 }




// 7. What will be the output of this code?
// let x = 0;
// console.log(x++);
// console.log(++x);
// *
//  1
//  2
//  3
//  None of the above


// 8. What will be the result of this expression? 

// console.log(null ?? 'default');
// console.log(undefined ?? 'default');
// console.log(false ?? 'default');

// output: 
// default
// default
// false


// 📌 Note this down in your notebook. If you didn’t understand it, please also mark it as a doubt question. We will discuss it in the next session.  
// Explanation:

// ?? -> this is know as nullish coalescing operator (??)

// The nullish coalescing operator ?? returns the right-hand side only if the left is null or undefined. So:

// null ?? 'default' → 'default'
// undefined ?? 'default' → 'default'
// false ?? 'default' → false (because false is neither null nor undefined)



// 9.  What is the output of this ?

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b, a === b);

// please also provide explanation how and why?

// output: true , true (a and b have same values and same datatype)
// == only focus on value not datatype ,  === focus on both value and datatype . 



// 10. What is a higher-order function in JavaScript?
//Higher-order function is a function that take a function as an argument and return a function as a result. map,filter,some and every it's a higher order function.
