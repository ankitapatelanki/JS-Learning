
async function asyncFunction() {
    // fetch data from an API
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data =   await response.json();
    console.log(data);
   
}

asyncFunction();


function printDataUsingPromise(data) {
    let response = fetch("https://jsonplaceholder.typicode.com/todos/3");
    response.then(res => res.json()).then(data => console.log(data));

 
}
