// find target element index
// Array will always contains unique value
// if target element not present then return -1;
// let arr1 = [55,66,77,11,88,33,98]
// let target = 88;
// output: 4


let arr1 = [55,66,77,11,88,33,98]
let target = 89;
for(let i=0 ; i<arr1.length; i++){
    if(arr1[i] ===target){
       console.log(i) 
    }else if(i=== arr1.length-1 ){
     console.log('-1',-1);   
    }}
 console.log('3',arr1 ,target)


