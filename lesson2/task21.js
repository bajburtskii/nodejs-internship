"use strict"

/**
 * Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
 *
 * C = (5/9) * (F - 32)
 * The results from C to F have to be available in Global Scope, and results from F to C have to be available only in a local scope.
 *
 * Please support your code with detailed comments answering the question `Why`, rather than `What`.
 *
 * Sample Output:
 *    60°C is 140 °F.
 *    45°F is 7.222222222222222°C.
 */


/**
 *
 * @param temperature - numeric temperature
 * @param initialScale - can be "c" (Celsius) or "f" (Fahrenheit)
 * @returns {null|number} - number if initialScale is valid, otherwise null
 */
function celsius_to_fahrenheit(temperature, initialScale) {
    switch (initialScale.toLowerCase()) {
        case "c":
            return (temperature - 32) * (5 / 9)
        case "f":
            console.log(temperature * 9 / 5 + 32)
            return null
        default:
            console.error("Error occurred during processing temperatures")
            return null
    }
}


function test() {
    console.log(celsius_to_fahrenheit(-40, "c"));       // Output: -40
    console.log(celsius_to_fahrenheit(-40, "f"));       // Output: -40
    console.log(celsius_to_fahrenheit(312, "abc"));     // Output: null
    console.log(celsius_to_fahrenheit(13, "c"));        // Output: -10.555555555555555
    console.log(celsius_to_fahrenheit(-43, "f"));       // Output: -45.400000000000006
}

test()
