How many ways to create variable in js:

1. var  (global scope)
2. let  (block scope)
3. const (final) (block scope)

Scoping --> 


### Let's deep dive into Object in js:

let obj = {}
Def: Object is the collection of key value pairs; where each key and value is seperated by the colons;
object always contains unique key

How empty object look like: {}
1
1. How to add a property inside an object?

let person = {
    name:"Ankita",
}

if we want to add some property inside an object then we have to way:
1. Dot notation
2. Square Bracket notation

### How to add a key inside an object using dot notation ?
person.gender = "Female";
person.age = 23;

### How to add a key inside an object using Bracket notation ? 
person["hobby"] = ['cricket', 'reading books']

### How to remove key inside an object?
delete person.hobby;

 
## how to acceess key inside an object dynamically
let dynamicKey = "name"
console.log(person[dynamicKey])

### how to udpate key inside in object?
person.name = "Anki"




### ===================>> 
## Aisa kya hai browser ke pass jo js code ko run krta hai:- (What does the browser have that runs the JavaScript code:-)
Every browser have js Engine. which runs our js code.
like : 
a) chrome Js Engine Name  :  V8 engine 
b) Firefox Js Engine Name :  SpiderMonkey engine
c) Safari Js Engine Name  : JavaScriptCore engine
d) Microsoft edge Js Engine Name  : Chakra






