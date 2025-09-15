// let p1 = new Promise((resolve, reject) => {
//     console.log('Promise started');
//     // Do something asynchronous
//    setTimeout(
//     () => {
//        console.log("Settimeout done!");
//        resolve();
//    }, 2000);

// });

// p1
// .then(()=>{
//     console.log("Promise resolved!");
// })
// .catch((error)=>{
//     console.log("Erro
// r:", error);
// });



// let p2 = new Promise((resolve, reject) => {
//     console.log('Promise started');
//     // Do something asynchronous
//     let meetingDone = true;
//     if(meetingDone){
//         resolve();
//     }
//     else{
//         reject("Meeting not done");
//     }

// });

// p2
// .then(()=>{
//     console.log("Promise resolved!");
// })
// .catch((error)=>{
//     console.log("Error:", error);
// });



let p3 = new Promise((resolve, reject) => {
    console.log('Promise started');
    // Do something asynchronous
   setTimeout(
    () => {
       console.log("Settimeout done!");
      let error = false;
      if(!error){
        let user= {
            userName: "Ankita",
            age: 23,
            message: "Ahaaa meri jaan Ankita ❤️ 😂"
        }
        resolve(user);
      }else{
        reject("Some error occurred");
      }

   }, 5000);

});

p3
.then((data)=>{
    console.log("User Data:", data);
    return data.message;
}).then((msg)=>{
    console.log("User Message:", msg);
    return msg+" Updated...";
})
.then((updatedMessage)=>{
    console.log("User Updated Message:", updatedMessage);
})
.catch((error)=>{
    console.log("Error:", error);
}).finally(()=>{
    console.log("Promise chain completed");
});




let promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Hello! World");
    let condition = true;
    if(condition){
        let person = {
        name: "Ankita Patel",
        age:21,
        gender:"female",
        dob:"25/12/2003",
        add:"orai(jalaun)",
        msg:"Are , you ready👉👉👉🙂"
        }
        resolve(person)
    }else if(!condition){
        reject("Condition not match")
    }
  },1000)
})


let msg = "Hello! World";   
promise
.then((resolveData) =>{
    console.log("Data resolve:",resolveData)
    return resolveData.msg+"data resolved";
}).then((message)=>{
    console.log("Message:",message);
}).catch((error)=>{
    console.log("Error:",error)
})