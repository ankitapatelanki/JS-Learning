

// async function asyncFunction() {
    // fetch data from an API
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data =   await response.json();
//     console.log(data);

    
// }

// asyncFunction();




async function getAllUsersIdsBlogs(){
      let enterUserId = 1;
    let getBlogs = await fetch("https://jsonplaceholder.typicode.com/todos");
    let getBlog = await getBlogs.json();
    for(let i=0; i<getBlog.length; i++){
        if(getBlog[i].userId === enterUserId){
            return getBlog[i];
//             console.log(getBlog[i]);
        }
    }
}
let result1 = await getAllUsersIdsBlogs(); 
console.log(result1);





// async function getBlogId(){
//     let enterId = 2;
//     let getBlogs2 = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let getBlog2 = await getBlogs2.json();
//     for(let i=0; i<getBlog2.length; i++){
//         if(getBlog2[i].id === enterId){
//             return getBlog2[i];
//     // console.log(getBlog2[i]);
//         }
//     }
// }
// let result = await getBlogId();
// console.log(result)






// async function getTotalNoOfBlogs() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();
//     let CountOfBlogs = 0;
//     for (let i = 0; i < data.length; i++) {
//         CountOfBlogs++;    }
//     return CountOfBlogs;
// }

// let totalBlogs = await getTotalNoOfBlogs();
// console.log(totalBlogs);





// async function getReturnTitle() {
//     let enterId = 22;
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();
//     // console.log(data);
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].id === enterId) {
//             return `your id is ${data[i].id} and title is ${data[i].title}`;
//         }
//     }
// }
// let result = await getReturnTitle();
// console.log(result);