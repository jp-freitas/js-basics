/**
 * Let & Const Scope - The scope determines the visibility of a variable in JS
 * 
 * Block Statement - Where we put some code:
 * {
 *  This is a block, and inside here we put some codes
 * }
 * 
 * The block will also create a new escope
 */


/**
 * The word LET and CONST are local and work only within the scope
 * Hoisting - JS takes the variable, removes it from the scope, but without the value, and puts it on top of the entire code and then assigns the value to it.
 */

// console.log(`Exists the X variable before block statement? ${x}`); the variable was not defined

{
    let x = "Inside the block statement"
    console.log(x);
}

// console.log(`Exists the X variable after block statement? ${x}`); the variable was not defined

/**
 * I will declare the variable Y with let and outside of scope and inside the scope i will set the value to Y;
 */

let y;

{
    y = "Declared outside the block statement, set the value inside the scope";
    console.log(y);
}

console.log(y);

{
    const string = "The value cannot be changed";
    console.log(string);
}