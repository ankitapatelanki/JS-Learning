JavaScript Promises - A Complete Beginner’s Guide

### What is a Promise?
promise is an object that tells whether our asynchronous(like : db calls , api calls ,Axios call etc.) operation is completed or not
 
English:
A Promise in JavaScript is like a container for a future value. Imagine you're ordering food online — you place the order now, but the food will arrive later. Similarly, a Promise is a way to write asynchronous code, meaning code that runs now but finishes later.

Hinglish:
JavaScript mein Promise ek aisa container hai jo future mein aane wali value ko hold karta hai. Jaise aap online food order karte ho—order abhi karte ho, lekin khana baad mein aata hai. Waise hi, Promise se aap aisa code likh sakte ho jo abhi start hota hai, lekin result baad mein milta hai.

### Why Do We Need Promises?

English:
In older JavaScript, we used 'callbacks' to wait for tasks like API calls or file reading. But callbacks can get messy and hard to read. Promises make this easier and cleaner.

Hinglish:
Pehle JavaScript mein hum 'callbacks' ka use karte the jaise API call ya file read karne ke liye. Lekin callbacks se code bahut messy aur samajhne mein mushkil ho jata tha. Promises se yeh kaam asaan aur clean ho jata hai.

Basic Syntax of a Promise

English:
Let’s create a basic promise that either resolves or rejects based on a condition.

Hinglish:
Chalo ek basic promise banate hain jo condition ke hisaab se resolve ya reject hota hai.

Explanation:

English:

new Promise() creates a promise.
It takes a function with two parameters: resolve and reject.
If everything is okay, we call resolve() — this means the promise is successful.
If something fails, we call reject() — this means the promise failed.
Hinglish:

new Promise() se ek promise banta hai.
Isme ek function hota hai jisme do parameter hote hain: resolve aur reject.
Agar sab kuch sahi hai toh resolve() call karte hain—iska matlab promise successful hai.
Agar kuch galat ho gaya toh reject() call karte hain—iska matlab promise fail ho gaya.
Consuming a Promise (Using then & catch)

English:
Now that we created a promise, let’s see how to use it.

Hinglish:
Ab humne promise bana liya hai, toh dekhte hain kaise use karte hain.

Explanation:

English:

.then() runs when the promise is successful. 
.catch() runs when the promise fails.
This keeps our code neat and avoids deeply nested callbacks.
Hinglish:

.then() tab chalta hai jab promise successful ho jata hai.
.catch() tab chalta hai jab promise fail ho jata hai.
Isse code saaf aur simple rehta hai, aur callback ke andar callback nahi likhna padta.
Real-life Example with setTimeout

English:
Let’s simulate loading data from a server. We'll use setTimeout to mimic a delay.

Hinglish:
Chalo ek example lete hain jisme server se data load karna hai. Hum setTimeout ka use karenge delay dikhane ke liye.

Chaining Promises

English:
We can run multiple promises in a sequence using chaining. Each .then() waits for the previous one to complete.

Hinglish:
Hum ek ke baad ek multiple promises ko chain kar sakte hain. Har .then() pehle wale ke complete hone ka wait karta hai.

What is async/await?

English:
async/await is a modern and cleaner way to use promises. It looks like regular code but works with promises.

Hinglish:
async/await ek naya aur simple tareeka hai promises use karne ka. Yeh normal code ki tarah dikhta hai, lekin promises ke saath kaam karta hai.

Explanation:

English:

We mark the function with async so we can use await inside.
await pauses the function until the promise is complete.
It makes our code easier to read, especially when doing multiple async tasks.
Hinglish:

Function ko async likhte hain taki andar await use kar sakein.
await function ko rok deta hai jab tak promise complete nahi hota.
Isse code padhne mein asaan ho jata hai, especially jab multiple async kaam ho.
Error Handling in async/await

English:
We use try and catch blocks to handle errors with async/await.

Hinglish:
Async/await ke saath error handle karne ke liye hum try aur catch ka use karte hain.

Conclusion

English:
Promises are the foundation of handling asynchronous tasks in modern JavaScript. Understanding them is key to writing clean and efficient code. Practice by converting simple callback-based code to promises and then to async/await.

Hinglish:
Promises modern JavaScript mein asynchronous kaam handle karne ki basic cheez hai. Inhe samajhna zaroori hai taaki aap clean aur efficient code likh sako. Practice karo—pehle callback wale code ko promise mein badlo, phir async/await mein.