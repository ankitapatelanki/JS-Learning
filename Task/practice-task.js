// Ques1: 
// let arr = [33,50,66,88,90,1,3,5]; 
// make this array even : [ 50,66,88,90];

// function getCountOfVowelsInString(prompt){
//     let countNum = 0;
   
//     for(let i=0; i<prompt.length; i++){
//         let letter = prompt[i].toLowerCase();
//         if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
//             countNum++;
//         }
//         }
//         console.log("vowels: ", countNum, prompt)
// }
// getCountOfVowelsInString("Ankita Patel")


function even(arr){
    evenArr = []
    for(let i=1; i<arr.length; i++){
        if(arr[i]%2 == 0)
            evenArr.push(arr[i])
}
    return evenArr
}
let arr = [33,50,66,88,90,1,3,5]; 
console.log(even(arr,":even no."))



//Ques2: 
// let arr = [33,50,66,88,90,1,3,5];
// give total of odd number; 33+1+3+5
// output: 42

function sumOfOddNumbers(arr1) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 !== 0) {
            sum += arr1[i];
        }
    }
    return sum;
}

let arr1 = [33, 50, 66, 88, 90, 1, 3, 5];
console.log(sumOfOddNumbers(arr1))



//Ques3: 
// Reverse the Array: 


// let arr =  [33,50,66,88,90,1,3,5];
// output: [5,3,1,90,88,66,50,33];


arr.reverse()
console.log("reverseArr:",arr);





