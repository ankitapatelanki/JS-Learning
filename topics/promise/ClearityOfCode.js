// let apiData = null;
async function fetchUserData(){

    try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
    } catch (error) {
        throw error;
    }

}

// let result = await apiCall();

 async function getUsernameById(id){
    let apiResponse = await fetchUserData();
    for(let i = 0;i<=apiResponse.length-1;i++){
        if(apiResponse[i].id == id){
            return apiResponse[i].username;
        }
    }

}

let username = await getUsernameById(3)
console.log('username', username)
// out: {username: "", email:""}

// Fetch Username and Email using id and return inside an Object:

// function fetchUserInfo(){

// }