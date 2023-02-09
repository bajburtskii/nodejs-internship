/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * @example:
 *    Input: strs = ["flower","flow","flight"]
 *    Output: "fl"
 *
 *  @example:
 *    Input: strs = ["dog","racecar","car"]
 *    Output: ""
 *    Explanation: There is no common prefix among the input strings.
 *
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    strs.sort();
    let currentPrefix = strs[0];
    // We start to loop from the second word because the first word is already used as current prefix
    // If no common prefix was found as result of the loop then the currentPrefix will be modified to an empty string
    for (let i = 1; i < strs.length; i++) {
        // If indexOf method returns 0 means that currentPrefix started to match with beginning of current word; otherwise it returns -1 until we get correct currentPrefix
        while (strs[i].indexOf(currentPrefix) !== 0) {
            // To modify the currentPrefix until the indexOf method returns 0
            currentPrefix = currentPrefix.substring(0, currentPrefix.length - 1);
        }
    }
    return currentPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
