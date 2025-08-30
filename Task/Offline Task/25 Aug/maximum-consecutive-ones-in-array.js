// Maximum consecutive one’s (or zeros) in a binary array
// Given a binary array arr[] consisting of only 0s and 1s, find the length of the longest contiguous sequence of either 1s or 0s in the array.
// *** Examples : 👉
// Input: arr[] = [0, 1, 0, 1, 1, 1]
// Output: 4
// Explanation: The maximum number of consecutive 1’s in the array is 4 from index 3-6.

arr = [0, 1, 0, 1, 1, 1,0,1,1,1,0]
let findMaxNum= 0;
let countNum= 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]===1 ){
        countNum++;
      findMaxNum=Math.max(findMaxNum,countNum)
    }else{countNum=0}
}console.log(findMaxNum)


// Input: arr[] = [0, 0, 1, 0, 1, 0]
// Output: 2
// Explanation: Th e maximum number of consecutive 0’s in the array is 2 from index 0-1.

arr1 = [0, 0,0,0,0, 1, 0,1,1, 1, 0]
let newArr=0;
let countNumArrNew=0;
for(let i=0; i<arr1.length; i++){
    if(arr1[i]===0){
        countNumArrNew++;
        newArr=Math.max(countNumArrNew,newArr)
      
    }else(countNumArrNew=0)
}console.log(newArr)
// Input: arr[] = [0, 0, 0, 0]
// Output: 4
// Explanation: The maximum number of consecutive 0’s in the array is 4.
arr3= [0, 0, 0, 0]
let countNumOfArr3=0
for(let i=0; i<arr3.length; i++){
    if(arr3[i]===0){
        countNumOfArr3++;
    }
}console.log(countNumOfArr3)

