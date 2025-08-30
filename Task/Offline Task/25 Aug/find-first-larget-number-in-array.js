// First Largest Element in an Array
// Examples:
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 35



// find for min no.

// arr = [12, 35, 1, 10, 34, 1]
// let findLargest= arr[0]     
// for(let i =0 ; i<arr.length; i++){
//     if(arr[i] >findLargest){
//        findLargest= arr[i]
//         }
// }      console.log(findLargest)         //output:35




// find for max no. (2nd approach)
arr = [12, 35, 1, 10, 34, 1]
// let findLargest= arr[0]
let findLargest =Number.MAX_SAFE_INTEGER      
for(let i =0 ; i<arr.length; i++){
    if(arr[i] >findLargest){
       findLargest= arr[i]
        }
}      console.log(findLargest)         //output:35

// find for min no.
// arr = [12, 35, 1, 10, 34, 1]
// let findLargest =  Number.MIN_SAFE_INTEGER      
// for(let i =0 ; i<arr.length; i++){
//     if(arr[i] <findLargest){
//        findLargest= arr[i]
//         }
// }      console.log(findLargest)          //output:1






arr1 = [12, 35, 1, 10, 34, 1]
let findLarNum=0;
for(let i=0; i<arr1.length; i++){
    let curr=arr1[i]
    if(findLarNum<curr){
        console.log('findLarNum',findLarNum,'curr',curr)
        findLarNum=curr;
    }}
    console.log('findLarNum111',findLarNum)


    /**output:
findLarNum 0 curr 12
findLarNum 12 curr 35
findLarNum111 35

     */