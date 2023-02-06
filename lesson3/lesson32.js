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
    let common = '';                                // here will be the common prefix
    if (strs.length) {                              // to avoid errors with empty array
        const temp = strs[0];                       // first word in array for comparing wtih others
        for (let i = 0; i < temp.length; i++) {     
            let match = false;
            for (let j = 1; j < strs.length; j++) { // looking for similarities between the first and the rest of the words
                if (!strs[j][i]) {
                    return common;
                }
                match = temp[i] === strs[j][i];     // shows if a match is found
            }
            if (match) {
                common += temp[i];                  // putting the prefix together
            }            
        }
    } 
    return common;   
};
const strs = ["flower","flow","flight"];
console.log('Common prefix:', longestCommonPrefix(strs));   // Output: "fl"
const strs2 = ["dog","racecar","car"];
console.log('Common prefix:', longestCommonPrefix(strs2 )); // Output: ""
const strs3 = [];
console.log('Common prefix:', longestCommonPrefix(strs3));  // Output: ""