/**
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 *
 * Only numbers 1 through 9 are used.
 * Each number is used at most once.
 * Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
 *
 * @example
 *    Input: k = 3, n = 7
 *    Output: [[1,2,4]]
 *    Explanation:
 *      1 + 2 + 4 = 7
 *      There are no other valid combinations.
 *
 * @example
 *    Input: k = 3, n = 9
 *    Output: [[1,2,6],[1,3,5],[2,3,4]]
 *    Explanation:
 *      1 + 2 + 6 = 9
 *      1 + 3 + 5 = 9
 *      2 + 3 + 4 = 9
 * There are no other valid combinations.
 *
 * @example
 *    Input: k = 4, n = 1
 *    Output: []
 *    Explanation:
 *      There are no valid combinations.
 *      Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  if (typeof k !== 'number' || typeof n != 'number') return 'Invalid types'
  const results = [] // Here will be proper combinations arrays from compareComb func
  // Recursive func, need to be inside for having access to k and n vars
  const compareComb = (start, sum, combination) => {
    // Pushing only proper combs into results array
    if (combination.length === k && sum === n) {
      results.push([...combination]) // Creating deep copy of combination for pushing
      return
    }
    // Force stop if comb obviously will have bigger sum. Because it has same length as k but already failed previous check
    if (combination.length === k || sum >= n) {
      return
    }
    /**
     * Super important for-loop
     * First of all it can generate numbers that we need without creating hardcoded arr, just with simple inrementing
     * Index we are using for dynamically change start and sum argument for next recursive call of func
     * This loop filling up our combination array (IMPORTANT - combination array is ONE object for all recursive calls of func)
     * Method pop for 'combination' array will trigger when one of compareComb func calls ended with return statement
     * and it will change 'combination' array for all others calls of this func in stack (but original start and sum
     * arguments will stay the same, also "i" variable for each func call will be same as before it calling recursively itself)
     * If 'i' in called compareComb func > 9  - for loop ends and this instance of func also ends working and give control for previous
     * recursively called compareComb func in stack (with mutated combination array)
     */
    for (let i = start; i <= 9; i++) {
      combination.push(i)
      // Will generate up to k + 1 calls in stack
      compareComb(i + 1, sum + i, combination) // increment start arg and accumulate sum using previous arg + i
      combination.pop()
    }
  }
  compareComb(1, 0, []) // First call of recursive func with default parameters
  return results
}


console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))
console.log(combinationSum3(4, 1))
console.log(combinationSum3('4', 1))