// ================================>> 🔥for-in loop <<==========================
// for-in-javaScript:
// The for-in loop is used to iterate over the enumerable properties of an object.
// It allows you to loop through the keys of an object, making it useful for accessing properties dynamically.
// hinglish: for-in loop ka istemal object ke properties ko iterate karne ke liye hota hai.
// Ye aapko object ke keys ke through loop karne ki suvidha deta hai, jo properties ko dynamically access karne ke liye upyogi hai.

// example of for-in loop with an object:
let person1 = {
    name: "Ankita Patel",
    age: 23,
    gender: "F",
    address: {
        city: "Delhi",
        pincode: 110001
    }
}
person1["hobbies"] = ["Reading", "Traveling", "Cooking"];
person1["isMarried"] = false;

for (let key in person1) {
    console.log(key + " : " + person1[key]);
}
// Output:name : Ankita Patel
// age : 23
// gender : F
// address : [object Object]
// hobbies : Reading,Traveling,Cooking
// isMarried : false

let person = {
    name: "Ankita Gupta",
    age : 23,
    gender:"F",
    husbandName: "Sky Gupta",
    pincode:10037
}

person.marriageDate = "13 July 2024"
person["babyBoy"] = "Ansh"
person["babyGirl"] = "Anshika"

for(key in person){

    // if(key == "gender" && person[key].toLowerCase() == "f"){   // gender == gender && "F" == "F"
    //     console.log(key ,":","Female")
    // }else if(key == "gender" && person[key].toLowerCase() == "m"){
    //     console.log(key ,":","Male")

    // }
    // else{
    //     console.log(key +" : "+person[key]);
    // }



    // if(key == "gender")
    //     person[key].toLowerCase() == "f" ? console.log(key ,":","Female") : console.log(key ,":","Male")
    // else
    // console.log(key +" : "+person[key]);
    

    // Now we want to update gender key in an object - 
    if(key == "gender")
      person[key] =   person[key].toLowerCase() == "f" ?  "Female" :  "Male"
    
    console.log(key +" : "+person[key]);

}
