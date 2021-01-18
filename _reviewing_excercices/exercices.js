/**
 * Exercises
 */

/**
 * Declare a variable named weight
 */

let weight;

/**
 * What kind of data is the variable above
 */

console.log(typeof weight); // undefined

/**
 * Declare a variable and assign values to each of the data
 * 
 *  - name: String
 *  - age: Number(integer)
 *  - stars: Number(float)
 *  - isSubscribed: Boolean
 */

let name = "João Pedro";
let age = 26;
let stars = 3.5;
let isSubscribed = false;

/**
 * - The variable below is what kind of data?
 * - Assign this variable the same properties and values as in execise 3
 * - Show the following message on the console:
 *      <name> de idade <age> pesa <weight> kg.
 *      (Replace <name>, <age> and <weight> with the values for each object property)
 */

let student = {
    name: 'João Pedro',
    age: 26,
    weight: 80.0,
    isSubscribed: false,
};

console.log(typeof student); // object

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

/**
 * Declare a variable of type Array, named students and assign it no value, that is, only the empty Array.
 */

let students = [];

/**
 * Reassign value to the above variable, placing the student object in question 4 inside it(Do not copy and paste the object, but use the created object and inset it into the Array)
 */

students = [
    student,
]

console.log(students);

/**
 * Place the zero position value of the Array on the console above
 */

console.log(students[0]);

/**
 * Create a new student and place it in position 1 of the students Array
 */

let student1 = {
    name: 'Maria de Fátima',
    age: 25,
    weight: 50.0,
    isSubscribed: true,
}

students[1] = student1;

console.log(students);

/**
 * Wightout running the code below, answer, What is the code response below and why? after your answer, run the code and see if you got it right.
 * 
 * console.log(a);
 * var a = 1;
 */

console.log(a);
var a = 1;