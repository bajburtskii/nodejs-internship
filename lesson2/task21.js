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
 * 
 * @param {number} degree 
 * @param {string} scaleType examples: "c" or "f"
 * @returns {number}
 */

const convertTemp = (degree, scaleType) => {
  switch (scaleType) {
    case 'c':
      const resultCels = 5/9 * (degree - 32)
      console.log(`${degree}°F is ${resultCels}°C.`) // Don't return because of exercise purposes
      return null
    case 'f':
      const resultFahr =  degree * 9/5 + 32
      return `${degree}°C is ${resultFahr}°F.` 
    default:
      return 'Enter wanted degree scale ("f" / "c") PROPERLY'
  }
}

const result = convertTemp(100, 'c')
result ? console.log(result) : console.log('Haven\'t access from global scope to resultCels')

