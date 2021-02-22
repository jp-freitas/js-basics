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