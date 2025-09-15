

// function getRepeatedNum(k){

// let arr=[1,2,3,4,5,2,6,9,5,6,5,5,5,5,5,5,5,51,1,1,,]
// let countNum=0;
// for(let i=1; i<=arr.length; i++){
//     if(arr[i]===k){
//         countNum++;
//     }
// }
// console.log(countNum)


// }
// getRepeatedNum(5)




function getRepeatedNum(k){

let arr=[1,2,3,4,5,2,6,9,5,6,5,5,5,5,5,5,5,51,1,1,,]
let countNum=0;
for(let i=1; i<=arr.length; i++){
    if(arr[i]===k){
        countNum++;
    }
}
return countNum;

}
let result=getRepeatedNum(5)
let total  = 40000+result;

console.log(result)
console.log(getRepeatedNum(5))// console.log(2)






// let arr2 = [1,2,3,3,2,1,1]
// let countNum2=0;

// for(let i=1; i<=arr2.length; i++){
//     if(arr2[i]=== arr2[i]){
//         countNum2++;
//     }
// }
// console.log(countNum2)
// 1->3
// 2->2
// 3->2

function getDuplicateNum(){
    let arr2 = [1,2,3,3,2,1,1];
    let countNum2=0;
    for (nums in arr2) {
        if (nums===nums) {
           countNum2++; 
            
        }
    }
}
getDuplicateNum()