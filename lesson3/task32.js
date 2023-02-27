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
let array_words_right = ["flower", "flow", "flight"];

let array_words_not_right =  ["dog","racecar","car"];

function prefix(array) {
    if (!Array.isArray(array) || array.length === 0) return "";

    let pref = "",
        count_array_one = array.length,
        count_array_two = array.length;
    for (let idx = 0; idx < count_array_one; ++idx) {
        let equals = true,
            c = array[0][idx];
        for (let j = 1; j < count_array_two; ++j) {
            if (c !== array[j][idx]) {
                equals = false;
                break;
            }
        }
        if (equals)
            pref += c;
    }
    return pref;
}
console.log("Array1 = " + prefix(array_words_right));
console.log("Array2 = " + prefix(array_words_not_right) + " empty");