/**
 * Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
 *
 * C = (5/9) * (F - 32)
 *
 * The results from C to F have to be available in Global Scope, and results from F to C have to be available only in a local scope.
 *
 * Please support your code with detailed comments answering the question `Why`, rather than `What`.
 *
 * Sample Output:
 *    60°C is 140 °F.
 *    45°F is 7.222222222222222°C.
 */


'use strict'

/**
 * Converts Celcius to Fahrenheit.
 * @param {number} c - The current value in Celcius that need to be converted.
 */
const toFahrenheit = c => (c * 9/5) + 32;

/**
 * Converts Fahrenheit to Celcius.
 * @param {number} f - The current value in Fahrenheit that need to be converted.
 */
const toCelsius = f => 5/9 * (f - 32);

/**
 * Validates is given value is actually a number.
 * @param {number} n - The current value.
 */
const isNum = n => !(isNaN(n) || n === '');

/**
 * Converts temperatures to and from Celsius, Fahrenheit by specific scale.
 * @param {number} temperature - The current temperatures.
 * @param {string} scale - The scale to which the temperature should be converted.
 */
const convertTemp = (temperature, scale) => {
    let result = null;
    if (!isNum(temperature)) {
        return `Invalid temperature is entered`;
    }
    if (scale.toString().toLowerCase() === 'c') {
        result = toCelsius(temperature);
        console.log(`${temperature}°F is ${result}°C`);
        return null; //We return null in purpose the result not to be available outside function scope
    } else if (scale.toString().toLowerCase() === 'f') {
        result = toFahrenheit(temperature);
        console.log(`${temperature}°C is ${result}°F`);
        return result; //We return conv result of Celcius to Fahrenheit
    } else {
        return `Invalid scale is entered`; //We return null if user have entered any string except 'f' or 'c'
    }
}

let fahrenheit = convertTemp(60, 'f'); //60°C is 140 °F
let celsius = convertTemp(45, 'c'); //45°F is 7.222222222222222°C

console.log(fahrenheit, celsius); //null and 7.222222222222222