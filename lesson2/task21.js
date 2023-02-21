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

{
    /* Converting from degrees Celsius to Fahrenheit is degrees */
    let gradC = 60;
    let gradF = ((gradC * 9 / 5) + 32);
    console.log("Converting from 60 degrees Celsius to Fahrenheit is " + gradF + " degrees");
}
{
    /*
    The conversion from degrees Fahrenheit to Сelsius is degrees
    */
    let gradF = 45;
    let gradC = (5 / 9) * (gradF - 32);
    console.log("The conversion from 45 degrees fahrenheit to celsius is " + gradC + " degrees")
}
