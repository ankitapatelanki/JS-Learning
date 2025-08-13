// let revArr =[11,12,13,14,15,16,17,18]
// output:[5,4,3,2,1]
// function reverse(arr){
//         let emptyArr=[];
//        for(let i=revArr.length-1; i>=0; i--){
//            emptyArr.push(revArr[i])
//         // console.log(revArr[i])
//         }

// // console.log(revArr)
//         console.log(emptyArr)
// }
// reverse()

let revArr =[11,12,13,14,15,16,17,18]
 function revArr1(arr){
      let emptyArr=[]
      for(let i=revArr.length-1; i>=0 ; i--){
            emptyArr.push(revArr[i])
      }console.log(emptyArr)
}
revArr1()

// 4. What does this code log?
// const arr = [1, 2, 3];
// arr[10] = 99;           //index start = 0
// console.log(arr.length);    //length start = 1

// 2.  Reverse words in a string
// Given a string str, find a way to reverse the order of the words in the given string.

// Note: str may contain leading or trailing dots(.) or multiple trailing dots(.) between two words. The returned string should only have a single dot(.) separating the words.

// Input: str = ”..geeks..for.geeks.”
// Output: str = “geeks.for.geeks”

// Input: str = "i.like.this.program.very.much"
// Output: str = "much.very.program.this.like.i"

// Input: str = "...home......" Output: str = "home"

// 📌 complete below function with complete logic
// let revrsStrRmvTrailDot1 = "i.like...this.program.very.much"
// function reverseStrRemoveTrailingDots(str){
//                 let reverseStrRemvTrailDots2 = ""
//                 for(char of revrsStrRmvTrailDot1){
//                   if(char !=='.'){
//                   reverseStrRemvTrailDots2 = char+reverseStrRemvTrailDots2
//                 }}
//                 console.log(reverseStrRemvTrailDots2)}
// reverseStrRemoveTrailingDots()

// Input: str = "i.like.this.program.very.much"
// Output: str = "much.very.program.this.like.i"

let revrsStr = "ilklklklkl.like.this.program.very.much";
function reverseString(str) {
  let newRevStr = "";
  let word = "";
  for (let i = revrsStr.length - 1; i >= 0; i--) {
    if (revrsStr[i] !== ".") {
      word = revrsStr[i] + word;
    }
    if (revrsStr[i] == "." || i == 0) {
      newRevStr = newRevStr + word;
      if (i !== 0) {
        // handle dot prob
        newRevStr += ".";
      }
      // or
      // if(i==0){
      //     newRevStr+=revrsStr[0]
      // }
      word = "";
    }
  }

  // last i=20
  //    h     = ''+h
  // last i = 19
  //      ch = c+h

  // }
  // console.log("'rvrs'",reverseStr1)
  console.log(newRevStr);
}
reverseString();













