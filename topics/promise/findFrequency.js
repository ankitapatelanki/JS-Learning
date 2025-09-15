//Questions: Find Frequency of every no. present in an array ----------------
function findFrequencyOfEveryNoInArr(){
    let arr=[1,2,3,4,5,1,1,2,2,3,3,5,8,7,7,7,7,7]
    let obj={};
    for(let i=0; i<=arr.length-1; i++){
        if(obj.hasOwnProperty(arr[i]) ){
            obj[arr[i]] = obj[arr[i]]+1;
        }else{
            obj[arr[i]]= 0;
        }
    }
console.log("obj: ",obj)
/**OUTPUT:
obj:  { '1': 2, '2': 2, '3': 2, '4': 0, '5': 1, '7': 4, '8': 0 } */

for(key in obj){
    console.log(key,"->",obj[key])
    /** OUTPUT:1 -> 2
2 -> 2
3 -> 2
4 -> 0
5 -> 1
7 -> 4
8 -> 0 */
}
}

findFrequencyOfEveryNoInArr();



function removeDuplicateNumInArr(){
    let arr2=[1,2,3,4,5,1,1,2,2,3,3,5,8,7,7,7,7,7]
    let obj= {}
    for(let i=1; i<=arr2.length-1; i++){
        obj[arr2[i]]=0
        // if(obj.hasOwnProperty(arr2[i])){
        //     obj[arr2[i]]!==obj[arr2[i]]
            
        // }else{
        //     obj[arr2[i]]= 0;
        // }
    }
    // console.log(obj)
    let emptyArr=Object.keys(obj)
    // for(key in obj){
    //   console.log(key)
    //   emptyArr.push(key)
    // }
    return emptyArr
}
let result=removeDuplicateNumInArr()
      console.log(result)


