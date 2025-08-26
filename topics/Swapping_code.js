// Swapping Code //

// Swapping Two number without using third  variable :
let a= 10;
let b= 20;
// make a=20 and b=10

a=a+b;

console.log(a)//a=30    this is not complete 
b=a-b;
console.log(b)//b=10
a=a-b;
console.log(a)// finally we get a= 20 



// swapping two no. using third variable :
let x = 30;
let y=40;
// using third variable make x=40 and y= 30
let z = x;
console.log("z",z)  //z= 30
x = y;
console.log(x)  // x= 40
y = z;
console.log(y)     //y=30




// Reverse Array using Two Pointer algorithm


let arr1 = [1, 2, 3, 4, 5];

let leftPointer = 0;
let rightPointer = arr1.length - 1;


while (leftPointer < rightPointer) {
  // Logic
  arr1[leftPointer] = arr1[leftPointer] + arr1[rightPointer];
  arr1[rightPointer] = arr1[leftPointer] - arr1[rightPointer];
  arr1[leftPointer] = arr1[leftPointer] - arr1[rightPointer];

  leftPointer++;
  rightPointer--;
}

console.log("arr1", arr1); // [5, 4, 3, 2, 1] 