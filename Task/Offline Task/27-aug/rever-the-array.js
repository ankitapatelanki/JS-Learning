let arr = [1,2,3,4,5];
// output: [5,4,3,2,1]
let arrOfReverse=[]
for(let i=arr.length-1; i>=0; i--){
    arrOfReverse.push(arr[i])
}console.log(arrOfReverse)


// 2 approach
let leftPoint=0;
let rightPoint=arr.length-1;
while(leftPoint<rightPoint){

    arr[leftPoint]=arr[leftPoint]+arr[rightPoint];

    arr[rightPoint]=arr[leftPoint]-arr[rightPoint];

    arr[leftPoint]=arr[leftPoint]-arr[rightPoint]

    leftPoint++;
    rightPoint--;
}    console.log('2',arr)
