/**
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * @example
 *    Input: a = "11", b = "1"
 *    Output: "100"
 *
 * @example
 *    Input: a = "1010", b = "1011"
 *    Output: "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  const reg = /^[01]*$/
  if (typeof a !== 'string' || typeof b !== 'string') return 'Incorrect type'
  if (!reg.test(a) || !reg.test(b)) return 'Incorrect values'
  const aBinary = parseInt(a, 2)
  const bBinary = parseInt(b, 2)
  const result = (aBinary + bBinary).toString(2)
  return result
};

const addBinaryAlgorithm = function(a, b) {
  const reg = /^[01]*$/
  let result = ''
  let carry = 0
  if (typeof a !== 'string' || typeof b !== 'string') return 'Incorrect type'
  if (!reg.test(a) || !reg.test(b)) return 'Incorrect values'
  const maxLength = Math.max(a.length, b.length)
  // Check length and do it equal for both strings for comparing
  if (a.length !== b.length) {
    a = a.padStart(maxLength, '0')
    b = b.padStart(maxLength, '0')
  }

  for (let i = maxLength-1; i >= 0; i--) {
    let currentA = a[i]
    let currentB = b[i]
    if (andOne(currentA, currentB)) {
      result = '0' + result
      carry = 1
    }
    if (xor(currentA, currentB)) {
      carry ? result = '0' + result :  result = '1' + result   
    }
    if (andZero(currentA, currentB)) {
      result = `${carry + 0 + result}`
      carry = 0
    }
  }    
  if (carry) {
    result = '1' + result
  } 
  return result
};

const andOne = function (a, b) {
  return (a === '1' && b === '1')
}

const xor = function (a, b) {
  return (a === '1' && b === '0') || (a === '0' && b === '1')
}

const andZero = function (a, b) {
  return a === '0' && b === '0'
}


// console.log(addBinary('11', '1'))
// console.log(addBinary('1010', '1011'))
// console.log(addBinary(11, 100)) // 'Incorrect type'
// console.log(addBinary('410', '100')) // 'Incorrect values'


console.log(addBinaryAlgorithm('11', '1'))
console.log(addBinaryAlgorithm('1010', '1011'))
console.log(addBinaryAlgorithm('1010', '11'))
console.log(addBinaryAlgorithm('100101', '10101'))
console.log(addBinaryAlgorithm(11, 100)) // 'Incorrect type'
console.log(addBinaryAlgorithm('410', '100')) // 'Incorrect values'