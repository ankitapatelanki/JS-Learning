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




 let arr =[1,2,3,4,5];

//  1st approach-----------

//  arr.reverse()
//  console.log(arr)
 
// 2nd approach------------

let emptyArr=[]
for(let i=arr.length-1; i>0; i--){
    emptyArr.push(arr[i])
}
console.log("emptyArr",emptyArr)

// 3rd approach-----------
let 