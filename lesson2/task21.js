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

/**
 * Converts Celcius to Fahrenheit.
 * @param {number} c - The current value in Celcius that need to be converted.
 */
const celsiusToFahrenheit = c => {
    return (c * 9/5) + 32;
}

/**
 * Converts Fahrenheit to Celcius.
 * @param {number} f - The current value in Fahrenheit that need to be converted.
 */
const fahrenheitToCelsius = f => {
    let result = 5/9 * (f - 32);
    console.log(result);
}

let result = celsiusToFahrenheit(60);
console.log(result);

fahrenheitToCelsius(45);