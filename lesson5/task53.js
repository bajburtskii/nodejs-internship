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
const missingNumber = function(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }
    // By subtracting actualSum from expectedSum we can find the missing number
    return expectedSum - actualSum;
};
console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

// Solution using Set
const missingNumberSet = function(nums) {
    let set = new Set();
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        set.add(nums[i]);
    }

    for (let i = 0; i <= n + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
};
console.log(missingNumberSet([3,0,1]));
console.log(missingNumberSet([0,1]));
console.log(missingNumberSet([9,6,4,2,3,5,7,0,1]));