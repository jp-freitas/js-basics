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
- É um tipo de dado estrututral.
- Agrupar um bloco de código.
- Pode ou não receber parâmetros e argumentos.
- Sempre irá ter um retorno.
- Reutilização de código.
- Palavra reservada function para declarar uma função (function statement).
- A função só irá funcionar apartir do momento que for executada.
- EX:
```js
// Function Statement
function createPhrases() {
    console.log(`Estude mais`);
    console.log(`Estude mais`);
    console.log(`Estude mais`);
}

// Executing the function
createPhrases();
```
### Argument and Parameters
- Podemos declarar uma função dentro de uma variável.
- Utiliza-se o function expression.
- Funções possuem parâmentros que será o number1 e number2.

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

console.log(`O número 1 é: ${number1}`);
console.log(`O número 2 é: ${number2}`);
console.log(`A soma dos dois números é: ${sum(number1, number2)}`);
/* First Block - End */
/* Second Block - Start */
const sum = function(number1, number2) {
    let total = number1 + number2;
    return total;
}

let number1 = 34;
let number2 = 54;

console.log(`O número 1 é: ${number1}`);
console.log(`O número 2 é: ${number2}`);
console.log(`A soma dos dois números é: ${sum(number1, number2)}`);
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