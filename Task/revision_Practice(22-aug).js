// ❤️❤️❤️👉👉👉🙂🙂🙂❤️🙂🙂🙂👈👈👈❤️❤️❤️

// 👉👉<-------------reversestring 🫡🫡🫡---------------->
let str = "anshika";
let reverseStr=str.split("").reverse().join("");

console.log(reverseStr)

// 👉👉<-------------reverseArr 🫡🫡🫡(❁´◡`❁)---------------->
let array=[10,20,30,40,50]
let emptyArr=[]
for(let nums of array){
    emptyArr.push(nums).reverse
}console.log("emptyArr1",emptyArr)


for(let i=array.length-1; i>=0; i--){
    emptyArr.push(array[i])
}console.log("emptyArr2",emptyArr)



// 👉👉<!----------check user&pass are correct🫡🫡🫡🫡-------->
let enterUserName="anki";
let enterUserpass= 1234;

let users= "anki";
let pass=1234;
if(enterUserName==users && enterUserpass==pass){
    console.log("its verified ")
}
else{console.log("its wrong")}

//  👉👉<!---------- printTable 🙂🙂--------->
let enterDigit=2;
let printTable = 1;
for(let i=1; i<=10; i++){
    printTable=enterDigit*i;
console.log(enterDigit,"*",i,"=",printTable)}


// 👉👉 <!-------------- findFactorial 🙂🙂------------------>
let enterNo= 5;
let findFactorial=1;
for(let i=1; i<=enterNo; i++){
    findFactorial= findFactorial*i;
}
console.log(findFactorial)


// 👉👉<!--------- find_Vowels 🫡🫡🫡🫡------------->
let enter_Sentence= "asmusicberry";
let count =0;
let emptyStrForVowel="";
let emptyStrForConsonent="";
for(let i=0; i<enter_Sentence.length;i++){
   let letter = enter_Sentence[i].toUpperCase();
    if(letter=="A" ||letter=="E" || letter=="I" || letter=="O" ||letter=="U"){          //for vowel
        count++;
        emptyStrForVowel=emptyStrForVowel+letter.toLocaleLowerCase();
    }
    else if(enter_Sentence[i]!==letter){                        //for consonent
        emptyStrForConsonent=emptyStrForConsonent+letter.toLocaleLowerCase();
    }
}
    console.log("vowel_Count --",count, " ",   "find_Vowel_In_Sentence ---",enter_Sentence);
    console.log("it's vowel--",emptyStrForVowel)
    console.log("consonent",emptyStrForConsonent)


//  👉👉<!---------- find even &Odd Sum 🤔🤔🤔----------------->

    // <!------------ forEven-------------->
    // <!------------ sumOfEvenNum-------------->
    let findNumIsEven = [12,44,55,56,77];
    let countOfEvenNum=0;
    let newNumSum=[];
    for(let i=0; i<=findNumIsEven.length; i++){
        if(findNumIsEven[i]%2==0 ){
            newNumSum =+ newNumSum+findNumIsEven[i];
            countOfEvenNum++;
         }
        }
        console.log(countOfEvenNum,"sumOfEvenNum ",newNumSum,findNumIsEven)
        // output: 3 sumOfEvenNum  112 [ 12, 44, 55, 56, 77 ]

  
    //👉👉 <!------------ forOdd-------------->
    let findNumIsOdd=[1,3,5,4,9];
    let countOfOddNum = 0;
    let sumOfOddNum =[];
    for(let i=0; i<=findNumIsOdd.length-1; i++){
        if(findNumIsOdd[i]%2!==0){
            sumOfOddNum=+ sumOfOddNum+findNumIsOdd[i];
            countOfOddNum++;
        }
    }
    console.log(countOfOddNum,"sumOfOddNum",sumOfOddNum,findNumIsOdd)
    // output: 4 sumOfOddNum 18 [ 1, 3, 5, 4, 9 ]




// 👉👉<!---------- temprature ------------>
    let temprature = 21;
         if(temprature<=10){console.log("It's very cold outside")}
    else if(temprature<=23){console.log("It's cold outside")}
    else if(temprature<=33){console.log("It's normal outside")}
    else if(temprature<=43){ console.log("It's hot outside")}
    else{ console.log("It's very hot outside")}



//  👉👉<!--------using break & continue ---------------->
// 👉👉<!--------using continue statement in array 😊😊😊😊----------------->
    let arr=[1,2,3,4,5,6,7,8,9]
   for(let i=0; i<=arr.length; i++){
     if(i===2){
        continue;
     }
     else if(i===6){
        continue;
     }
     else if(i===8){
        continue;
     }
     console.log(i)
    }


    /**  output:
                0
                1
                3
                4
                5
                7
                9
    */


//👉👉 <!------using continue statement in reverseArr 🙃🙃🙃🙃🙃----------->

     let reverseArr=[1,2,3,4,5,6,7,8,9]
   for(let i=arr.length; i>=0; i--){
     if(i===2){
        continue;
     }
     else if(i===6){
        continue;
     }
     else if(i===8){
        continue;
     }
     console.log("reverseArr",i)
    }
        /**  output:
              reverseArr 9
              reverseArr 7
              reverseArr 5
              reverseArr 4
              reverseArr 3 
              reverseArr 1
              reverseArr 0

    */

//👉👉 <!------using break statement in Arr 🙃🙃🙃🙃🙃----------->

    let breakOfArr=[1,2,3,4,5,6,7,8,9]
   for(let i=0; i<=breakOfArr.length; i++){
     if(i===2){
        continue;
     }
     else if(i===6){
        break;
     }
     else if(i===8){
        continue;
     }
     console.log(i)
    }

     /**  output:
                0
                1
                3
                4
                5
    */


        