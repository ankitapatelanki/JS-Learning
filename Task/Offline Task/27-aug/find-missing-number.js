// find missing number in the array.
// array always sorted and continous
// if array is complete, not missing an element then return -1;
let arr = [1,2,3,4,6,7,8,9,10]
let output = -1;
// ouput: 5;
for(let i=1; i<arr.length; i++){
    if(arr[i-1]+1!==arr[i]){
       output=arr[i]-1;
       break;
       
} 
}console.log(output)

