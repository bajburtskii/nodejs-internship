c(60) //Passing an Argument to a Function
f(45) //Passing an Argument to a Function
function c(celsious)
{
    let cToFar = celsious * 9 / 5 + 32 //Farengeyt calculating
    let result =  cToFar
    console.log(celsious + "°C is " + result + "°F" )
}
function f(farengeyt)
{
    let fToCel = (farengeyt - 32) * 5 / 9 //Celsious calculating
    let result =  fToCel
    console.log(farengeyt + "°F is " + result + "°C" )
}