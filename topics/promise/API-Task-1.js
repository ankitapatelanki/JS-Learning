
async function fetchUserData(){
// base url: https://jsonplaceholder.typicode.com/users
let callApi = await fetch("https://jsonplaceholder.typicode.com/users")
let responseOfApi = await callApi.json()
return responseOfApi;
}
let userInfo= await fetchUserData()
// console.log('userInfo:',userInfo)


// Fetch Username and Email using id and return inside an Object:
// async function fetchUserInfo(id){
//     let userInfo= await fetchUserData()
//     for(let i=0; i<=userInfo.length-1; i++){
//         if(userInfo[i].id==id){
//             let obj ={};
//             let username= userInfo[i].username;
//             let email = userInfo[i].email;
//             obj[email] = email;
//             obj[username] = username
//             return obj; 
//         }
//     }
// }
// let result =await  fetchUserInfo(1);
// console.log(result ,"2")



// Fetch User address based on id
async function fetchUserAddress(id){
     let userAddr= await fetchUserData()
     for(let i=0; i<=userAddr.length-1; i++){
        if(userAddr[i].id==id){
          return userAddr[i].address;
        }
     }
}
let res= await fetchUserAddress(1)
// console.log("address:",res)

// Fetch name and username and return it in single string 
async function prepareNameUsernameCombo(id){
// "name + username" ram+jay = "ramjay"
let comboOfNameorUsername = await fetchUserData()
for(let i=0; i<=comboOfNameorUsername.length-1; i++){
    if(comboOfNameorUsername[i].id==id){
        return comboOfNameorUsername[i].name+ comboOfNameorUsername[i].username;
    }}
}
let out= await prepareNameUsernameCombo(1)
// console.log(out)


// fetch user company name based on id
async function fetchUserCompanyName(id){
    let companyName= await fetchUserData()
    for(let i=0; i<=companyName.length-1; i++){
        if(companyName[i].id==id){
            return companyName[i].company.name;
        }
    }
}
let userComName = await fetchUserCompanyName(1)
// console.log(userComName)

// return an Object {website:"" street:"", companyName: ""} based on id;
async function fetchCompanyDeatilsOfUser(id){
    let data= await fetchUserData()
    for(let i=0; i<=data.length-1; i++){
        if(data[i].id==id){
            let object={}
            let website= data[i].website;
            let street=data[i].address.street;
            let comNam=data[i].company.name;
            object[website]=website;
            object[street]=street;
            object[comNam]=comNam;
            return object;
        }
    }
}
let comDetail= await fetchCompanyDeatilsOfUser(1)
// console.log(comDetail)


// return an string of an address object which include street , suite, city, zipcode with an white space
// Ex : "Ellsworth Summit Suite 729 Aliyaview 45169"

async function formatedAddressStr(id){
    let getAdd=  await fetchUserData()
    for(let i=0; i<=getAdd.length-1; i++){
        if(getAdd[i].id==id){
            return`${getAdd[i].address.street} ${ getAdd[i].address.suite} ${getAdd[i].address.city} ${getAdd[i].address.zipcode}` 
        }
    }
}
let resultOfGetAdd= await formatedAddressStr(1)
console.log(resultOfGetAdd)

//  street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: [Object]
 

async function printFunctionOutput(id){
    
//    let userInfo =  await fetchUserInfo(id);
//    let userAddr =  await fetchUserAddress(id);
//    let nameUserNameCombo =  await prepareNameUsernameCombo(id);
//    let companyDetails =  await fetchCompanyDeatilsOfUser(id);
//    let formatedStr =  await formatedAddressStr(id);

//    console.log("userInfo: ", userInfo)
}
await printFunctionOutput(11);

