/**
 * @param {number} value
 * @param {string} resUnits
 * @return {number}
 */


function convertTemp(value, resUnits){
    let result = 0;                                 // this variable will contain the result of calculations
    switch (resUnits) {
        case 'F':
            result = value / (5 / 9) + 32;          // counting degrees fahrenheit from celcius
            console.log(`${value}°C is ${result}°F`);
            return result;

        case 'C':
            result = (5 / 9) * (value - 32);        // counting degrees celcius from fahrenheit
            console.log(`${value}°F is ${result}°C`);
            break;
    
        default:
            console.log('These units of measure are not supported yet!'); // if an error will occur
            break;
    }    
}

let degrees;
degrees = convertTemp(60, 'F');         // trying to get a value from function
console.log(degrees);                   // Output: 140
degrees = convertTemp(45, 'C');         // trying to get a value from function
console.log(degrees);                   // Output: undefined