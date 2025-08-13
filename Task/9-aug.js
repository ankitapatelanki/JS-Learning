// JavaScript - 13:  Mastering if, else if, and else in JS  -  😍 Y-2025
// Please don't copy paste answer from any where and don't see the solution from the internet.  Best of Luck 👍🏻
// ✨ Keep practicing! Concepts like this help build a strong JavaScript foundation.
// You’re doing great — stay consistent and curious! 💪🚀  
// Q1. Write a program that checks if a number is positive or negative. *


    function checkNum(value){
                if(value>0){
                    console.log("positive")
                }else{
                    console.log("neg")
                }
    }
    checkNum(88)        //positive
    checkNum(-88)       //neg

// Q2. Write a program to check whether a number is even or odd. *
        function checkEvenOrOdd(val){
            let div=val%2;
            if(div==0){
                console.log("Is Even ")
            }else{console.log("Is Odd")}
        }
        checkEvenOrOdd(4)       //Is Even
        checkEvenOrOdd(5)       //Is Odd

// Q3. Write a program to assign grades based on marks (A, B, C, D, F). *
        function checkGrade(mark){
            if(mark>=95){
                console.log("A")
            }
            else if(mark>=85){
                console.log("B")
            } 
            else if(mark>=75){
                console.log("C")
            }
             else if(mark>=60){
                console.log("D")
            }
             else{
                console.log("F")
            }
        }
        checkGrade(95)      //A
        checkGrade(86)      //B
        checkGrade(78)      //C
        checkGrade(35)      //F

// Q4. Write a program to find the largest of two numbers. *
        function findLar(a,b){
                if(a>b){
                    console.log("find Largest",a)
                }
                else{
                    console.log("find Largest",b)
                }
        }
        findLar(4,1)

        // use Math.max
        let nmb=Math.max(5,8)
        console.log("use Math.max",nmb)

// Q5. Write a program to find the largest among three numbers. *
        function find(x,y,z){
            if(x>y){
                console.log(x)
            }else if(y>z){
                console.log(y)
            }else{console.log(z)}
        }
        find(4,84,0)

        
        //or 2nd approach 
        // use Math.max
        let nmb2=Math.max(5,8,40)
        console.log("use Math.max",nmb2)

// Q6. Write a program to check whether a number is divisible by both 3 and 5. *
        function checkDiv(x){
            let newCheckDiv=x%3||x%5;
            if(newCheckDiv==0){
                console.log("it's divisible by both",newCheckDiv)
            }else{console.log("it's not divisible by both")}
        }
        checkDiv(30)        //it's divisible by both 0
         checkDiv(23)        //it's not divisible by both

// Q7. Write a program to check if the user is eligible to vote (age >= 18). *
        function CheckUserEligibleForVote(age){
            if(age>=18){
                console.log("user eligible for vote")
            }else{console.log("user not eligible for vote")}
        }
        CheckUserEligibleForVote(19)        //user eligible for vote
        CheckUserEligibleForVote(17)        //user not eligible for vote

// Q8. Write a program to check if a year is a leap year. *
            function leapOrNot(year){
                if(year%4===0 ||  year%400===0){
                    console.log("true it's leap year")
                }else{console.log("false it's not a leap year")}
            }
            leapOrNot(2025)     // false it's not a leap year
            leapOrNot(2024)     // true it's leap year

// Q9. Write a program to check if a character is a vowel or consonant. *
        function checkCharVowOrCons(str){
            let count  = ""
            for(let i=0; i< str.length ; i++){
                let letter = str[i].toLowerCase()
                if(letter=="a"  ||letter=="e" ||letter=="i" ||letter=="o" ||letter=="u"){
                     return "its vowels";
                //    count++;
                }
                else{return "its consonant"}
            } return count++;
        }
        let str = "b"
        console.log(checkCharVowOrCons(str))
// Q10. Write a program that checks if username and password are correct.

// Assume username is "admin" and password is "1234". Write a program to check if both are correct.  
// *
        
        let correctUsername = "anshika";
        let correctPassword = 12345;

        let inputUsername = "";
         let inputPassword =  12345;
     
        if(inputUsername === correctUsername && inputPassword===correctPassword){
            console.log("its correct")
        }else{console.log("its wrong")}
   