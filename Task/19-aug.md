Q: Explain step-by-step what happens in the Memory Creation Phase
and Execution Phase of JavaScript.

English: In the memory creation phase, variables and functions are stored in memory
with default values (undefined for variables, full code for functions). In the execution
phase, JavaScript runs the code line by line and assigns actual values.

Hinglish: Memory Creation Phase mai variables ko undefined rakha jata hai aur
functions ka pura code memory mai store hota hai. Execution Phase mai line by line
code run hota hai aur actual values assign hoti hain.



Q: In your own words, describe the role of the Call Stack in JavaScript
execution. Why is it important?

English: The Call Stack keeps track of which function is currently running and which
functions are waiting to run. It is important because it manages function execution
order.
Hinglish: Call Stack batata hai abhi konsa function chal raha hai aur kaunse wait kar
rahe hain. Ye important hai kyunki ye execution ka order maintain karta hai.



Q: What happens internally when a function is called in JavaScript?
Write the process in detail.

English: When a function is called, a new Execution Context is created. It goes into the
Call Stack. When function finishes, it is removed (popped) from the stack.

Hinglish: Jab function call hota hai to ek naya Execution Context banta hai aur Call
Stack me push hota hai. Jab function complete hota hai to Call Stack se pop ho jata
hai.



Q: Why is the Global Execution Context always at the bottom of the
Call Stack? Explain with an example.

English: The Global Execution Context is the first one created and it never gets
removed until the program ends. That’s why it stays at the bottom.

Hinglish: Global Execution Context sabse pehle banta hai aur program khatam hone
tak remove nahi hota. Isiliye vo hamesha stack ke bottom me rehta hai.



Q: Describe how JavaScript manages multiple function calls using the
Call Stack. Give a real-world analogy.

English: JavaScript uses the Call Stack to run one function at a time. When a new
function is called, it goes on top of the stack. After finishing, it is removed. Like
stacking plates, last in is first out.
Hinglish: JavaScript ek time me ek hi function run karta hai. Naya function aata hai to
stack ke top pe jata hai aur complete hone par nikal jata hai. Jaise plate stack karte
hain - jo last mai rakhte hain vo pehle uthta hai.
Q: What is a Stack Overflow error in JavaScript? When does it occur?
Explain with an example.
English: A Stack Overflow error happens when functions keep calling themselves and
the stack becomes full. Example: infinite recursion without a base case.
Hinglish: Stack Overflow tab hota hai jab function bar-bar khud ko call kare aur stack
bhar jaye. Example: agar recursive function me stop condition na ho.
Q: Differentiate between Execution Context and Call Stack. How are
they related?
English: Execution Context is the environment where code runs. Call Stack is the
place where all contexts are managed. The stack organizes these contexts in order.
Hinglish: Execution Context wo environment hai jaha code run hota hai. Call Stack ek
jagah hai jaha saare context manage hote hain. Stack inhe order mai rakhta hai.
Q: Explain with an example how JavaScript pushes and pops
Execution Contexts on the Call Stack.
English: When a function is called, its context is pushed on the stack. When it finishes,
it is popped out. Example: main() calls a(), then a() calls b(). Order: [main → a → b],
then b pops, then a pops.
Hinglish: Jab function call hota hai to context stack me push hota hai. Jab complete
hota hai to pop ho jata hai. Example: main() se a() call, fir a() se b(). Order: [main → a
→ b], fir b pop, fir a pop.
Q: In your words, why is understanding the Call Stack important for
debugging JavaScript code?
English: Understanding the Call Stack helps us know the order of function calls and
find where an error happened. Debuggers also show the stack trace using this.

Hinglish: Call Stack samajhne se hume pata chalta hai kis order me functions call
huye aur error kahan aaya. Debugger bhi stack trace isi wajah se dikhata hai.
Q: Imagine you are teaching a beginner — how would you explain the
concept of Execution Context and Call Stack in the simplest way?
English: Execution Context is like a room where your code runs. Call Stack is like a
pile of rooms arranged in order. JavaScript enters one room, finishes work, and then
goes back.
Hinglish: Execution Context ek kamra hai jaha code chalta hai. Call Stack ek pile hai
jisme ye kamre stacked hote hain. JavaScript ek kamre me jata hai, kaam karta hai
aur fir bahar nikalta hai.









Q1. Explain step-by-step what happens in the Memory Creation Phase and Execution Phase of JavaScript.
*
JS code runs, the execution context is created  it have contain of two phases:
1- Memory Creation Phase ----
a-In this phase the JS only take a memory.
b-Functions are stored in full memory.
c-Variables are stored in memory but value remains undefined.

2.Code Execution Phase ----
a-the code starts running line by line.
b-Functions are call for a new function execution context is created  and again these two phases are followed(memory creation phase +code execution phase)
Q2. In your own words, describe the role of the Call Stack in JavaScript execution. Why is it important?
*
when a function is called its execution context is pushed on the top of the call stack. 
when the function is complete its context is popped and removed  ,And JS always execute the top function first

Why is it important?
the code is running in the correct order(line by line , synchronous execution). When the function finish, JS knows where to return
Q3. What happens internally when a function is called in JavaScript? Write the process in detail.
*
1-When we call a function
then JavaScript is created the box only for this function.
2-inside the box :function parameter and variable.
3-The box is pushed on the Call Stack.
4-the code is run line by line  .
5- The value is return when the function is finish .
6-then box is removed from the call stack.
Q4. Why is the Global Execution Context always at the bottom of the Call Stack? Explain with an example.
*
Whenever a JavaScript program starts, the Global Execution Context (GEC) is first created. After this, for every function call, new Execution Contexts are placed higher and higher in the stack.
But Global Execution Context is never removed until the entire program end.
Q5. Describe how JavaScript manages multiple function calls using the Call Stack. Give a real-world analogy.
*
JavaScript has only one main single-threaded.

Call Stack  keep which function is running and what  run it next.

when a function is called its execution context is pushed on the top of the call stack. 

when the function is complete its context is popped and removed  from the top of call stack.

JS always runs the top function first
Q6. What is a Stack Overflow error in JavaScript? When does it occur? Explain with an example.
*
sorry i don't get it.
Q7. Differentiate between Execution Context and Call Stack. How are they related?
*
Execution Context -
it's means a box where JS code is run.
When you call a function, JavaScript creates a new Execution Context .

call stack--
when a function is called its execution context is pushed on the top of the call stack. 
when the function is complete its context is popped and removed  ,And JS always execute the top function first

Q8. Explain with an example how JavaScript pushes and pops Execution Contexts on the Call Stack.
*
sorry i don't get it.
Q9. In your words, why is understanding the Call Stack important for debugging JavaScript code?
*
sorry i don't get it.
Q10. Imagine you are teaching a beginner — how would you explain the concept of Execution Context and Call Stack in the simplest way?
*
sorry i don't get it.
