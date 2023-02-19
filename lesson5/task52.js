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
  
  console.log(addBinary('11', '1'))
  console.log(addBinary('1010', '1011'))
  console.log(addBinary(11, 100)) // 'Incorrect type'
  console.log(addBinary('410', '100')) // 'Incorrect values'