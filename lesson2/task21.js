
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