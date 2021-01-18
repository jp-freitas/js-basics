/**
 * Variables and data types
 */

/**
 * Declaration
 */

var name;

/**
 * Assignment
 */

name = `Joao`;

/**
 * What is the type of name?
 */

console.log(typeof name);

/**
 * Grouping of statements
 */

let age, isHuman;

/**
 * Assignment
 */

age = 26;
isHuman = true;

/**
 * Concatenating values
 * console.log('O ' + name + ' tem ' + age + ' anos.');
 */

/**
 * Interpolation of values with template literals or template strings
 */

console.log(`O ${name} tem ${age} anos`);

/**
 * Objects
 */

const person = {
    name: 'João',
    age: 26,
    weigth: 80,
    isAdmin: true,
}

console.log(person.name);

/**
 * Arrays
 */

const animals = [
    'Lion',
    'Monkey',
    'Cat',
    5,
    3,
    6,
]

console.log(animals[4]); //3
console.log(animals.length); //6
