let celsiusGlobal = 60;
let fahrenheitGlobal = 145;

celsiusConversion(celsiusGlobal)
fahrenheitConversion(fahrenheitGlobal)
function celsiusConversion(celsius)
{
    let cToFar = celsius * 9 / 5 + 32 //Fahrenheit calculating
    let result =  cToFar
    console.log(celsius + "°C is " + result + "°F" )
}
function fahrenheitConversion(fahrenheit)
{
    let fToCel = (fahrenheit - 32) * 5 / 9 //Celsius calculating
    let result =  fToCel
    console.log(fahrenheit + "°F is " + result + "°C" )
}