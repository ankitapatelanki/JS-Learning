// Third largest element in an array of distinct elements
// Given an array of n integers, the task is to find the third largest element. All the elements in the array are distinct integers. 

// Input: arr[] = [1, 14, 2, 16, 10, 20]
// Output: 14
// Explanation: Largest element is 20, second largest element is 16 and third largest element is 14

arr = [1, 14, 2, 16, 10, 20]
let first=0;
let second=0;
let third=0;

 for(let i=0; i<arr.length; i++){
    let curr=arr[i];
    if(first<curr){
         console.log('first',first,'second',second,'third',third,'curr',curr)
        third=second;
        second=first;
        first=curr;
         console.log('first',first,'second',second,'third',third,'curr',curr)
    }
    else if(second<curr){
         console.log('first',first,'second',second,'third',third,'curr',curr)
         third=second;
         second=curr;
         console.log('first',first,'second',second,'third',third,'curr',curr)
    }else if(third<curr){
         console.log('first',first,'second',second,'third',third,'curr',curr)
        third=curr;
         console.log('first',first,'second',second,'third',third,'curr',curr)
    }curr++;
}
         console.log('first',first,'second',second,'third',third)
  

// Input: arr[] = [19, -10, 20, 14, 2, 16, 10]
// Output: 16
// Explanation: Largest element is 20, second largest element is 19 and third largest element is 16 
