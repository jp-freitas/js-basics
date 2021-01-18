/**
 * Data types
 * 
 * String: Cadeia de Caracteres
 * 
 * "" - aspas duplas
 * '' - aspas simples
 * `` - template strings
 */

console.log("João 'Pedro'");
console.log(`João Pedro "de" 'Deus' Freitas`);
console.log(`${1 + 3}`);

/**
 * Number: cadeia de números
 * 
 * 33 - Inteiros
 * 12.5 - Reais
 * NaN - Not a Number
 * Infinity - infinito
 */

console.log(33);
console.log(12.5);
console.log(12.5 + 33);
console.log(45.5 / "string");
console.log(Infinity);

/**
 * Boolean: Verdadeiro ou Falso
 * 
 * true - Verdadeiro
 * false - Falso
 */

console.log(true);
console.log(false);

/**
 * Undefined vs Null
 * 
 * undefined - indefinido
 * 
 * null - vazio
 */

console.log(undefined);
console.log(null);

/**
 * Object - uma estrutura de dados
 */

console.log({
  name: 'João Pedro',
  idade: 26,
  funcionalidades: {
    andar: function() {
      console.log('andar');
    },
    falar: function() {
      console.log('falar');
    }
  }
});

/**
 * Array - Agrupamento de dados / Vetor
 * 
 * Tipo uma fila de dados
 */

console.log(["João", 26]);