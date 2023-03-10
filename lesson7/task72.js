/**
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 *
 * @example
 *    Input: num = 38
 *    Output: 2
 *    Explanation: The process is
 *      38 --> 3 + 8 --> 11
 *      11 --> 1 + 1 --> 2
 *      Since 2 has only one digit, return it.
 *
 */

/**
 * @param {number} num
 * @return {number}
 */
 const addDigits = function(num) {
  if (typeof num !== 'number') return 'Invalid type, must be a number'
  if (!Number.isInteger(num)) return 'Not a float number'
  let result
  // Using closure i have access to variables in allDigit func
  function reducingArr (curNum) {
     const strNum = curNum.toString()
     const arrElements = [...strNum].map((element) => parseInt(element, 10))
     const sumElements = arrElements.reduce((acc, cur) => acc + cur)
     // Recursively calling reducingArr till i will have proper result
     if (sumElements > 9) {
       reducingArr(sumElements)
       return;
     }
     result = sumElements 
   }
  reducingArr(num)
  return result
};

// Try without using closure
const addDigits2 = function(num) {
  if (typeof num !== 'number') return 'Invalid type, must be a number'
  if (!Number.isInteger(num)) return 'Not a float number'
  const strNum = num.toString()    
  const arrElements = [...strNum].map((element) => parseInt(element, 10))
  const sumElements = arrElements.reduce((acc, cur) => acc + cur)
  if (sumElements < 10) {
    return sumElements
  }
  return addDigits2(sumElements)
}

console.log('addDigits func OUTPUT:')
console.log(addDigits(38))
console.log(addDigits(1489))
console.log(addDigits(19995))
console.log(addDigits('19995'))
console.log(addDigits(19.995))

console.log('==================')

console.log('addDigits2 func OUTPUT:')
console.log(addDigits2(38))
console.log(addDigits2(1489))
console.log(addDigits2(19995))
console.log(addDigits2('19995'))
console.log(addDigits2(19.995))
