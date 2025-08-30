// Second Largest Element in an Array
// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.
// Note: If the second largest element does not exist, return -1.
// Examples:
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

    arr = [12, 35, 1, 10, 34, 1]
    let second=0;
    let first=0;
    for(let i=0; i<arr.length; i++){
        let curr=arr[i]
        if(first<curr){
            console.log('first',first,'second',second,'curr',curr)
            second=first;
            first=curr;
            console.log('first',first,'second',second,'curr',curr)
        }
        else if(second<curr){
            console.log('first',first,'second',second,'curr',curr)
            second=curr
            console.log('first',first,'second',second,'curr',curr)
        }
    }
      console.log('first',first,'second',second)

      /**output:first 0 second 0 curr 12
first 12 second 0 curr 12
first 12 second 0 curr 35
first 35 second 12 curr 35
first 35 second 12 curr 34
first 35 second 34 curr 34
first 35 second 34
*/


// ex2
// Input: arr[] = [10, 5, 10]
// Output: 5
arr1=[10,5,10]
let firstLar=0;
let SecLar=0;
for(let i = 0; i<arr1.length; i++){
    let curr1=arr1[i];
    if(firstLar<curr1){
        console.log('firstLar',firstLar,'SecLar',SecLar,'curr1',curr1)
        SecLar=firstLar;
        firstLar=curr1;
        console.log('firstLar',firstLar,'SecLar',SecLar,'curr1',curr1)
    }else if(SecLar<curr1){
        console.log('firstLar',firstLar,'SecLar',SecLar,'curr1',curr1)
        SecLar=curr1;
        console.log('firstLar',firstLar,'SecLar',SecLar,'curr1',curr1)
    }
}console.log('firstLar',firstLar,'SecLar',SecLar)
// Explanation: The largest element of the array is 10 and the second largest element is 5.

/**output:firstLar 0 SecLar 0 curr1 10
firstLar 10 SecLar 0 curr1 10
firstLar 10 SecLar 0 curr1 5
firstLar 10 SecLar 5 curr1 5
firstLar 10 SecLar 5 curr1 10
firstLar 10 SecLar 10 curr1 10
firstLar 10 SecLar 10
*/


// ex3
// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.

arr3 = [10, 10, 10]
let oneLar=0;
for(let i=0; i<arr.length; i++){
    let curr3=arr3[i]
    if(oneLar<curr3){
        console.log('oneLar',oneLar,'curr3',curr3)
        oneLar=curr3
        console.log('oneLar',oneLar)}
}
/**output:oneLar 0 curr3 10
            oneLar 10
*/