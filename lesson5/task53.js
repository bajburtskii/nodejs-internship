/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 *
 * @example
 *    Input: nums = [3,0,1]
 *    Output: 2
 *    Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
 *
 * @example
 *    Input: nums = [0,1]
 *    Output: 2
 *    Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
 *
 * @example
 *    Input: nums = [9,6,4,2,3,5,7,0,1]
 *    Output: 8
 *    Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let num = [3,0,1];
num = num.sort((a,b) => a - b);

let num1 = [0,1];
num1 = num1.sort((a,b) => a - b);

let num2 = [9,6,4,2,3,5,7,0,8,1];
num2 = num2.sort((a,b) => a - b);
const missingNumber = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== i) {
            return i;
        }
    }
    return nums.length;
};
console.log("Array 1 Missing element = " + missingNumber(num));
console.log("Array 2 Missing element = " + missingNumber(num1));
console.log("Array 3 Missing element = " + missingNumber(num2));