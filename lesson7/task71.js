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
let k = 3;
let n = 7;

let k1 = 3;
let n1 = 9;

let k2 = 4;
let n2 = 1;
const combinationSum3 = function(k, n) {
    let comb = [];
    let resault = [],
        dfs = (num, curSum) => {
        if (comb.length === k) {
            curSum === n && resault.push([...comb]);
            return;
        }
        if (curSum >= n) return;
        for (let i = num; i < 10; i++) {
            comb.push(i);
            dfs(i + 1, curSum + i);
            comb.pop();
        }
    };
    dfs(1, 0);
    return resault;
};

console.log(combinationSum3(k,n))
console.log(combinationSum3(k1,n1))
console.log(combinationSum3(k2,n2))