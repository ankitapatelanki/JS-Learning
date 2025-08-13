
//   charAt(): 
//  * Def: The charAt() method returns the character at a specified index (position) in a string:

//   English: The charAt function returns the character at a specified index in a string. If the index is out of range, it returns an empty string.
//  Hinglish: CharAt function ek string mein diye gaye index par character return karta hai. Agar index range se bahar hai, to yeh khali string return karta hai.
//   Example:

  let string11 = "Hello, World!";
  console.log(string11.charAt(0)); // "H"
 console.log(string11.charAt(7)); // "W"
 console.log(string11.charAt(20)); // ""
//  * 
//  * 
//  * 
//  * 
//  * 
//  * The charCodeAt() method returns the code of the character at a specified index in a string:
//  * The method returns a UTF-16 code (an integer between 0 and 65535).hinglish: CharCodeAt function ek string mein diye gaye index par character ka code return karta hai. Yeh UTF-16 code (0 se 65535 ke beech ka integer) return karta hai. 
//  * Example:

  let string12 = "Hello, World!";
  console.log(string12.charCodeAt(0)); // 72
  console.log(string12.charCodeAt(7)); // 87
  console.log(string12.charCodeAt(13)); // NaN

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)











let text = "Nexon, Safari, Tata";
let part = text.slice(7, 13);
console.log(part); // "Safari"
// If you omit the second parameter, the method will slice out the rest of the string:






// let text = "Nexon, Safari, Tata";
// let part = text.slice(7);
// If a parameter is negative, the position is counted from the end of the string:





// let text = "Nexon, Safari, Tata";;
// let part = text.slice(-12);










// substring()
// subStr();
// trim();










//===================>> 🔥 charAt() 🔥  <<=======================================
let string1 = ""

 





//===================>>🔥 charCodeAt() 🔥 <<====================================










//===================>>🔥 slice() 🔥 <<====================================