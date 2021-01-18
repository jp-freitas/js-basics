/**
 * Variables - Symbolic names to receive some value;
 * Identifiers
 * Three reserved words to create a variable:
 *  - var
 *  - let
 *  - const
 */

/**
 * I declare clima variable and assign value "Quente" to clima variable
 */
var clima = "Quente";

/**
 * I reassing the value "Frio" to the clima variable
 */
clima = "Frio";

/**
 * The value to be shown on the console will be "Frio"
 */
console.log(clima);

/**
 * I declare clima variable and assign value "Quente" to clima variable
 */
let clima = "Quente";

/**
 * I reassing the value "Frio" to the clima variable
 */
clima = "Frio";

/**
 * The value to be shown on the console will be "Frio"
 */
console.log(clima);

/**
 * I declare clima variable and assign value "Quente" to clima variable
 */
const clima = "Quente";

/**
 * A syntax error wil be generated, because the word const cannot have its value change
 */
clima = "Frio";

/**
 * The value to be shown on the console will be "Frio"
 */
console.log(clima);