JavaScript - 22:   JavaScript Execution Context -2   🤞🏻🔥
How JavaScript Code is executed? & Call Stack - answer the following questions.

Q1. What are the two main phases during execution context creation?

Memory creation phase & Code execution phase
Compilation phase & Runtime phase
Parsing phase & Optimization phase
Loading phase & Execution phase
Q2. During the memory creation phase, what does JavaScript assign to variables?

Actual values
null
undefined
0
Q3. What happens when a function is invoked?

A new execution context is created
The global context is overwritten
The call stack is cleared
The function executes in the same context only
Q4. Which of the following is NOT another name for the Call Stack?

Execution Context Stack
Control Stack
Program Stack
Heap Stack
Q5. What does the call stack manage?

Function execution order
Variable allocation
Memory garbage collection
Event loop
Q6. What happens when a function finishes execution?

Its execution context is removed from the call stack
It stays forever in the call stack
The global context is deleted
Memory is reset
Q7. Which phrase correctly describes execution flow?

Global context → Function context(s) → Return to global
Function context → Global context → Return to function
Only global context is ever used
Contexts are executed out of order
Q8. True or False: JavaScript handles function calls by pushing and popping contexts on the call stack.

True
False
Q9. If a function calls another function, what happens?

A new execution context is created and pushed on top of the stack
The previous function is deleted immediately
Both functions share the same context
The call stack is ignored
Q10. What is always at the bottom of the call stack?

Last called function
Global execution context
First function executed
Event loop
Q11. What error occurs if the call stack grows beyond its limit?

ReferenceError
SyntaxError
RangeError: Maximum call stack size exceeded
TypeError
Q12. Which example would cause a stack overflow?

A function calling itself recursively without a base condition
A function returning a simple value
A function calling another function once
A variable declaration without initialization