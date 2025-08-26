console.log("one");

// const sum = (a,b)=>{
//  console.log("SetTimeout Executed....")
// }

// setTimeout(sum,1000) // 1000ms = 1 sec
setTimeout(() => {
console.log("SetTimeout Executed 5....")
}, 5000);

setTimeout(() => {
console.log("SetTimeout Executed 2....")
}, 2000);
setTimeout(() => {
console.log("SetTimeout Executed 1....")
}, 1000);
setTimeout(() => {
console.log("SetTimeout Executed 3....")
}, 3000);
setTimeout(() => {
console.log("SetTimeout Executed 4....")
}, 4000);




fetch("https://api.github.com/users/akashguptasky").then((res)=>{
console.log("data: ", res.json())
}).catch((error)=>{
    console.log(error)
})



console.log("Code End");



