// Higher-order functions:
// English: A higher order function is a function that can take another function as an argument or return a function as its result. Examples are map, filter, every and some.


// Hinglish: Higher order function wo hota hai jo kisi dusre function ko argument ke roop mein le sakta hai ya function ko return kar sakta hai. Jaise map, filter, every, and some.
//  such as map, filter, every, and some,
//are functions that do not modify the existing array but return a new
//array or value. They either take a function as an argument or return
//a function as a result.


 function print(fn){
  console.log(fn)
 }

 function hello(){
   console.log("hello 123");
 }

console.log(hello)
print(hello)  
