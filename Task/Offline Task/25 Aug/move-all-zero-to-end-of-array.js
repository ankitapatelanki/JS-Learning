// Move all Zeros to End of Array
// Given an array of integers arr[], move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.
// Examples: 
// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0,1]
// Output: [1, 2  , 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.


arr = [1, 2, 0, 4, 3, 0, 5, 0,1]
let nonZeroIndex = 0;

for (let i=0; i<arr.length; i++) {
    if (arr[i]!==0) {
    let temp = arr[nonZeroIndex];
    arr[nonZeroIndex] = arr[i];
    arr[i] = temp;
        nonZeroIndex++;
    }
}

console.log(arr);


// Input: arr[] = [10, 20, 30]
// Output: [10, 20, 30]
// Explanation: No change in array as there are no 0s.

// Input: arr[] = [0, 0]
// Output: [0, 0]
// Explanation: No change in array as there are all 0s.