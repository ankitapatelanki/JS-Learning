// 1. Reverse words in a string
// Given a string str, find a way to reverse the order of the words in the given string.

// Input: str = "i.like.this.program.very.much" 
// Output: str = "much.very.program.this.like.i" 
// Explanation: The words in the input string are reversed while maintaining the dots as separators, resulting in "much.very.program.this.like.i".



// 📌 complete below function with complete logic
//  let str1 = "i.like.this.program.very.much";

    let revrsStr = "i.like.this.program.very.much"
function reverseString(str){
                let reverseStr1 = ""
                for(char of revrsStr){
                  if(char !='revrsStr'){
                  reverseStr1= char+reverseStr1
                 
    }}
console.log("'rvrs'",reverseStr1)}
reverseString()



// function reverseStr(str){
//     let reverse = "";
//     for(char of str1){
//             reverse = char+reverse;
//     }

//     console.log(reverse)
//         return str2.reverse;
//        console.log(str2)

   //     let reverseStri="";
//     for(let i = str1.length; i>=0; i-- ){
//         if() {
//             reverseStri=char+str1
//         }
// }
   
//  let str2 = str1.push;
 
//     let reverseStr1 = "";
// for(char of str1){
//     if(char !== str1)
//     reverseStr1.push = char+reverseStr1
// }
// }
// reverseStr()



     
   

// *
// 2.  Reverse words in a string
// Given a string str, find a way to reverse the order of the words in the given string.

// Note: str may contain leading or trailing dots(.) or multiple trailing dots(.) between two words. The returned string should only have a single dot(.) separating the words.

// Input: str = ”..geeks..for.geeks.” 
// Output: str = “geeks.for.geeks”

// Input: str = "i.like.this.program.very.much" 
// Output: str = "much.very.program.this.like.i" 

// Input: str = "...home......" Output: str = "home"

// 📌 complete below function with complete logic
let revrsStrRmvTrailDot1 = "i.like...this.program.very.much"
function reverseStrRemoveTrailingDots(str){
                let reverseStrRemvTrailDots2 = ""
                for(char of revrsStrRmvTrailDot1){
                  if(char !=='.'){
                  reverseStrRemvTrailDots2 = char+reverseStrRemvTrailDots2 
                }}
                console.log(reverseStrRemvTrailDots2)}
reverseStrRemoveTrailingDots()



let revArr =[24,57,78] 
function reverse(arr){
        let emptyArr=[];
        for (let num of revArr){
            if(num != revArr){
                emptyArr= num +emptyArr;
            }
        }console.log(emptyArr)
}
reverse()

let striii = "i,love . my web pages,,///";
function reverseTrim(str){
    let emptyStr="";
    for(let char of striii){
        if(char!=='char'){
            emptyStr=emptyStr+char
        }
    }
    console.log("emptyStr",emptyStr)
}
reverseTrim()
// *
// 3. Print string is palindrome , if yes then print "Palindrome" else "Normal string"

// A string is called a palindrome if the reverse of the string is the same as the original one.

// Example: “madam”, “racecar”, “12321”.


// Note: What is Palindrome string ?  
// It means that when you reverse a given string, it should be the same as the original string. For instance, the string 'level' is a palindrome because it remains the same when you read it from the beginning to the end and vice versa.

// 📌 complete below function with complete logic
    let palindrom="racecar"
    function isStrPalindrome(str){
      let palStr = "";
      for(char of palindrom){
        palStr = char+palStr;
       } 
       if(palindrom == palStr){
            console.log("Palindrome String")
        }else{console.log("Normal String")}
      
    }

    isStrPalindrome()






// 4. print a table below given format - 
// Take an integer as a parameter 
// let numb = 5;

// output look like this: 

// 5 * 1 = 5 
// 5 * 3 = 15
// 5 * 5 = 25
// 5 * 7 = 35
// 5 * 9 = 45
// *
    function printTable(num){
        for (let i=1; i<=10; i++){
                console.log(`${index} * ${i} = ${index*i} `)
        }
    }
    let index = 4;
printTable()


// 4. Print a multiplication table in reverse order using the format shown below.
// Take an integer as a parameter.   
// let numb = 5;

// output look like this: 
// 5 * 9 = 45
// 5 * 7 = 35
// 5 * 5 = 25
// 5 * 3 = 15
// 5 * 1 = 5 



  function printTableInReverse(reverseNum){
    
        for (let i=9; i>=endOftheIndex; i--){
                console.log(`${index1} * ${i} = ${index1*i} `)
        }
    }
    let index1 = 8;
    let endOftheIndex = 1
printTableInReverse()




// 5. Print the * patter using the format shown below.
// Take an integer as a parameter.

// Example: 
// let num = 2;
// output look like this:
// *
// **

// let num = 4
// output:
// *
// **
// ***
// ****

// let num = 5 
// output:
// *
// **
// ***
// ****
// *****

// 📌 complete below function with complete logic
// function printStartPattern(num){
//     for(let i=1; i<=num; i++ ){
//         if( num == '*'++  ){
//             console.log(num)
//         }
//     }
// }

// printStartPattern(5)
 





// let revrsStrRmvTrailDot12 = 2
// function reverseStrRemoveTrailingDots11(str){
//                 let reverseStrRemvTrailDots13 = ""
//                 for(num of revrsStrRmvTrailDot12){
//                   if(num =='*'){
//                   reverseStrRemvTrailDots13 = num+reverseStrRemvTrailDots12 
//                  console.log("reverseStrRemvTrailDots12" , reverseStrRemvTrailDots12)
//     }}}
// reverseStrRemoveTrailingDots()