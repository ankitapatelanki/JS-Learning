// maths.max
// Math.abs(x): Returns the absolute value of x
// example:
// Math.sqrt(x): Returns the square root of x.
// Math.cbrt(x): Returns the cube root of x.
// Math.pow(base, exponent): Returns base raised to the power of exponent.

// Math.floor(x): Rounds x down to the nearest integer.
// Math.ceil(x): Rounds x up to the nearest integer.


let value = Math.max(...[0, 180, 130, 200, 38]);
console.log(value)


let value2 = Math.max(0, 180, 130, 200, 38);
console.log(value2)



// Math.min
let value1 = Math.min(0, 180, 130, 200, 38);
console.log(value1)

let value3= Math.abs(-14545,5-75757);
console.log("abs",value3)

let value4 = Math.sqrt(36);
console.log("sqrt",value4);

let value5 = Math.cbrt(8);
console.log("cbrt",value5);

let value6 = Math.pow(2, 5);
console.log("pow",value6);

let value7 = Math.floor(5.55);
console.log("floor",value7);

let value8 = Math.ceil(89.00);
console.log("ceil",value8);


let str = "string"
console.log(str.split('').reverse().join(''))
// split = 