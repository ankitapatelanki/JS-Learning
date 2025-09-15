let promise = new Promise((resolve, reject)=>{
 setTimeout(function(){
    let condition=false;
    if(!condition){
      resolve("Data resolved");
    }else{
      reject("Data rejected");
    }
  }, 1000);
      
})

// ================== Using await ============

async function consumePromise(){
    try {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    let data =  await promise;
    console.log(data)
    console.log("5");
    console.log("6");
    console.log("7");
    console.log("8");
    } catch (error) {
        console.log("Error:", error);
    }finally{
        console.log("Promise consumption finished.");
    }
    
}

consumePromise();