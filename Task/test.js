let student1 = {
    name:'Ram',
    lastName: 'no',
    rollNumber: 2210,
    schoolName: "xyz",
    address: {
        pincode:2333
    }

}

delete student1.schoolName
console.log(student1)
 if("schoolName" in student1){
    console.log("yes")
 }
