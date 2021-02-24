## Variables
- Symbolic names to receive some value.
- Identifiers.
- Three reserved words to create a variable:
    * var
    * let
    * const

### Var Scope
- Var Scope - The scope determines the visibility of a variable in JS.
- Block Statement - Where we put some code:
```js
{
 //This is a block, and inside here we put some codes
}
```
- The block will also create a new escope.
- The word VAR is global and local.
- Hoisting - JS takes the variable, removes it from the scope, but without the value, and puts it on top of the entire code and then assigns the value to it.

### Let and Const Scope
- The word LET and CONST are local and work only within the scope.

### Dynamic Types
- JS is a weakly typed language.

### Variable names
- JS is case sensitive.
- JS accepts the unicode string.
- Can:
    * Starts with these special characters: $, _;
    * Start with letters;
    * Place accents;
    * Uppercase and lowercase letters make a difference;
- Can't:
    * Start with number;
    * Put empty spaces in the name;
- Ideal:
    * Create names that make sense;
    * Explain what the variables does or is;
    * camelCase;
    * snake_case;
    * write in english;

## Functions
- It is a type os data structure.
- Grouping a block code.
- May or may not receive parameters and arguments.
- Always will be have a return.
- Code reuse.
- Function keyword to declare a function (function statement).
- The function will only work from the moment it is executed.
- EX:
```js
// Function Statement
function createPhrases() {
    console.log(`Study more`);
    console.log(`Study more`);
    console.log(`Study more`);
}

// Executing the function
createPhrases();
```
### Argument and Parameters
- We can declare a function inside a variable.
- Function expression is used.
- Functions have parameters it will be the number1 and number2.

```js
// Function statement with parameters
const sum = function(number1, number2) {
    console.log(number1 + number2);
}
// Executing the function with arguments
sum(4, 6);
```

### Returning values inside the function statement
- When the function has a return, the execution will stop on the return.
- Execute the above example:
    * 1 - Comment the second block and execute the code;
    * 2 - Remove the comment of the second block and comment the first block and execute the code;
```js
/* First Block - Start */
const sum = function(number1, number2) {
    console.log(number1 + number2);
}

let number1 = 34;
let number2 = 54;

console.log(`The number 1 is: ${number1}`);
console.log(`The number 2 is: ${number2}`);
console.log(`The sum of both numbers is: ${sum(number1, number2)}`);
/* First Block - End */
/* Second Block - Start */
const sum = function(number1, number2) {
    let total = number1 + number2;
    return total;
}

let number1 = 34;
let number2 = 54;

console.log(`The number 1 is: ${number1}`);
console.log(`The number 2 is: ${number2}`);
console.log(`The sum of both numbers is: ${sum(number1, number2)}`);
/* Second Block - End */
```
### Function Scope
- A new scope will be created when the function has a parameter in the function statement.
- This occurs when we have a same variable, outside and inside the function statement.

```js
let subject = 'create video';

function createThink(subject) {
    subject = 'study';
    return subject;
}

console.log(createThink(subject));
console.log(subject);
```
### Function Hoisting
- A function statement will not be hoisting.
- A function expression will be hoisting.

### Arrow Function
- Is a function expression.
```js
const sayMyName = (name) => {
    console.log(name);
}

sayMyName('João Pedro');
```
### Callback Function
- It is a function that receive a function as a parameter.

```js
function sayMyName(name) {
    console.log('Before callback');
    name()
    console.log('After callback');
}

sayMyName(
    () => {
        console.log('Inside a callback function');
    }
);
```
### Construct Functions
- Expression new, it will turn the function in a construct function.
- Automatically will create a new obejct.
- Use of this.

```js
function Person(name) {
    this.name = name;
}

const user1 = new Person("João");

console.log(user1);
```

## Manipulating data
### Prototype
- JS is a prototype-based language.
- Some functionalities in JS is in a prototype chain.
- Most data types in JS are encapsulated by an object.

### Type Conversion X Type Coersion
- Alters a data type to other type data.
- Type conversion or typecasting will alter a data type to other type.
- Type coersion it will be the JS forcing the change of data type.
- Sometimes the JS will use the typecasting to convert data type.

### Manipulating some data
```js
// Transform string into number and number into string
let string = "123";
console.log(Number(string));

let number = 321;
console.log(Number(number));

// Counting characters and couting numbers
let word = "Paralelepipedo";
console.log(word.length);
let number = 1234;
// Transforming the number into string to see the length of this number.
console.log(String(number.length));

// Transform a float number into a float number with two decimal places and replace the period with a comma.
let number = 345.334455;
// Two decimal places
let numberFixed = number.toFixed(2);
// Replace the period with a comma
let numberComma = numbeFixed.replace(".", ",");
console.log(numberComma);

// Make lowercase letters uppercase and vice versa.
let word = "Development is cool";
let wordUpperCase = word.toUpperCase();
let wordLowerCase = word.toLowerCase();
console.log(`${wordUpperCase}, ${wordLowerCase}`);

// Check if the text contains a certain word.
let phrase = "I want to live";
let checkWord = phrase.includes("want");
console.log(checkWord);

// Create a phrase
let phrase = "I want to live";
// Array where each word is a index of an array.
let myArray = phrase.split(" ");
// Transform the array into a phrase and where spaces were, put underscore.
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore);

// Create an Array with a constructor
let myArray = new Array("Love", "Peace");
console.log(myArray);

// Counting elements of an array
let simpleArray = ['a', 'b', 'c'];
console.log(simpleArray.length);

// Transform a chain of characters into array
let word = "love";
console.log(Array.from(word));

// Manipulating Arrays
let techs = ["html", "css", "js", "php", "java"];

// Adding a item in the last index of array
techs.push("nodejs");
console.log(techs);

// Adding a item in the firt index of array
techs.unshift("sql");
console.log(techs);

// Remove a item from the end of array
techs.pop();
console.log(techs);

// Remove a item from the start of array
techs.shift();
console.log(techs);

// Take some elements from the array
techs.slice(1,3);
console.log(techs);

// Remove some items of any index from the array
techs.splice(2);
console.log(techs);

// Found the index of an element from the array
let index = techs.indexOf('css');
console.log(index);

```
## Expressions and Operators
- Expression is a line of code that does anything in JS.
- It doesn't have to end with ;.
```js
// Example of an expression.
let number = 1;
```
### New Expression
- left-hand-side expression.
- Create a new object.

### Unary Operators
- typeof
- delete

### Arithmetic Operators
```js
// Multiplication
console.log(15.4 * 8.45);

// Division
console.log(34 / 6);

// Sum
console.log(25 + 25);

// Subtraction
console.log(34 - 7);

// Remainder
let remainder
remainder = 11 % 9
console.log(remainder);

// Increment
let increment = 0
++increment;
console.log(increment);

// Decrement
let decrement = 0;
--decrement;
console.log(decrement);

// Exponential
console.log(3 ** 3);
```
### Grouping operator
```js
// The correct order in Math
let total = 3 + 2 * 5;
console.log(total);

// Grouping operator changes the order
let total1 = (3 + 2) * 5;
console.log(total);
```
### Comparison Operators
- It will be compare value and return a boolean as a response of that comparison.
```js
let one = 1;
let two = 2;

// ==  equal
console.log(one == 1);
console.log(two == 2);

// !=  diferente
console.log(one != two);
console.log(one != 1);
console.log(two != 2);
console.log(one != "1");
console.log(two != "2");

// === estritamente igual
console.log(one === "1");
console.log(one === 1);
console.log(two === 2);

// !== estritamente diferente
console.log(one !== two );
console.log(two !== one );

// >   maior
console.log(one > two);

// >=  maior igual
console.log(two >= one);

// <   menor
console.log(one < two);

// <=  menor igual
console.log(one <= two);

```
### Assignment Operators
```js
// Assignment
a = 1;
console.log(a);

// Addition Assignment
a += 2;
console.log(a);

// Subtraction Assignment
a -= 1;
console.log(a);

// Multiplication Assignment
a *= 2;
console.log(a);

// Division Assignment
a /= 2;
console.log(a);

// Remainder
a %= 2;
console.log(a);

// Exponetiation
a **= 2;
console.log(a);
 
```
### Logical Operators
- Boolean values.
- Return of verification is true or false.
- AND &&: Both statements must be true for the verification return to be true.
- OR ||: One of the statements must be true for the verification to return true.
- NOT !: Variable value will be negated, if the value is true, using the operator will be false
```js
let bread = true;
let cheese = true;

// AND &&
console.log(bread && cheese); // true

// OR ||
console.log(bread || cheese); // true

// NOT !
console.log(!bread); // false
```
### Ternary Operator
- Depending on the condition that is passed, we will receive different values.
```js
let bread = true;
let cheese = true;
const niceBreakfast = bread && cheese ? 'Nice Breakfast' : 'Bad Breakfast';
console.log(`bread = true AND cheese = true -> ${niceBreakfast}`);

let bread = true;
let cheese = false;
const niceBreakfast = bread && cheese ? 'Nice Breakfast' : 'Bad Breakfast';
console.log(`bread = true AND cheese = false -> ${niceBreakfast}`);

let bread = true;
let cheese = false;
const niceBreakfast = bread || cheese ? 'Nice Breakfast' : 'Bad Breakfast';
console.log(`bread = true OR cheese = false -> ${niceBreakfast}`);

let bread = false;
let cheese = true;
const niceBreakfast = bread || cheese ? 'Nice Breakfast' : 'Bad Breakfast';
console.log(`bread = true OR cheese = false -> ${niceBreakfast}`);

let age = 16;
const canDrive = age >= 18 ? 'can drive' : "can't drive";
console.log(`age = 16 ${canDrive}`);

let age = 18;
const canDrive = age >= 18 ? 'can drive' : "can't drive";
console.log(`age = 18 ${canDrive}`);
```

### String Operators
- Returns the union of two strings.
- Concatenation.
```js
let alpha = 'alpha'
console.log(alpha + ' bet' + ' gamma');
```
### Falsy & Truthy
- When a value is considerated false in contexts where a boolean is required. - FALSY
```js
// false
console.log(false ? 'true' : 'false');

// 0
console.log(0 ? 'true' : 'false');

// -0
console.log(-0 ? 'true' : 'false');

// ""
console.log("" ? 'true' : 'false');

// null
console.log(null ? 'true' : 'false');

// undefined
console.log(undefined ? 'true' : 'false');

// NaN
console.log(NaN ? 'true' : 'false');

```
- When a value is considerated true in contexts where a boolean is required. - Truthy
```js
// true
console.log(true ? 'true' : 'false');

// {}
console.log({} ? 'true' : 'false');

// []
console.log([] ? 'true' : 'false');

// 1
console.log(1 ? 'true' : 'false');

// 3.456
console.log(3.456 ? 'true' : 'false');

// "0"
console.log("0" ? 'true' : 'false');

// "false"
console.log("false" ? 'true' : 'false');

// -1
console.log(-1 ? 'true' : 'false');

// Infinity
console.log(Infinity ? 'true' : 'false');

// -Infinity
console.log(-Infinity ? 'true' : 'false');

```
### Operator Precedence
_ Order from most importante to least important:
- Grouping                          = ()
- Denial, increment and decrement   = ! ++ --
- Multiplication and Division       = * /
- Addition and Subtraction          = + - 
- Relational                        = < <= > >=
- Equality                          = == != === !==
- AND                               = &&
- OR                                = ||
- Conditional                       = ? :
- Assignment                        = = += -= *=

## Conditional and control flow
### If and Else
- Transform the condition into variables.
- Accept values Truthy and Falsy.

```js
let temperature = 36.5

let higherTemperature = temperature >= 37.5;

let mildTemperature = temperature < 37.5 && temperature >= 37;

if (higherTemperature) {
    console.log(`${temperature} - High Fever`);
} else if (mildTemperature) {
    console.log(`${temperature} - Mild Fever`);
} else {
    console.log(`${temperature} - Normal`);
}

```