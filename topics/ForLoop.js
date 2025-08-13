let arr = [22,33,44,55,66,11];


// first : initial value or where we want to start our loop
// second : break condition;
// third: increament or decrement based on problem statement;
for(let i =0; i<arr.length;i++){  // 5<5
console.log("i--> ",i, arr[i])
i++;
i++;

}

let table = 8;
let endofdigit = 10;
// Exmaple of table formate:
// 3 * 1 = 3 
// 3 * 2 = 6
// 3 * 3 = 9


for(let i = 1; i<=endofdigit; i++){
    // console.log(table +" * "+ i +" = "+ table * i)
    let output = table* i;
    console.log(`${table} * ${i} = ${output}`)

}

// input : 20
// 1,3,5,7,9,11 (print this pattern using for loop)
// let start_number = 1;
// let end_of_number = 100;

// for(let i = 1; i<=end_of_number; i+= 2)console.log(i)
    

let start_number = 1;
let end_of_number = 100;

// for(let i = 0; i<end_of_number; i+= 2)console.log(i)


for(let i = 0; i<end_of_number; i++){ //2
    console.log(i+1) 
      i++; 
}





    

