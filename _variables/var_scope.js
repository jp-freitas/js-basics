/**
 * Var Scope - The scope determines the visibility of a variable in JS
 * 
 * Block Statement - Where we put some code:
 * {
 *  This is a block, and inside here we put some codes
 * }
 * 
 * The block will also create a new escope
 */


/**
 * The word VAR is global and local
 * Hoisting - JS takes the variable, removes it from the scope, but without the value, and puts it on top of the entire code and then assigns the value to it.
 */

console.log(`Exists the X variable before block statement? ${x}`);

{
    var x = 0
}

console.log(`Exists the X variable after block statement? ${x}`);