✅ Primitive Data Types

Primitive types are basic, immutable, and stored by value.

| Data Type     | Definition                                                  | Example                           |
| ------------- | ----------------------------------------------------------- | --------------------------------- |
| **String**    | Represents a sequence of characters. Used for text.         | `"Hello"`, `'World'`, \`Hi\`      |
| **Number**    | Represents numeric values (integers or floats).             | `42`, `3.14`, `-7`                |
| **BigInt**    | Represents large integers beyond the `Number` limit.        | `123456789012345678901234567890n` |
| **Boolean**   | Represents logical values: `true` or `false`.               | `true`, `false`                   |
| **Undefined** | A variable that has been declared but not assigned a value. | `let x; // x is undefined`        |
| **Null**      | Represents the intentional absence of any value.            | `let y = null;`                   |
| **Symbol**    | Represents a unique identifier. Often used as object keys.  | `Symbol("id")`                    |


🔁 Non-Primitive (Reference) Data Types

These types are complex, mutable, and stored by reference.

| Data Type    | Definition                                                          Example    

| **Object**   | A collection of key-value pairs. Can hold various data types. | `{ name: "Alice", age: 25 }`        |
| **Array**    | A special type of object for ordered collections (indexed).   | `[1, 2, 3]`                         |
| **Function** | A block of code designed to perform a task.                   | `function greet() { return "Hi"; }` |
| **Date**     | Represents date and time values.                              | `new Date()`                        |
| **RegExp**   | Represents regular expressions.                               | `/abc/`                             |
| **Map**      | A collection of key-value pairs with ordered keys.            | `new Map()`                         |
| **Set**      | A collection of unique values.                                | `new Set([1,2,3])`                  |

🧪 How to Check Data Type

You can use the typeof operator:
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof null        // "object" ← (JavaScript bug)
typeof undefined   // "undefined"
typeof {}          // "object"
typeof []          // "object"
typeof function(){} // "function"
